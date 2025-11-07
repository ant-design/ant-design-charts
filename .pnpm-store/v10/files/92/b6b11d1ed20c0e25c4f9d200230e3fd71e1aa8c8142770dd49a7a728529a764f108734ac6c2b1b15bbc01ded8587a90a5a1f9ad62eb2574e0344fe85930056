# chalk-template

> Terminal string styling with [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

## Install

```sh
npm install chalk-template
```

## Usage

For printing to standard output (stdout):

```js
import chalkTemplate from 'chalk-template';
import chalk from 'chalk';

console.log(chalkTemplate`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);

console.log(chalk.red.bgBlack(chalkTemplate`2 + 3 = {bold ${2 + 3}}`));

const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalkTemplate`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);

console.log(chalkTemplate`
	There are also {#FF0000 shorthand hex styles} for
	both the {#ABCDEF foreground}, {#:123456 background},
	or {#ABCDEF:123456 both}.
`);
```

For printing to standard error (stderr):

```js
import {chalkTemplateStderr} from 'chalk-template';

console.error(chalkTemplateStderr`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);
```

## API

Blocks are delimited by an opening curly brace (`{`), a style, some content, and a closing curly brace (`}`).

Template styles are chained exactly like normal [Chalk](https://github.com/chalk/chalk) styles. The following two statements are equivalent:

```js
import chalk from 'chalk';
import chalkTemplate from 'chalk-template';

console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
console.log(chalkTemplate`{bold.rgb(10,100,200) Hello!}`);
```

Note that function styles (`rgb()`, etc.) may not contain spaces between parameters.

All interpolated values (`` chalkTemplate`${foo}` ``) are converted to strings via the `.toString()` method. All curly braces (`{` and `}`) in interpolated value strings are escaped.

## Template function

This function can be useful if you need to wrap the template function. However, prefer the default export whenever possible.

**Note:** It's up to you to properly escape the input.

```js
import {template} from 'chalk-template';

console.log(template('Today is {red hot}'));
```

```js
import {templateStderr} from 'chalk-template';

console.error(templateStderr('Today is {red hot}'));
```

## Create template functions using a custom Chalk instance

The `makeTemplate` and `makeTaggedTemplate` functions are exported so functions can be created using a custom Chalk instance.

**Note:** When using a function created with `makeTemplate`, it's up to you to properly escape the input.

```js
import {Chalk} from 'chalk'
import {makeTemplate, makeTaggedTemplate} from 'chalk-template';

const template = makeTemplate(new Chalk({level: 3}));
const chalkTemplate = makeTaggedTemplate(new Chalk({level: 3}));

console.log(template('Today is {red hot}'));
console.log(chalkTemplate`Today is {red hot}`);
```

## Related

- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right
- [chalk-cli](https://github.com/chalk/chalk-cli) - Style text from the terminal

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Josh Junon](https://github.com/qix-)
