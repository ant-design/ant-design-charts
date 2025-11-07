declare namespace orgRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any organization names in a string. Useful with `RegExp#test()` to check if a string is a organization name.

		@default false
		*/
		readonly exact?: boolean;
	}
}

	/** 
	@example
	```
	import orgRegex from  'org-regex';

	orgRegex({exact: true}).test('@ava');
	//=> true

	'foo @ava bar @ava/init'.match(orgRegex());
	//=> ['@ava']
	```
	*/
declare function orgRegex(options?: orgRegex.Options): RegExp;

export = orgRegex;
