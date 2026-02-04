const { dirname } = require('path');
const ts = require('typescript');
const { findTsconfig } = require('./find-tsconfig');
const { memoize } = require('./memoize');

/**
 * Get the compiler options from the path to a tsconfig.
 *
 * @param {string | undefined} tsconfig path to tsconfig
 */
function getCompilerOptions(tsconfig) {
	const compilerOptions = tsconfig
		? ts.parseJsonConfigFileContent(ts.readConfigFile(tsconfig, ts.sys.readFile).config, ts.sys, dirname(tsconfig))
				.options
		: ts.getDefaultCompilerOptions();

	compilerOptions.allowJs = true; // for automatic JS support

	return compilerOptions;
}

module.exports.getCompilerOptions = memoize(getCompilerOptions);

/**
 * Get the Vue compiler options from the path to a tsconfig.
 *
 * Uses a dynamic require instead of top-level because this is only needed for Vue.
 *
 * @param {string | undefined} tsconfig path to tsconfig
 */
function getVueCompilerOptions(tsconfig) {
	return tsconfig
		? require('@volar/vue-language-core').createParsedCommandLine(
				// @ts-ignore
				ts,
				ts.sys,
				tsconfig,
				[],
		  ).vueOptions
		: {};
}

module.exports.getVueCompilerOptions = memoize(getVueCompilerOptions);
