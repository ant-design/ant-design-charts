
const { map } = require('ramda');

const visit = (node, visitor) => {
	if (!node || (typeof node !== 'object' && !Array.isArray(node))) {
		return node;
	}

	return map(value => {
		if (value && visitor[value.type]) {
			return visitor[value.type](value);
		}

		return visit(value, visitor);
	}, node);
};

module.exports = ast => {
	let shouldSkip = false;

	ast = visit(ast, {
		RegExpLiteral(node) {
			// WORKAROUND: https://github.com/babel/@babel/eslint-parser/issues/838
			shouldSkip = true;
			return node;
		},
	});

	return { ast, shouldSkip };
};
