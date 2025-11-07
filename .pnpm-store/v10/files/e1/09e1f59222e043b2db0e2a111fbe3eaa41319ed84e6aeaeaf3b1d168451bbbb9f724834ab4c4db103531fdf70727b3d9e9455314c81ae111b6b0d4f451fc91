const { KEYS, getKeys } = require('eslint-visitor-keys');

const ignoredKeys = new Set([
	'start',
	'end',
	'loc',
	'range',
	'extra',
	'_babelType',

	// TODO: probably should not ignore (not sure yet)
	'typeArguments',
	'exportKind',
	'importKind',

	// TODO: should not ignore
	'optional',
]);

const ignoredLiteralKeys = new Set([
	'value',
	'regex',
]);

const getMatchKeys = node => {
	const keys = getKeys(node).filter(key => !ignoredKeys.has(key));
	const visitorKeys = KEYS[node.type];

	let equalityKeys = keys.filter(key => !visitorKeys.includes(key));

	if (node.type === 'Literal') {
		equalityKeys = equalityKeys.filter(key => !ignoredLiteralKeys.has(key));
	}

	return {
		visitorKeys,
		equalityKeys,
	};
};

module.exports = {
	getMatchKeys,
};
