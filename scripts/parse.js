const fs = require('fs');
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
const { get, find } = require('loadsh');
const { dataUrl } = require('./constants');

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

/**
 * 生成fetchUrl
 */
const getUrl = (url) => {
  const RegExp = /^(http|https)/;
  if (RegExp.test(url)) {
    return url;
  }
  const jsonName = url.split('/');
  const res = dataUrl.find((item) => item.fileName === jsonName[jsonName.length - 1]);
  return res.filePath;
};

// 状态重置
const reset = () => {
  blcokBody = '';
  fetchUrl = '';
  chartName = '';
  dataKey = '';
};

// 提取核心信息
const getOptions = (ast) => {
  estraverse.replace(ast, {
    enter: (node, parent) => {
      if (isFetch(node)) {
        fetchUrl = node.object.arguments[0].value;
      }
      if (
        node.type === 'ArrowFunctionExpression' &&
        ['data', 'fetchData'].includes(get(node, ['params', 0, 'name']))
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
          fetch("${getUrl(fetchUrl)}")
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
    }
    const parseCode = esprima.parseModule(jsCode, { loc: true, tokens: true });
    getOptions(parseCode);
    generateFile(parseCode);
    return {
      code: escodegen.generate(parseCode),
      title: get(metaInfo, 'title.zh'),
      chartName,
    };
  } catch (err) {
    console.error(`解析出错：params: ${params}; type: ${type}`);
    console.error(`出错信息：${err}`);
    return {
      code: params,
      title: '',
      chartName,
    };
  }
};

module.exports = parseFile;
