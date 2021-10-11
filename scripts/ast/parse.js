const fs = require('fs');
const babel = require('@babel/core');
const chalk = require('chalk');
const { get, find } = require('lodash');
const log = console.log;

let fetchUrl = '';
let chartName = ''; // 组件名称
let plotName = ''; // 插件名称
let utilName = ''; // util 名称
let dataKey = ''; // 存放 data 的变量
let dataSet = ''; // dataset

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
 * isFetchExpression
 * @param {*} node
 */
const isFetchExpression = (node) => {
  return node.type === 'CallExpression' && get(node, 'callee.object.callee.object.callee.name') === 'fetch';
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
  fetchUrl = '';
  chartName = '';
  plotName = '';
  dataKey = '';
  utilName = '';
  dataSet = '';
};

const excludeFunctionNames = ['formatter'];

const initCode = (code) => {
  return `
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
  ${code}
  `;
};

const setImport = (path) => {
  const { node } = path;
  if (node.source.value === '@antv/g2plot') {
    node.specifiers?.forEach((item) => {
      plotName += plotName ? ', ' : '';
      plotName += item.imported.name;
    });
  }
  if (node.source.value === '@antv/util') {
    node.specifiers?.forEach((item) => {
      utilName += utilName ? ', ' : '';
      utilName += item.imported.name;
    });
  }
  if (node.source.value === '@antv/data-set') {
    node.specifiers?.forEach((item) => {
      dataSet += dataSet ? ', ' : '';
      dataSet += item.imported.name;
    });
  }
};

const parseFile = (params, type) => {
  try {
    reset();
    let jsCode = '';
    if (type === 'code') {
      jsCode = params;
    } else {
      jsCode = fs.readFileSync(params, 'utf-8');

      if (params.indexOf('.ts') !== -1) {
        // 提取关键信息，正常情况应该全部使用 babel ，由于时间原因，暂不考虑全量修改
        const visitorExpressions = {
          // import 信息
          ImportDeclaration(path) {
            setImport(path);
            path.remove();
          },
          ExportNamedDeclaration(path) {
            const { node } = path;
            path.replaceWith(node.declaration);
          },
          // 获取 fetch  地址
          MemberExpression(path) {
            const { node } = path;
            if (isFetch(node)) {
              fetchUrl = node.object.arguments[0].value;
            }
          },
          // 抽取 config
          VariableDeclarator(path) {
            const { node } = path;
            if (isNewExpression(node)) {
              if (get(node, 'init.callee.type') === 'Identifier' && get(node, 'init.callee.name') !== 'DataView') {
                chartName = get(node, 'init.callee.name');
                node.id.name = 'config';
                node.init = node.init.arguments[1];
                path.replaceWith(node);
              }
            }
          },
          // 提取 data 变量
          'FunctionExpression|ArrowFunctionExpression'(path) {
            const { node } = path;
            if (
              ['data', 'fetchData', 'csv'].includes(get(node, ['params', 0, 'name'])) &&
              get(node, ['body', 'type']) === 'BlockStatement' &&
              !excludeFunctionNames.includes(get(node, ['id', 'name']))
            ) {
              dataKey = get(node, ['params', 0, 'name']);
            }
          },
          // 删除空值
          ExpressionStatement(path) {
            const { node } = path;
            if (isNullExpression(node)) {
              path.remove();
            }
          },
          CallExpression(path) {
            const { node } = path;
            // remove render
            if (isRender(node)) {
              path.remove();
            }
            // recursive
            path.traverse(visitorExpressions);
            if (isFetchExpression(node)) {
              path.replaceWithMultiple(node.arguments[0].body.body);
            }
          },
        };
        const vistorPlugins = {
          visitor: visitorExpressions,
        };
        const { code } = babel.transform(fs.readFileSync(params, 'utf-8'), {
          plugins: [vistorPlugins],
        });
        // fs.writeFileSync('./temp.js', initCode(code));
        jsCode = fetchUrl ? initCode(code) : code;
      }
    }

    return {
      code: chartName && jsCode,
      chartName,
      plotName,
      utilName,
      dataSet,
      hasError: false,
      errPath: '',
    };
  } catch (err) {
    log(chalk.red(`解析出错：params: ${params}; type: ${type}`));
    log(chalk.red(`出错信息：${err}`));
    return {
      hasError: true,
      errPath: params,
    };
  }
};

module.exports = parseFile;
