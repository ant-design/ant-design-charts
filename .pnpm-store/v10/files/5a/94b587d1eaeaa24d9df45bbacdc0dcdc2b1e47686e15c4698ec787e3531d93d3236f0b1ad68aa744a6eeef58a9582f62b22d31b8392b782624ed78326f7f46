export class InvalidNameError extends Error {}

export type Options = {
	/**
	The registry URL to check name availability against.

	Default: User's configured npm registry URL.
	*/
	readonly registryUrl: string;
};

/**
Check whether a package/organization name is available (not registered) on npm.

An organization name should start with `@` and should not be a scoped package.

@param name - The name to check.
@returns Whether the given name is available.

@example
```
import npmName from 'npm-name';

// Check a package name
console.log(await npmName('chalk'));
//=> false

// Check an organization name
console.log(await npmName('@ava'));
//=> false

console.log(await npmName('@abc123'));
//=> true

try {
	await npmName('_ABC');
} catch (error) {
	console.log(error.message);
	// Invalid package name: _ABC
	// - name cannot start with an underscore
	// - name can no longer contain capital letters
}
```
*/
export default function npmName(name: string, options?: Options): Promise<boolean>;

/**
Check whether multiple package/organization names are available (not registered) on npm.

An organization name should start with `@` and should not be a scoped package.

@param names - Multiple names to check.
@returns A `Map` of name and status.

@example
```
import {npmNameMany} from 'npm-name';

const result = await npmNameMany(['chalk', '@sindresorhus/is', 'abc123']);

console.log(result.get('chalk'));
//=> false

console.log(result.get('@sindresorhus/is'));
//=> false

console.log(result.get('abc123'));
//=> true
```
*/
export function npmNameMany<NameType extends string>(
	names: readonly NameType[],
	options?: Options
): Promise<Map<NameType, boolean>>;
