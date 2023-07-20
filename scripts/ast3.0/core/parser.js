const fs = require('fs');
const babel = require('@babel/core');
const chalk = require('chalk');
const { get, pick } = require('lodash');
const { PIPELINE } = require('./constants');
const { SETGLOBAL, RESETGLOBAL, INGLOBALRANGE } = require('./global');
const {
  isShape,
  isNewExpression,
  isMatchType,
  getObjectValue,
  getValue,
  log,
  isFetch,
  transformSign,
} = require('./utils.js');

const meta = {
  fetchURL: '', // fetch url
  shape: '', // 图表类型
  imported: {}, // import 信息
  staticCode: [], // 静态代码
  config: [], // 配置项
  chartConfig: {}, // 图表配置项
  position: { min: 0, max: Infinity }, // 位置信息
  nextStatement: {}, // 下一步
  currentEnd: Infinity, // 当前结束
  code: '', // 原始代码
};

// 状态重置
const reset = () => {
  RESETGLOBAL();
  Object.keys(meta).forEach((key) => {
    if (key === 'position') {
      meta[key] = { min: 0, max: Infinity };
    } else {
      meta[key] = meta[key] instanceof Array ? [] : typeof meta[key] === 'string' ? '' : {};
    }
  });
};

/**
 * Set config
 * @param {string} key
 * @param {*} node
 */
const setConfigObject = (key, node, cfg, item) => {
  const { code } = meta;
  const arguments = get(node, 'arguments');
  const { callback } = item;
  // .transform
  if (typeof callback === 'function') {
    const value = getValue(get(node, 'arguments.0'), code);
    callback(cfg, value);
  } else {
    if (arguments.length === 2) {
      cfg[key] = {
        ...cfg[key],
        [get(node, 'arguments.0.value')]: getValue(get(node, 'arguments.1'), code),
      };
    }
    if (arguments.length === 1) {
      const value = getValue(get(node, 'arguments.0'), code);
      if (typeof value === 'object') {
        cfg[key] = {
          ...cfg[key],
          ...value,
        };
      } else {
        cfg[key] = value;
      }
    }
  }
};

/**
 * Use static code
 * @param {*} path
 */
const setStaticCode = ({ node }) => {
  const { start, end } = node;
  const { code } = meta;
  let isStatic = true;
  const content = code.slice(start, end);
  PIPELINE.forEach(({ key }) => {
    if (content.includes(`.${key}(`)) {
      isStatic = false;
    }
  });
  if (INGLOBALRANGE([start, end])) {
    isStatic = false;
  }
  // new Chart()
  if (get(node, 'declarations.0.init.type') === 'NewExpression') {
    isStatic = false;
  }
  // .render()
  if (get(node, 'expression.callee.property.name') === 'render') {
    isStatic = false;
  }
  if (isStatic) {
    SETGLOBAL([start, end]);
    meta.staticCode.push(code.slice(start, end));
  }
};

/**
 * Get config
 */
const getConfig = () => meta.config[meta.config.length - 1];

/**
 * Availabe code
 * @param {numebr} start
 * @param {number} end
 * @description 判断当前表达式适合放入的config
 */
const availabeCode = (start, end) => {
  const { min, max } = meta.position;
  // 在范围内
  if (start <= min && end >= max) {
    return true;
  }
  return false;
};

const getResult = () => {
  return pick(meta, 'chartConfig', 'config', 'staticCode', 'imported', 'fetchURL');
};

/**
 * @param {string} params
 * @param {string} type
 * @description 解析代码，当 type 为 code 时，说明 params 是已经读取的代码，否则是文件路径
 */
const parser = (params, type) => {
  try {
    reset();
    meta.config.push({});
    if (type === 'code') {
      meta.code = params;
    } else {
      meta.code = fs.readFileSync(params, 'utf-8');

      const visitorExpressions = {
        // import 信息
        ImportDeclaration(path) {
          const { node } = path;
          meta.imported = {
            ...meta.imported,
            [get(node, 'source.value')]: get(node, 'specifiers', []).map((item) => {
              return item.imported.name;
            }),
          };
        },
        // new Chart
        NewExpression(path) {
          const { node } = path;
          // .chart
          if (isNewExpression(node)) {
            meta.chartConfig = Object.assign(meta.chartConfig, getObjectValue(get(node, 'arguments.0'), meta.code));
          }
        },
        // 抽取静态代码 start end
        'FunctionDeclaration|VariableDeclaration|ExpressionStatement'(path) {
          setStaticCode(path);
        },
        CallExpression(path) {
          const { node } = path;
          const { start, end } = node;

          // .shape
          if (isShape(node)) {
            const shape = get(node, 'callee.property.name');
            const setMetaInfo = () => {
              meta.shape = shape;
              meta.position.min = start;
              meta.position.max = end;
            };
            if (!meta.shape) setMetaInfo();
            if (shape !== meta.shape) {
              meta.config.push({});
              setMetaInfo();
            }
            getConfig()['type'] = get(node, 'callee.property.name');
          }
          if (isFetch(node)) {
            meta.fetchURL = get(node, 'arguments.0.value');
          }

          if (end > meta.currentEnd) {
            const lastConfig = getConfig();
            if (lastConfig.type) {
              Object.assign(lastConfig, meta.nextStatement);
            } else {
              meta.chartConfig = Object.assign(meta.chartConfig, meta.nextStatement);
            }
            meta.nextStatement = {};
          }

          meta.currentEnd = end;

          // 通用处理逻辑
          PIPELINE.forEach((item) => {
            const { key } = item;
            if (isMatchType(node, key)) {
              if (availabeCode(start, end)) {
                setConfigObject(key, node, getConfig(), item);
              } else {
                setConfigObject(key, node, meta.nextStatement, item);
              }
            }
          });

          // recursive
          // path.traverse(visitorExpressions);
        },
      };
      const vistorPlugins = {
        visitor: visitorExpressions,
      };
      babel.transform(fs.readFileSync(params, 'utf-8'), {
        plugins: [vistorPlugins],
      });
    }

    const lastConfig = getConfig();

    if (Object.keys(meta.nextStatement).length) {
      Object.assign(lastConfig, meta.nextStatement);
      meta.nextStatement = {};
    }
    log(chalk.green(`解析成功：${params}`));
    return getResult();
  } catch (err) {
    log(chalk.red(`解析出错：params: ${params}; type: ${type}`));
    log(chalk.red(`出错信息：${err}`));
    return {
      hasError: true,
      errMessage: err,
      errPath: params,
    };
  }
};

module.exports = { parser, transformSign };
