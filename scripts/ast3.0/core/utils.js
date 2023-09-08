const { get } = require('lodash-es');
const { SHAPES, SIGN } = require('./constants');
const { SETGLOBAL } = require('./global');

const startRegex = new RegExp(`"${SIGN}`, 'g');
const endRegex = new RegExp(`${SIGN}"`, 'g');

const log = console.log;

/**
 * nullExpression
 * @param {*} node
 */
const isNullExpression = (node) => {
  return node.type === 'ExpressionStatement' && !node.expression;
};

/**
 * new表达式
 * @param {*} node
 */
const isNewExpression = (node) => {
  return get(node, 'callee.name') === 'Chart';
};

/**
 * Match chart type
 * @param {*} node
 */
const isMatchType = (node, type) => {
  return get(node, 'callee.property.name') === type;
};

/**
 * Get chart shape
 * @param {*} node
 */
const isShape = (node) => {
  return SHAPES.includes(get(node, 'callee.property.name'));
};

/**
 * Is function
 * @param {string} nodeType
 */
const isFunction = (nodeType) => {
  return /FunctionExpression|ArrowFunctionExpression/.test(nodeType);
};

/**
 * Use single
 * @param {string} str
 */
const useSign = (str) => {
  return replaceEnter(`${SIGN}${str}${SIGN}`);
};

/**
 * Replace enter
 * @param {*} str
 */
const replaceEnter = (str) => {
  return str.replace(/\n/g, ' ');
};

/**
 * isFetch
 * @param {*} node
 * @description 判断该表达式是否是 fetch
 */
const isFetch = (node) => {
  return get(node, 'callee.name') === 'fetch';
};

/**
 * transform sign
 * @param {string} str
 * @description 解析 meta 时，去掉 SIGN
 */
const transformSign = (str) => {
  return str.replace(startRegex, '').replace(endRegex, '');
};

/**
 * Get loop object
 * @param {*} node
 * @param {string} code  code
 */
const getObjectValue = (node, code) => {
  const { properties } = node;
  const obj = {};
  properties.forEach((item) => {
    const { key, value } = item;
    if (isFunction(value.type)) {
      // .legend('color', { labelFormatter: (d) => (d === 1 ? 'Male' : 'Female') })
      const { start, end } = value;
      SETGLOBAL([start, end]);
      obj[key.name] = useSign(code.slice(start, end));
    } else if (value.type === 'ArrayExpression') {
      // .scale('color', { type: 'ordinal', range: ['#ca8861', '#675193'] })
      const { start, end } = value;
      SETGLOBAL([start, end]);
      obj[key.name] = useSign(code.slice(start, end));
    } else if (value.type === 'ObjectExpression') {
      // recursive
      obj[key.name] = getObjectValue(value, code);
    } else {
      obj[key.name] = getValue(value);
    }
  });
  return obj;
};

/**
 * Get node value
 * @param {*} arguments
 * @param {string} code
 */
const getValue = (arguments, code = '') => {
  const { start, end } = arguments;

  // .encode('y', 'frequency')
  if (arguments.type === 'StringLiteral') {
    return arguments.value;
  }
  // .encode('y', EPSILON)
  if (arguments.type === 'Identifier') {
    return useSign(arguments.name);
  }
  // .scale('y', { nice: true)
  if (arguments.type === 'ObjectExpression') {
    return getObjectValue(arguments, code);
  }
  // .encode('y', (d) => (d.sex === 1 ? -d.people : d.people))
  if (isFunction(arguments.type)) {
    SETGLOBAL([start, end]);
    return useSign(code.slice(start, end));
  }
  /**
   * .data({
   *  transform: [
   *    {
   *      type: 'filter',
   *      callback: (d) => d.year === 2000,
   *    },
   *  ],
   * })
   */
  if (arguments.type === 'ArrayExpression') {
    SETGLOBAL([start, end]);
    return useSign(code.slice(start, end));
  }
  return arguments.value;
};

module.exports = {
  isNullExpression,
  isNewExpression,
  isShape,
  isFunction,
  useSign,
  replaceEnter,
  getValue,
  getObjectValue,
  isMatchType,
  log,
  isFetch,
  transformSign,
};
