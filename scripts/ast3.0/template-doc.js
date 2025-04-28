const { transformSign, parseObjectFromCode } = require('./core');
const { omit, reduce, merge } = require('lodash');

/**
 * @param {object} meta
 * @description 生成模板组件
 */
const docTemplate = (meta) => {
  const { staticCode = [], config = [], chartConfig = {}, spec, code, success } = meta;

  if (!success) {
    return code;
  }

  let insetCode = '';

  staticCode.forEach((str) => {
    insetCode += `${str}\n\n`;
  });

  const configList = config.map((item) => item).filter((item) => Object.keys(item).length > 0);
  const configCode = reduce(
    configList,
    (acc, item) => {
      return merge(acc, item);
    },
    {},
  );

  if (!spec && !Object.keys(configCode).length) {
    return insetCode;
  }

  const omitKeys = ['container', 'data', 'encode', 'type', 'height', 'width'];

  const plot = {
    ...omit(chartConfig, omitKeys),
    ...omit(spec ? parseObjectFromCode(spec) : configCode, omitKeys),
  };

  return `${transformSign(JSON.stringify(plot, null, 2))}`;
};

module.exports = {
  docTemplate,
};
