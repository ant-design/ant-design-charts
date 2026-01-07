'use strict';
const eslintTemplateVisitor = require('../..');

const templates = eslintTemplateVisitor();

const objectVariable = templates.variable();
const argumentsVariable = templates.spreadVariable();

const substrCallTemplate = templates.template`${objectVariable}.substr(${argumentsVariable})`;

const create = context => {
	const sourceCode = context.getSourceCode();

	return templates.visitor({
		[substrCallTemplate](node) {
			const objectNode = substrCallTemplate.context.getMatch(objectVariable);
			const argumentNodes = substrCallTemplate.context.getMatch(argumentsVariable);

			const problem = {
				node,
				message: 'Prefer `String#slice()` over `String#substr()`.',
			};

			const canFix = argumentNodes.length === 0;

			if (canFix) {
				problem.fix = fixer => fixer.replaceText(node, sourceCode.getText(objectNode) + '.slice()');
			}

			context.report(problem);
		},
	});
};

module.exports = {
	create,
	meta: {
		type: 'suggestion',
		fixable: 'code',
	},
};
