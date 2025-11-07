'use strict';
/**
 * Combined `input` and `password` type prompt
 * with auto submit support
 */

const chalk = require('chalk');
const {map, takeUntil} = require('rxjs/operators');
const Base = require('inquirer/lib/prompts/base');
const observe = require('inquirer/lib/utils/events');

function mask(input, maskChar) {
	input = String(input);
	maskChar = typeof maskChar === 'string' ? maskChar : '*';
	if (input.length === 0) {
		return '';
	}

	return new Array(input.length + 1).join(maskChar);
}

class InputPrompt extends Base {
	/**
   * Start the Inquiry session
   * @param  {Function} cb      Callback when prompt is done
   * @return {this}
   */

	_run(cb) {
		this.done = cb;
		// Once user confirm (enter key)
		const events = observe(this.rl);
		const submit = events.line.pipe(map(this.filterInput.bind(this)));

		const validation = this.handleSubmitEvents(submit);
		validation.success.forEach(this.onEnd.bind(this));
		validation.error.forEach(this.onError.bind(this));

		events.keypress
			.pipe(takeUntil(validation.success))
			.forEach(this.onKeypress.bind(this));

		// Init
		this.render();

		return this;
	}

	/**
   * Render the prompt to screen
   * @return {InputPrompt} self
   */

	render(error) {
		let bottomContent = '';
		let appendContent = '';
		let message = this.getQuestion();
		const {transformer} = this.opt;
		const isFinal = this.status === 'answered';

		if (isFinal) {
			appendContent = this.answer;
		} else {
			appendContent = this.rl.line || '';
		}

		if (this.opt.secret) {
			// Password transform
			if (isFinal) {
				message += this.opt.mask ?
					chalk.cyan(mask(appendContent, this.opt.mask)) :
					chalk.italic.dim('[hidden]');
			} else if (this.opt.mask) {
				message += mask(appendContent, this.opt.mask);
			} else {
				message += chalk.italic.dim('[input is hidden] ');
			}
		// Input transform
		} else if (transformer) {
			message += transformer(appendContent, this.answers, {isFinal});
		} else {
			message += isFinal ? chalk.cyan(appendContent) : appendContent;
		}

		if (error) {
			bottomContent = chalk.red('>> ') + error;
		}

		this.screen.render(message, bottomContent);
	}

	/**
   * When user press `enter` key
   */

	filterInput(input) {
		if (!input) {
			return this.opt.default === null ? '' : this.opt.default;
		}

		return input;
	}

	onEnd(state) {
		this.answer = state.value;
		this.status = 'answered';

		// Re-render prompt
		this.render();

		this.screen.done();
		this.done(state.value);
	}

	onError(state) {
		this.render(state.isValid);
	}

	/**
   * When user press a key
   */

	onKeypress() {
		// If user press a key, just clear the default value
		const {autoSubmit} = this.opt;

		if (this.opt.default) {
			this.opt.default = undefined;
		}

		if (autoSubmit && typeof autoSubmit === 'function') {
			if (autoSubmit(this.rl.line)) {
				this.rl.emit('line', this.rl.line);
				this.rl.line = '';
			}
		}

		this.render();
	}
}

module.exports = InputPrompt;
