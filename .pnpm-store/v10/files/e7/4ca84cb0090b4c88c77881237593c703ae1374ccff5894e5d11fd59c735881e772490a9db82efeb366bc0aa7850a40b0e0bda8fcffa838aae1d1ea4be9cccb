'use strict';

const helper = require('./template-parser-helper');
// eslint-disable-next-line node/no-unpublished-require
const SafeParser = require('postcss-safe-parser/lib/safe-parser');
const templateTokenize = require('./template-tokenize');

class TemplateSafeParser extends SafeParser {
	createTokenizer() {
		this.tokenizer = templateTokenize(this.input, { ignoreErrors: true });
	}
	other(start) {
		return helper.literal.call(this, start) || super.other.call(this, start);
	}
	freeSemicolon(token) {
		return helper.freeSemicolon.call(this, token);
	}
}
module.exports = TemplateSafeParser;
