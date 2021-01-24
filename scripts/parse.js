const fs = require('fs');
const esprima = require('esprima');
const estraverse = require('estraverse');
const babelCore = require('@babel/core');
const escodegen = require('escodegen');
const chalk = require('chalk');
const { get, find } = require('loadsh');
const log = console.log;

let blcokBody = '';
let fetchUrl = '';
let chartName = '';
let dataKey = '';
const filterParams = ['then'];

/**
 * import语句
 * @param {*} node
 */
const isImport = (node) => {
  return node.type === 'ImportDeclaration';
};

/**
 * render
 * @param {*} node
 */
const isRender = (node) => {
  return node.type === 'CallExpression' && get(node, 'callee.property.name') === 'render';
};

/**
 * nullExpression
 * @param {*} node
 */
const isNullExpression = (node) => {
  return node.type === 'ExpressionStatement' && !node.expression;
};

/**
 * isFetch
 * @param {*} node
 */
const isFetch = (node) => {
  return node.type === 'MemberExpression' && get(node, 'object.callee.name') === 'fetch';
};

/**
 * new表达式
 * @param {*} node
 */
const isNewExpression = (node) => {
  return node.type === 'VariableDeclarator' && get(node, 'init.type') === 'NewExpression';
};


// 状态重置
const reset = () => {
  blcokBody = '';
  fetchUrl = '';
  chartName = '';
  dataKey = '';
};
const FunctionTypes = ['FunctionExpression', 'ArrowFunctionExpression'];
const excludeFunctionNames = ['formatter']
// 提取核心信息
const getOptions = (ast) => {
  estraverse.replace(ast, {
    enter: (node, parent) => {
      if (isFetch(node)) {
        fetchUrl = node.object.arguments[0].value;
      }
      if (
        FunctionTypes.includes(node.type) &&
        ['data', 'fetchData'].includes(get(node, ['params', 0, 'name'])) &&
        get(node, ['body', 'type']) === 'BlockStatement' && !excludeFunctionNames.includes(get(node, ['id', 'name']))
      ) {
        dataKey = get(node, ['params', 0, 'name']);
        const block = get(node, 'body.body', []);
        block.forEach((item) => {
          blcokBody += escodegen.generate(item);
        });
        return estraverse.VisitorOption.Remove;
      }
      if (isNewExpression(node)) {
        chartName = get(node, 'init.callee.name');
        node.id.name = 'config';
        node.init = node.init.arguments[1];
      }
    },
  });
};

// 独立处理body
const generateBody = (body) => {
  const bodyCode = esprima.parseModule(body, { loc: true, tokens: true });
  estraverse.replace(bodyCode, {
    enter: (node) => {
      if (isNewExpression(node)) {
        node.id.name = 'config';
        node.init = node.init.arguments[1];
      }
      if (isRender(node)) {
        return esprima.parseScript('');
      }
    },
  });
  return escodegen.generate(bodyCode);
};

// 过滤多余信息
const generateFile = (ast) => {
  estraverse.replace(ast, {
    enter: (node, parent) => {
      if (isImport(node)) {
        return estraverse.VisitorOption.Remove;
      }
      if (
        node.type === 'CallExpression' &&
        filterParams.includes(get(node, 'callee.property.name'))
      ) {
        return esprima.parseScript('CONSTANTCODE');
      }
    },
    leave: (node, parent) => {
      if (node.type === 'Identifier' && get(node, 'name') === 'CONSTANTCODE') {
        const code = `
        const [${dataKey}, setData] = useState([]);

        useEffect(() => {
          asyncFetch();
        }, []);

        const asyncFetch = () => {
          fetch("${fetchUrl}")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
              console.log("fetch data failed", error);
            });
        };
        ${generateBody(blcokBody)}
        `;
        return esprima.parseScript(code);
      }
      if (isRender(node) || isNullExpression(node)) {
        return estraverse.VisitorOption.Remove;
      }
      if (isNewExpression(node)) {
        node.id.name = 'config';
        node.init = node.init.arguments[1];
      }
    },
    fallback: (node) => {
      console.log('fallback: ', node.type);
    },
  });
};

const getMetaInfo = (filePath) => {
  const pathArray = filePath.split('/');
  const fileName = pathArray.pop();
  const metaJsonCode = fs.readFileSync(`${pathArray.join('/')}/meta.json`, 'utf-8');
  const demos = JSON.parse(metaJsonCode).demos;
  const metaInfo = find(demos, (item) => item.filename === fileName);
  return metaInfo;
};

const parseFile = (params, type) => {
  try {
    reset();
    let jsCode = '';
    let metaInfo = {};
    if (type === 'code') {
      jsCode = params;
    } else {
      jsCode = fs.readFileSync(params, 'utf-8');
      metaInfo = getMetaInfo(params);
      if (params.indexOf('.ts') !== -1) {
        const { code } = babelCore.transformSync(jsCode, {
          presets: ['@babel/preset-typescript'],
          filename: params.split('/')[params.split('/').length - 1],
          code: true,
        });
        jsCode = code;
      }
    }
    const parseCode = esprima.parseModule(jsCode, { loc: true, tokens: true });
    getOptions(parseCode);
    generateFile(parseCode);
    return {
      code: escodegen.generate(parseCode).replace("'use strict';", '').replace("var _g2plot = require('@antv/g2plot');", ''),
      title: get(metaInfo, 'title.zh'),
      chartName,
      hasError: false
    };
  } catch (err) {
    log(chalk.red(`解析出错：params: ${params}; type: ${type}`));
    log(chalk.red(`出错信息：${err}`));
    return {
      code: params,
      title: '',
      chartName,
      hasError: true
    };
  }
};

module.exports = parseFile;
