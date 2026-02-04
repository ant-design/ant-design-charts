const ts = require('typescript');

const { findTsconfig } = require('./find-tsconfig');
const { getTypeScriptLanguageServiceHost } = require('./service-host');

/**
 * Get the correct language service for the given parser.
 *
 * @param {import('prettier').ParserOptions['parser']} parser
 * @param {string} filepath
 * @param {string} code
 *
 * @returns {import('typescript').LanguageService}
 */
const getLanguageService = (parser, filepath, code) => {
	const langaugeServiceHost = getTypeScriptLanguageServiceHost(filepath, code);

	const languageService = ts.createLanguageService(langaugeServiceHost);

	switch (parser) {
		case 'vue':
			return getVueDecoratedProxyLanguageService(langaugeServiceHost, languageService, filepath);

		/** @todo add svelte support */

		default:
			return languageService;
	}
};

/**
 * Decorate a language service so it can handle Vue files.
 *
 * @param {import('typescript').LanguageServiceHost} langaugeServiceHost
 * @param {import('typescript').LanguageService} languageService
 * @param {string} filepath
 *
 * @returns {import('typescript').LanguageService}
 */
function getVueDecoratedProxyLanguageService(langaugeServiceHost, languageService, filepath) {
	const vueTscDir = tryCatch(() => require('path').dirname(require.resolve('vue-tsc/package.json')));

	if (!vueTscDir) {
		console.error('Please install vue-tsc to organize imports in Vue files.');
		return languageService;
	}

	const { createProxyLanguageService, decorateLanguageServiceHost } = require(
		require.resolve('@volar/typescript', { paths: [vueTscDir] }),
	);

	/** @type {import('@vue/language-core')} */
	const {
		createLanguage,
		createVueLanguagePlugin,
		FileMap,
		createParsedCommandLine,
		getDefaultCompilerOptions,
	} = require(require.resolve('@vue/language-core', { paths: [vueTscDir] }));

	const tsconfig = findTsconfig(filepath);

	const vueLanguagePlugin = createVueLanguagePlugin(
		ts,
		langaugeServiceHost.getCompilationSettings(),
		tsconfig ? createParsedCommandLine(ts, ts.sys, tsconfig).vueOptions : getDefaultCompilerOptions(),
		(s) => s,
	);

	const language = createLanguage([vueLanguagePlugin], new FileMap(ts.sys.useCaseSensitiveFileNames), () => {});

	const snapshot = langaugeServiceHost.getScriptSnapshot(filepath);

	if (snapshot) {
		language.scripts.set(filepath, snapshot);
	}

	const { initialize, proxy } = createProxyLanguageService(languageService);

	initialize(language);

	decorateLanguageServiceHost(ts, language, langaugeServiceHost);

	return proxy;
}

/**
 * @template T
 * @param {() => T} fn
 * @returns {T | undefined}
 */
function tryCatch(fn) {
	try {
		return fn();
	} catch {
		return undefined;
	}
}

module.exports = { getLanguageService };
