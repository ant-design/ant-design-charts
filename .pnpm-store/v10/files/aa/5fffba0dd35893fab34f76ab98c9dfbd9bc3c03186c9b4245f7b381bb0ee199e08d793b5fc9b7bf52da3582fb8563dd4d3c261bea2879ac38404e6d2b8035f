
const { default: reduceUsing, CloneReducer } = require('shift-reducer');
const { default: analyzeScope, ScopeLookup } = require('shift-scope');

const { check: isReservedWord } = require('reserved-words');

class RegexReducer extends CloneReducer {
	reduceLiteralRegExpExpression(node) {
		return {
			...node,
			unicode: false,
		};
	}
}

class NoReservedKeywordsReducer extends CloneReducer {
	isSafeName(name) {
		return !isReservedWord(name, 3)
			&& !isReservedWord(name, 6, true)
			&& name !== 'arguments'
			&& name !== 'eval';
	}

	reduceLabeledStatement(node, rest) {
		if (this.isSafeName(node.label)) {
			return super.reduceLabeledStatement(node, rest);
		}

		return {
			...node,
			...rest,
			label: node.label + '_avoid_reserved_word',
		};
	}

	reduceBindingIdentifier(node) {
		if (this.isSafeName(node.name)) {
			return node;
		}

		return {
			...node,
			name: node.name + '_avoid_reserved_word',
		};
	}

	reduceAssignmentTargetIdentifier(...args) {
		return this.reduceBindingIdentifier(...args);
	}

	reduceIdentifierExpression(...args) {
		return this.reduceBindingIdentifier(...args);
	}
}

class NoIdentifierDuplicatingAnImportReducer extends CloneReducer {
	reduceImportNamespace(node, { namespaceBinding, ...rest }) {
		return {
			...node,
			...rest,
			namespaceBinding: namespaceBinding && {
				...namespaceBinding,
				name: namespaceBinding.name + '_avoid_capture',
			},
		};
	}
}

class ScopeLookupCloneReducer extends CloneReducer {
	constructor(scopeLookup) {
		super();
		this.scopeLookup = scopeLookup;
	}
}

class NoUndeclaredExportReducer extends ScopeLookupCloneReducer {
	reduceExportLocals(node, { namedExports, ...rest }) {
		return {
			...node,
			...rest,
			namedExports: namedExports.filter(export_ => !export_._isUndeclaredVariable),
		};
	}

	reduceExportLocalSpecifier(node, { name: { _isUndeclaredVariable, ...name }, ...rest }) {
		return {
			...node,
			...rest,
			name,
			_isUndeclaredVariable,
		};
	}

	reduceIdentifierExpression(node) {
		const [ variable ] = this.scopeLookup.lookup(node);
		return {
			...node,
			_isUndeclaredVariable: variable && variable.declarations.length === 0,
		};
	}
}

const removingHOR = Reducer => class extends Reducer {
	constructor(...args) {
		super(...args);
		this.nodesToRemove = new Set();
		this.shouldKeep = statement => !this.nodesToRemove.has(statement);
	}

	markForRemoval(node) {
		this.nodesToRemove.add(node);
	}

	propagateRemoval(from, to) {
		if (this.nodesToRemove.has(from)) {
			this.nodesToRemove.add(to);
		}
	}

	reduceSwitchCase(node, { consequent, ...rest }) {
		return {
			...node,
			...rest,
			consequent: consequent.filter(this.shouldKeep),
		};
	}

	reduceSwitchDefault(node, { consequent, ...rest }) {
		return {
			...node,
			...rest,
			consequent: consequent.filter(this.shouldKeep),
		};
	}

	reduceScript(node, { statements, ...rest }) {
		return {
			...node,
			...rest,
			statements: statements.filter(this.shouldKeep),
		};
	}

	reduceFunctionBody(node, { statements, ...rest }) {
		return {
			...node,
			...rest,
			statements: statements.filter(this.shouldKeep),
		};
	}

	reduceBlock(node, { statements, ...rest }) {
		return {
			...node,
			...rest,
			statements: statements.filter(this.shouldKeep),
		};
	}

	reduceVariableDeclaration(node, { declarators, ...rest }) {
		declarators = declarators.filter(this.shouldKeep);

		node = {
			...node,
			...rest,
			declarators,
		};

		if (declarators.length === 0) {
			this.markForRemoval(node);
		}

		return node;
	}

	reduceVariableDeclarationStatement(node, { declaration }) {
		this.propagateRemoval(declaration, node);
		return node;
	}

	reduceForStatement(node, { body }) {
		this.propagateRemoval(body, node);
		return node;
	}

	reduceWhileStatement(node, { body }) {
		this.propagateRemoval(body, node);
		return node;
	}

	reduceLabeledStatement(node, { body }) {
		this.propagateRemoval(body, node);
		return node;
	}

	reduceForInStatement(node, { body }) {
		this.propagateRemoval(body, node);
		return node;
	}

	reduceIfStatement(node, { consequent, alternate }) {
		this.propagateRemoval(consequent, node);
		this.propagateRemoval(alternate, node);
		return node;
	}

	reduceDoWhileStatement(node, { body }) {
		this.propagateRemoval(body, node);
		return node;
	}
};

class NoNonStrictFeaturesReducer extends removingHOR(CloneReducer) {
	reduceWithStatement(node) {
		this.markForRemoval(node);
		return node;
	}

	reduceUnaryExpression(node) {
		if (node.operator === 'delete' && node.operand.type === 'IdentifierExpression') {
			return node.operand;
		}

		return node;
	}
}

class NoLabeledFunctionDeclarationReducer extends CloneReducer {
	reduceLabeledStatement(node, { body }) {
		if (body.type === 'FunctionDeclaration') {
			return body;
		}

		return node;
	}
}

class NoLabeledBreakContinueReducer extends CloneReducer {
	reduceBreakStatement(node) {
		return {
			...node,
			label: null,
		};
	}
}

class UniqueBindingIdentifiersReducer extends CloneReducer {
	constructor() {
		super();
		this.boundNames = new Set();
	}

	reduceBindingIdentifier(node) {
		if (!this.boundNames.has(node.name)) {
			this.boundNames.add(node.name);
			return node;
		}

		return {
			...node,
			name: node.name + Math.random().toString(16).slice(2),
		};
	}
}

module.exports = shiftAST => {
	[
		NoNonStrictFeaturesReducer,
		RegexReducer,
		NoReservedKeywordsReducer,
		NoIdentifierDuplicatingAnImportReducer,
		NoUndeclaredExportReducer,
		NoLabeledFunctionDeclarationReducer,
		UniqueBindingIdentifiersReducer,
		NoLabeledBreakContinueReducer,
	].forEach(Reducer => {
		const scope = analyzeScope(shiftAST);
		const scopeLookup = new ScopeLookup(scope);
		shiftAST = reduceUsing(new Reducer(scopeLookup), shiftAST);
	});

	return shiftAST;
};
