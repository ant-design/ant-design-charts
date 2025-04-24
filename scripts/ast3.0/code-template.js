const { transformSign, parseObjectFromCode } = require('./core');
const { omit } = require('lodash');

/**
 * @param {object} meta
 * @description 生成模板组件
 */
const codeTemplate = (meta) => {
  const { staticCode = [], config = [], chartConfig = {}, fetchURL, imported, spec, code, success } = meta;

  if (!success) {
    return code;
  }

  let insetCode = '';

  staticCode.forEach((str) => {
    insetCode += `${str}\n\n`;
  });

  const configCode = config.map((item) => item).filter((item) => Object.keys(item).length > 0);

  if (!spec && !configCode.length) {
    return insetCode;
  }

  const plot = {
    ...omit(chartConfig, ['container']),
    children: spec ? [parseObjectFromCode(spec)] : configCode,
  };

  return `
    import { Mix } from '@ant-design/charts';

    ${spec ? '' : insetCode}

    const config = ${transformSign(JSON.stringify(plot, null, 2))};

    // <Mix {...config} />
  `;
};

module.exports = {
  codeTemplate,
};
