'use strict';
const through = require('through');
const inquirer = require('inquirer');
const {Observable} = require('rxjs');
const autosubmit = require('inquirer-autosubmit-prompt');

module.exports = (question, options) => {
	options = Object.assign({
		secret: false,
		done: () => { }
	}, options);

	if (typeof question !== 'string') {
		throw new TypeError(`Expected \`question\` to be of type \`string\`, got \`${typeof question}\``);
	}

	const questions = [
		{
			type: 'autosubmit',
			name: 'result',
			message: question,
			secret: options.secret,
			default: options.default,
			validate: options.validate,
			autoSubmit: options.autoSubmit
		}
	];

	return new Observable(observer => {
		let buffer = '';

		const outputStream = through(data => {
			// eslint-disable-next-line no-control-regex
			if (/\u001B\[.*?(D|C)$/.test(data)) {
				if (buffer.length > 0) {
					observer.next(buffer);
					buffer = '';
				}

				return;
			}

			buffer += data;
		});

		const prompt = inquirer.createPromptModule({
			output: outputStream
		});
		prompt.registerPrompt('autosubmit', autosubmit);

		prompt(questions)
			.then(answer => {
				// Clear the output
				observer.next();

				return options.done(answer.result);
			})
			.then(() => {
				observer.complete();
			})
			.catch(error => {
				observer.error(error);
			});

		return outputStream;
	});
};
