/**
Detect the dominant newline character of a string.

@returns The detected newline or `undefined` when no newline character is found or `\n` when no dominant newline is present.

@example
```
import {detectNewline} from 'detect-newline';

detectNewline('foo\nbar\nbaz\r\n');
//=> '\n'
```
*/
export function detectNewline(string: string): '\r\n' | '\n' | undefined;

/**
Detect the dominant newline character of a string.

@returns The detected newline or `\n` when no newline character is found, no dominant newline is present, or the input is not a string.

@example
```
import {detectNewlineGraceful} from 'detect-newline';

detectNewlineGraceful('foo');
//=> '\n'
```
*/
export function detectNewlineGraceful(string: string): '\r\n' | '\n';
export function detectNewlineGraceful(string?: unknown): '\n';
