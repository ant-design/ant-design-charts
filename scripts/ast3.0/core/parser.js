const chalk = require('chalk');
const { processOptions } = require('./options.js');
const { template } = require('./template.js');
const { processAPI } = require('./api.js');
const { replaceSign } = require('./utils.js');

const isSpecMode = (lines) => lines.join('\n').includes('chart.options');

/**
 * @param {string} lines
 * @description 解析代码，当 type 为 code 时，说明 params 是已经读取的代码，否则是文件路径
 */
const parser = (lines) => {
  try {
    if (isSpecMode(lines)) return processOptions(lines);
    const [config, staticCode] = processAPI(lines);
    const firstLine = lines[0];
    const render = firstLine.includes('autoMount') || (config.includes('data') && config.includes('xField'));
    const codeSign = render ? firstLine : `\`\`\`js`;
    const newLine = config && staticCode ? '\n' : '';
    return `${codeSign}\n${render ? template(config, staticCode) : staticCode + newLine + replaceSign(config)}\n\`\`\``;
  } catch (err) {
    console.error(chalk.red(`Error parsing code: ${err.message}`));
    return lines.join('\n');
  }
};

module.exports = { parser };
