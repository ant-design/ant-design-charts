const { parser } = require('./parser');
const { transformSign, parseObjectFromCode } = require('./utils');
const { processOptions } = require('./options');

module.exports = { parser, transformSign, parseObjectFromCode, processOptions };
