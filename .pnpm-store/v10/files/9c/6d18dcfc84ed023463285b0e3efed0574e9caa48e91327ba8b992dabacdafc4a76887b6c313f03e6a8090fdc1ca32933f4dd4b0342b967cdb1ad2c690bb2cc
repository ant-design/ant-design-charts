
module.exports = ast => {
	ast.directives = [];

	if (ast.type === 'Module') {
		if (ast.items.length > 1) {
			ast.items.length = 1;
		}
	} else if (ast.type === 'Script') {
		if (ast.statements.length > 1) {
			ast.statements.length = 1;
		}
	}

	return ast;
};
