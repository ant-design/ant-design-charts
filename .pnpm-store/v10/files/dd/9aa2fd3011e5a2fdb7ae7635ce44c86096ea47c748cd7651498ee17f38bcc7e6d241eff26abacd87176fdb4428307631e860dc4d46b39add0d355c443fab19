type ArgumentsTuple = readonly [any, ...unknown[]];
type Arguments = string | ArgumentsTuple | Record<any, any> | null | undefined | false;
type Key = Arguments | (() => Arguments);

declare const serialize: (key: Key) => [string, Arguments];

declare const INFINITE_PREFIX = "$inf$";

export { INFINITE_PREFIX, serialize };
