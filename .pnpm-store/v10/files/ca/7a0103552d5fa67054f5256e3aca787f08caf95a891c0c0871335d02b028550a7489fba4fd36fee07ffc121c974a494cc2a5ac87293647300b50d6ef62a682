import type {ChalkInstance} from 'chalk';

/**
Terminal string styling with [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

@example
```
import chalkTemplate from 'chalk-template';

console.log(chalkTemplate`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);
```

@example
```
import chalkTemplate from 'chalk-template';
import chalk from 'chalk';

console.log(chalk.red.bgBlack(chalkTemplate`2 + 3 = {bold ${2 + 3}}`));
```
*/
export default function chalkTemplate(text: TemplateStringsArray, ...placeholders: unknown[]): string;

/**
Terminal string styling with [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates),
configured for standard error instead of standard output

@example
```
import {chalkTemplateStderr as chalkTemplate} from 'chalk-template';

console.log(chalkTemplate`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);
```

@example
```
import {chalkTemplateStderr as chalkTemplate} from 'chalk-template';
import {chalkStderr as chalk} from 'chalk';

console.log(chalk.red.bgBlack(chalkTemplate`2 + 3 = {bold ${2 + 3}}`));
```
*/
export function chalkTemplateStderr(text: TemplateStringsArray, ...placeholders: unknown[]): string;

/**
Terminal string styling.

This function can be useful if you need to wrap the template function. However, prefer the default export whenever possible.

__Note:__ It's up to you to properly escape the input.

@example
```
import {template} from 'chalk-template';

console.log(template('Today is {red hot}'));
```
*/
export function template(text: string): string;

/**
Terminal string styling, configured for stderr.

This function can be useful if you need to wrap the template function. However, prefer the `chalkTemplateStderr` export whenever possible.

__Note:__ It's up to you to properly escape the input.

@example
```
import {templateStderr as template} from 'chalk-template';

console.log(template('Today is {red hot}'));
```
*/
export function templateStderr(text: string): string;

/**
Terminal string styling, using a custom Chalk instance.

This function can be useful if you need to create a template function using your own Chalk instance.

__Note:__ It's up to you to properly escape the input.

@example
```
import {Chalk} from 'chalk'
import {makeTemplate} from 'chalk-template';

const template = makeTemplate(new Chalk());

console.log(template('Today is {red hot}''));
```
*/
export function makeTemplate(chalk: ChalkInstance): (text: string) => string;

/**
Terminal string styling with [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates),
configured using a custom Chalk instance.

@example
```
import {Chalk} from 'chalk'
import {makeTaggedTemplate} from 'chalk-template';

const chalkTemplate = makeTaggedTemplate(new Chalk());

console.log(chalkTemplate`Today is {red hot}`);
```
*/
export function makeTaggedTemplate(chalk: ChalkInstance): (text: TemplateStringsArray, ...placeholders: unknown[]) => string;
