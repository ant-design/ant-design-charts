export interface Options {
	/**
	Allow URLs without a protocol.

	@default false

	@example
	```
	import isUrl from 'is-url-superb';

	isUrl('example.com');
	//=> false

	isUrl('example.com', {lenient: true});
	//=> true
	```
	*/
	readonly lenient?: boolean;
}

/**
Check if a string is a URL.

@example
```
import isUrl from 'is-url-superb';

isUrl('https://sindresorhus.com');
//=> true

isUrl('unicorn');
//=> false
```
*/
export default function isUrl(url: string, options?: Options): boolean;
