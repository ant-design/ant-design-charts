export interface Options {
	/**
	Only match an exact string. By default, it matches any scoped package names in a string. Useful with `RegExp#test()` to check if a string is a scoped package name.

	@default false
	*/
	readonly exact?: boolean;
}

/**
Regular expression for matching [scoped npm package names](https://docs.npmjs.com/misc/scope).

@returns A `RegExp` for matching scoped package names.

@example
```
import scopedRegex from 'scoped-regex';

scopedRegex({exact: true}).test('@sindresorhus/df');
//=> true

'foo @sindresorhus/df bar'.match(scopedRegex());
//=> ['@sindresorhus/df']
```
*/
export default function scopedRegex(options?: Options): RegExp;
