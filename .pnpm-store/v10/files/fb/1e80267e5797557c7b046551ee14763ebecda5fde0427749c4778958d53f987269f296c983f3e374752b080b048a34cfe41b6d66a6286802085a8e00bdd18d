import ts = require('typescript');

declare module 'prettier' {
	interface Options {
		organizeImportsSkipDestructiveCodeActions?: boolean;
		organizeImportsTypeOrder?: ts.OrganizeImportsTypeOrder;
	}
	interface ParserOptions {
		organizeImportsSkipDestructiveCodeActions?: boolean;
		organizeImportsTypeOrder?: ts.OrganizeImportsTypeOrder;
	}
}

export {};
