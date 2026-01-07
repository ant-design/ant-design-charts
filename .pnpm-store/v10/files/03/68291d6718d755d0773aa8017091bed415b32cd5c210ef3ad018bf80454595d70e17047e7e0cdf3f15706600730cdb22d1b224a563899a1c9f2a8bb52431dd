const prettier = require('prettier/parser-postcss');
const sorter = require('./config/sorter')
const { parsers } = prettier;

const languages  = Object.keys(parsers);

exports.parsers = {}
for (const lang of languages) {
  const parser = parsers[lang];
  exports.parsers[lang] = {
    ...parser,
    preprocess(text, options) {
      if (parser.preprocess) {
        text = parser.preprocess(text, options)
      }
      return sorter(text)
    },
  }
}
