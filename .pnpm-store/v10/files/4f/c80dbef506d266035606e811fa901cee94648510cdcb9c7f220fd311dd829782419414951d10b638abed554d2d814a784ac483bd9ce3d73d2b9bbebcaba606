# configstore

> Easily load and persist config without having to think about where and how

The config is stored in a JSON file located in `$XDG_CONFIG_HOME` or `~/.config`.\
Example: `~/.config/configstore/some-id.json`

*If you need this for Electron, check out [`electron-store`](https://github.com/sindresorhus/electron-store) instead.*\
*And check out [`conf`](https://github.com/sindresorhus/conf) for a more modern version of `configstore`.*

## Install

```sh
npm install configstore
```

## Usage

```js
import fs from 'node:fs';
import Configstore from 'configstore';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Create a Configstore instance.
const config = new Configstore(packageJson.name, {foo: 'bar'});

console.log(config.get('foo'));
//=> 'bar'

config.set('awesome', true);
console.log(config.get('awesome'));
//=> true

// Use dot-notation to access nested properties.
config.set('bar.baz', true);
console.log(config.get('bar'));
//=> {baz: true}

// Use default values with nullish coalescing
console.log(config.get('nonexistent') ?? 'default value');
//=> 'default value'

config.delete('awesome');
console.log(config.get('awesome'));
//=> undefined
```

## API

### Configstore(packageName, defaults?, options?)

Returns a new instance.

#### packageName

Type: `string`

Name of your package.

#### defaults

Type: `object`

Default config.

#### options

Type: `object`

##### globalConfigPath

Type: `boolean`\
Default: `false`

Store the config at `$CONFIG/package-name/config.json` instead of the default `$CONFIG/configstore/package-name.json`. This is not recommended as you might end up conflicting with other tools, rendering the "without having to think" idea moot.

##### configPath

Type: `string`\
Default: Automatic

**Please don't use this option unless absolutely necessary and you know what you're doing.**

Set the path of the config file. Overrides the `packageName` and `globalConfigPath` options.

##### clearInvalidConfig

Type: `boolean`\
Default: `true`

Clear the config file if it contains invalid JSON. If set to `false`, a `SyntaxError` will be thrown instead of clearing the file. This allows you to recover corrupted config files manually.

### Instance

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

### .set(key, value)

Set an item.

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

### .set(object)

Set multiple items at once.

### .get(key)

Get an item.

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

> [!TIP]
> Use the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) to provide default values:
> ```js
> const value = config.get('key') ?? 'default value';
> ```

### .has(key)

Check if an item exists.

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

### .delete(key)

Delete an item.

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

### .clear()

Delete all items.

### .size

Get the item count.

### .path

Get the path to the config file. Can be used to show the user where the config file is located or even better open it for them.

### .all

Get all the config as an object or replace the current config with an object:

```js
config.all = {
	hello: 'world'
};
```
