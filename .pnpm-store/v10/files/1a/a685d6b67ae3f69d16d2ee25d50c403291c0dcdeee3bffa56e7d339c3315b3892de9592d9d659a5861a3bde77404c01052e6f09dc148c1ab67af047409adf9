export type Options = {
	/**
	Store the config at `$CONFIG/package-name/config.json` instead of the default `$CONFIG/configstore/package-name.json`.

	This is not recommended as you might end up conflicting with other tools, rendering the "without having to think" idea moot.

	@default false
	*/
	readonly globalConfigPath?: boolean;

	/**
	Set the path of the config file. Overrides the `packageName` and `globalConfigPath` options.

	**Please don't use this option unless absolutely necessary and you know what you're doing.**
	*/
	readonly configPath?: string;

	/**
	Clear the config file if it contains invalid JSON. If set to `false`, a `SyntaxError` will be thrown instead of clearing the file. This allows you to recover corrupted config files manually.

	@default true
	*/
	readonly clearInvalidConfig?: boolean;
};

/**
Easily load and persist config without having to think about where and how.

The config is stored in a JSON file located in `$XDG_CONFIG_HOME` or `~/.config`.
Example: `~/.config/configstore/some-id.json`
*/
export default class Configstore {
	/**
	Get the path to the config file. Can be used to show the user where the config file is located or even better open it for them.
	*/
	readonly path: string;

	/**
	Get the item count.
	*/
	readonly size: number;

	/**
	Get all the config as an object or replace the current config with an object.
	*/
	all: Record<string, unknown>;

	/**
	@param id - Name of your package.
	@param defaults - Default config.
	*/
	constructor(id: string, defaults?: Record<string, unknown>, options?: Options);

	/**
	Set an item.

	@param key - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.
	@param value - Must be JSON serializable. Trying to set the type `undefined`, `function`, or `symbol` will result in a TypeError.
	*/
	set(key: string, value: unknown): void;

	/**
	Set multiple items at once.

	@param object - A hashmap of items to set at once.
	*/
	set(object: Record<string, unknown>): void;

	/**
	Get an item.

	@param key - The key of the item to get. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.
	*/
	get<T = unknown>(key: string): T | undefined;

	/**
	Check if an item exists.

	@param key - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.
	*/
	has(key: string): boolean;

	/**
	Delete an item.

	@param key - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.
	*/
	delete(key: string): void;

	/**
	Delete all items.
	*/
	clear(): void;
}
