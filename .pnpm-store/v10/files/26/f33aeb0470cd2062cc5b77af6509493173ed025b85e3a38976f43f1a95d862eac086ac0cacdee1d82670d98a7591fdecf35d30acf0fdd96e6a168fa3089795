# inquirer-autosubmit-prompt

## Installation

```
npm install --save inquirer-autosubmit-prompt
```

## Usage

It extends Inquire.js's default `input` and `password` with auto submit.

```javascript
inquirer.registerPrompt('autosubmit', require('inquirer-autosubmit-prompt'));
inquirer.prompt({
  type: 'autosubmit',
  ...
})
```

### Options

See [inquirer](https://github.com/SBoudrias/Inquirer.js) readme for meaning of all except **autoSubmit** and **secret**.

**secret** indicates this is a `password` prompt. Defaults to false (`input` prompt).

**autoSubmit** should be a function which takes the current input and returns a boolean. If condition is true, current input will be submitted, without user typing enter.

### Example

```javascript
const inquirer = require('inquirer');
inquirer.registerPrompt('autosubmit', require('inquirer-autosubmit-promt'));

const questions = [
	{
		type: 'autosubmit',
		name: 'first_name',
		message: 'What\'s your first name',
		autoSubmit: input => input.length === 6
	}
];

inquirer.prompt(questions).then(answers => {
	console.log(JSON.stringify(answers, null, '  '));
});

```

## Credits
[Yao Ding](https://github.com/yaodingyd/)

## License
MIT