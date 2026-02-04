'use strict';

const tokenize = require('postcss/lib/tokenize');

function templateTokenize(input, options = {}) {
	let pos = input.quasis[0].start;
	const quasis = input.quasis.filter((quasi) => quasi.start !== quasi.end);
	const tokenizer = tokenize(input, options);

	function tokenInExpressions(token, returned) {
		const start = pos;

		pos += token[1].length;

		if (
			!quasis.some((quasi) => start >= quasi.start && pos <= quasi.end) ||
			(returned.length && token[0] === returned[0][0])
		) {
			return true;
		}

		if (returned.length) {
			back(token);
		}
	}

	function back(token) {
		pos -= token[1].length;

		return tokenizer.back(token);
	}

	function nextToken(opts) {
		const returned = [];
		let token;
		let line;
		let column;

		while ((token = tokenizer.nextToken(opts)) && tokenInExpressions(token, returned)) {
			line = token[4] || token[2] || line;
			column = token[5] || token[3] || column;
			returned.push(token);
		}

		if (returned.length) {
			token = [
				returned[0][0],
				returned.map((parentToken) => parentToken[1]).join(''),
				returned[0][2],
				returned[0][3],
				line,
				column,
			];
		}

		return token;
	}

	return { ...tokenizer, back, nextToken };
}

module.exports = templateTokenize;
