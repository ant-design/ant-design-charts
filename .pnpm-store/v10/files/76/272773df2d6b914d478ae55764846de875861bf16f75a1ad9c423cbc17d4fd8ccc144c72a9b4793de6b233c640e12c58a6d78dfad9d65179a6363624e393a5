# npm-name

> Check whether a package or organization name is available on npm

## Install

```sh
npm install npm-name
```

## Usage

```js
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

## API

### npmName(name, options?)

Check whether a package/organization name is available (not registered) on npm.

An organization name should start with `@` and should not be a scoped package.

Returns a `Promise<boolean>` of whether the given name is available.

#### name

Type: `string`

The name to check.

#### options

Type: `object`

##### registryUrl

Default: User's configured npm registry URL.

THe registry URL to check name availability against.

**Note:** You're unlikely to need this option. Most use-cases are best solved by using the default. You should only use this option if you need to check a package name against a specific registry.

### npmNameMany(names, options?)

Check whether multiple package/organization names are available (not registered) on npm.

Returns a `Promise<Map>` of name and status.

```js
import {npmNameMany} from 'npm-name';

const result = await npmNameMany(['chalk', '@sindresorhus/is', 'abc123']);

console.log(result.get('chalk'));
//=> false

console.log(result.get('@sindresorhus/is'));
//=> false

console.log(result.get('abc123'));
//=> true
```

#### names

Type: `string[]`

Multiple names to check.

#### options

Type: `object`

Same as `npmName()`.

## Related

- [npm-name-cli](https://github.com/sindresorhus/npm-name-cli) - CLI for this module
