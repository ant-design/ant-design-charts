const { transformSign } = require('./core');

/**
 * @param {object} meta
 * @description 生成模板组件
 */
const codeTemplate = (meta) => {
  const { staticCode = [], config = [], chartConfig = {}, fetchURL, imported } = meta;

  let code = '';

  staticCode.forEach((str) => {
    code += `${str}\n\n`;
  });

  return `
    const imported = ${transformSign(JSON.stringify(imported, null, 2))};

    ${code}

    const chartConfig = ${transformSign(JSON.stringify(chartConfig, null, 2))};

    const children = ${transformSign(JSON.stringify(config, null, 2))};
  `;
};

module.exports = {
  codeTemplate,
};
