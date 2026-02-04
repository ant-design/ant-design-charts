const { dirname } = require('path');
const ts = require('typescript');
const { findTsconfig } = require('./find-tsconfig');

const { getCompilerOptions, getVueCompilerOptions } = require('./get-compiler-options');

/**
 * Create the most basic TS language service host for the given file to make import sorting work.
 *
 * @param {string} path path to file
 * @param {string} content file's content
 *
 * @returns {ts.LanguageServiceHost}
 */
function getTypeScriptLanguageServiceHost(path, content) {
	const tsconfig = findTsconfig(path);
	const compilerOptions = getCompilerOptions(tsconfig);

	return {
		directoryExists: ts.sys.directoryExists,
		fileExists: ts.sys.fileExists,
		getDefaultLibFileName: ts.getDefaultLibFileName,
		getDirectories: ts.sys.getDirectories,
		readDirectory: ts.sys.readDirectory,
		readFile: ts.sys.readFile,
		getCurrentDirectory: () => (tsconfig ? dirname(tsconfig) : ts.sys.getCurrentDirectory()),
		getCompilationSettings: () => compilerOptions,
		getNewLine: () => ts.sys.newLine,
		getScriptFileNames: () => [path],
		getScriptVersion: () => '0',
		getScriptSnapshot: (filePath) => {
			if (filePath === path) {
				return ts.ScriptSnapshot.fromString(content);
			}
		},
	};
}

/**
 * Get a Language Service Host for Vue support, that has some extra methods needed by `@volar/vue-typescript`.
 *
 * @typedef {import('@volar/vue-language-core/out/types').LanguageServiceHost} VueLanguageServiceHost
 *
 * @param {string} path path to file
 * @param {string} content file's content
 *
 * @returns {VueLanguageServiceHost}
 */
function getVueLanguageServiceHost(path, content) {
	const tsconfig = findTsconfig(path);
	const vueCompilerOptions = getVueCompilerOptions(tsconfig);

	return {
		...getTypeScriptLanguageServiceHost(path, content),
		getVueCompilationSettings: () => vueCompilerOptions,
		/**
		 * Can return either `require('typescript')` or `require('typescript/lib/tsserverlibrary')`.
		 *
		 * @see https://github.com/simonhaenisch/prettier-plugin-organize-imports/pull/60#discussion_r934408179
		 *
		 * @returns {any}
		 */
		getTypeScriptModule: () => ts,
	};
}

module.exports = { getTypeScriptLanguageServiceHost, getVueLanguageServiceHost };
