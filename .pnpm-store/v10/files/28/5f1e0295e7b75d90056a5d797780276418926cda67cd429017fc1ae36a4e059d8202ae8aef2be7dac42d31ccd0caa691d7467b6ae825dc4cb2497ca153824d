'use strict';

const create = context => {
	const sourceCode = context.getSourceCode();

	return {
		CallExpression(node) {
			if (node.callee.type !== 'MemberExpression'
				|| node.callee.property.type !== 'Identifier'
				|| node.callee.property.name !== 'substr'
			) {
				return;
			}

			const objectNode = node.callee.object;

			const problem = {
				node,
				message: 'Prefer `String#slice()` over `String#substr()`.',
			};

			const canFix = node.arguments.length === 0;

			if (canFix) {
				problem.fix = fixer => fixer.replaceText(node, sourceCode.getText(objectNode) + '.slice()');
			}

			context.report(problem);
		},
	};
};

module.exports = {
	create,
	meta: {
		type: 'suggestion',
		fixable: 'code',
	},
};
