const requireSafe = require('./require')
const { parsers } = requireSafe('prettier/parser-babel') || requireSafe('prettier/parser-babylon')
const sortPackageJson = require('sort-package-json')
const parser = parsers['json-stringify']

exports.parsers = {
  'json-stringify': {
    ...parser,
    preprocess(text, options) {
      if (parser.preprocess) {
        text = parser.preprocess(text, options)
      }

      return options.filepath && /(^|\\|\/)package\.json$/.test(options.filepath)
        ? sortPackageJson(text)
        : text
    },
  },
}
