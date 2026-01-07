const requireSafe = require('./require')
const sortPackageJson = require('./sort-package-json')

const { parsers } =
  requireSafe('prettier/parser-babel') ||
  // istanbul ignore next
  requireSafe('prettier/parser-babylon')

const parser = parsers['json-stringify']

/** @type {import('prettier').Plugin['parsers']} */
exports.parsers = {
  'json-stringify': {
    ...parser,
    preprocess(text, options) {
      // istanbul ignore next
      if (parser.preprocess) {
        text = parser.preprocess(text, options)
      }

      return options.filepath && /(^|\\|\/)package\.json$/.test(options.filepath)
        ? sortPackageJson.default(text)
        : text
    },
  },
}
