const ts = require('typescript');
const { memoize } = require('./memoize');

/**
 * Find the path of the project's tsconfig from a path to a file in the project.
 *
 * @type {(path: string) => string | undefined}
 */
module.exports.findTsconfig = memoize((path) => ts.findConfigFile(path, ts.sys.fileExists));
