const babel = require('@babel/core');
const generate = require('@babel/generator').default;
const chalk = require('chalk');
const { get, maxBy } = require('lodash');
const { PIPELINE } = require('./constants.js');
const { SETGLOBAL, RESETGLOBAL, INGLOBALRANGE } = require('./global.js');
const { isShape, isSpec, isNewExpression, isMatchType, getObjectValue, getValue, replaceSign } = require('./utils.js');

const meta = {
  shape: '', // 图表类型
  imported: {}, // import 信息
  staticCode: [], // 静态代码
  chartConfig: {}, // 图表配置项
  config: [], // API 模式产生的配置项
  spec: '', // spec
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

/**
 * @param {string} lines
 * @description 解析 api 代码
 */
const processAPI = (lines) => {
  try {
    reset();
    const codeBlock = lines.slice(1, lines.length - 1);
    // 删除首、尾行
    meta.config.push({});
    meta.code = codeBlock.join('\n');
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
        if (isNewExpression(node) && get(node, 'arguments.0')) {
          meta.chartConfig = Object.assign(meta.chartConfig, getObjectValue(get(node, 'arguments.0'), meta.code));
        }
      },
      // 抽取静态代码 start end
      'FunctionDeclaration|VariableDeclaration|ExpressionStatement|TSDeclareFunction|TSInterfaceDeclaration|TSTypeAliasDeclaration'(
        path,
      ) {
        setStaticCode(path);
      },
      CallExpression(path) {
        const { node } = path;
        const { start, end } = node;
        // spec
        if (isSpec(node)) {
          const arg = node.arguments[0];
          if (arg && arg.type === 'ObjectExpression') {
            const { code } = generate(arg, { concise: true });
            // spec 默认只有一份
            if (!meta.spec) meta.spec = code;
          }
        }
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
    const babelOptions = {
      plugins: [vistorPlugins, '@babel/plugin-transform-typescript'],
      parserOpts: {
        allowAwaitOutsideFunction: true,
        allowImportExportEverywhere: true,
        allowSuperOutsideMethod: true,
        allowUndeclaredExports: true,
        plugins: ['typescript', 'classProperties', 'jsx'],
      },
    };

    // 对于直接传入的代码，强制指定为 TypeScript 语法
    babelOptions.sourceType = 'module';
    babelOptions.filename = 'virtual.ts'; // 虚拟文件名
    babel.transform(meta.code, babelOptions);

    const lastConfig = getConfig();

    if (Object.keys(meta.nextStatement).length) {
      Object.assign(lastConfig, meta.nextStatement);
      meta.nextStatement = {};
    }

    const { staticCode, config: optionsCode } = meta;
    const maxLengthConfig = maxBy(optionsCode, (item) => Object.keys(item).length);
    const replacedStaticCode = staticCode.map((item) => replaceSign(item));
    const staticCodeStr = replacedStaticCode.join('\n');
    const config = {};
    Object.keys(maxLengthConfig).forEach((key) => {
      if (key === 'encode') {
        const encode = maxLengthConfig[key];
        if (encode && typeof encode === 'object') {
          Object.keys(encode).forEach((subKey) => {
            config[subKey + 'Field'] = encode[subKey];
          });
        }
      } else {
        config[key] = maxLengthConfig[key];
      }
    });
    const configStr = Object.keys(config).length ? JSON.stringify(config, null, 2) : '';
    return [configStr, staticCodeStr];
  } catch (err) {
    console.error(chalk.red(`Process API Error: ${err.message}`));
    return [lines.join('\n'), ''];
  }
};

module.exports = { processAPI };
