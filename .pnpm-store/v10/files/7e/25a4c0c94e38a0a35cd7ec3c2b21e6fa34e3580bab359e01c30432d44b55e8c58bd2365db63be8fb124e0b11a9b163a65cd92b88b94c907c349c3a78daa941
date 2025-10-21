
const esrecurse = require('esrecurse');

const visit = (ast, visitor) => {
	const newVisitor = {};

	for (const key of Object.keys(visitor)) {
		const value = visitor[key];
		newVisitor[key] = function (node, ...rest) {
			value.call(this, node, ...rest);
			this.visitChildren(node);
		};
	}

	esrecurse.visit(ast, newVisitor);
};

module.exports = {
	visit,
};
