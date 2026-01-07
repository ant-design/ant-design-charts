
const Multimap = require('multimap');

const { parse } = require('@babel/eslint-parser');
const { query } = require('esquery');

const { getMatchKeys } = require('./match-keys');
const { nodesPropertiesEqual } = require('./nodes-properties-equal');

const gensym = () => 'gensym' + Math.random().toString(16).slice(2);

const nodeEquals = (a, b) => {
	if (!a || !b) {
		return (
			(a === null || a === undefined)
				&& (b === null || b === undefined)
		);
	}

	const { visitorKeys, equalityKeys } = getMatchKeys(a);

	return visitorKeys.every(key => {
		return nodePropertyEquals(key, a, b);
	}) && equalityKeys.every(key => {
		return nodesPropertiesEqual(a, b, key);
	});
};

const everyNodeEquals = (as, bs) => {
	return as.length === bs.length
		&& as.every((a, index) => {
			const b = bs[index];
			return nodeEquals(a, b);
		});
};

const nodePropertyEquals = (key, a, b) => {
	if (Array.isArray(a[key])) {
		return a[key].length === b[key].length
			&& a[key].every((x, i) => nodeEquals(x, b[key][i]));
	}

	return nodeEquals(a[key], b[key]);
};

class Variable {
	constructor() {
		this._id = gensym();
	}

	toString() {
		return this._id;
	}
}

class SpreadVariable extends Variable {}

class VariableDeclarationVariable extends Variable {
	toString() {
		return `var ${this._id}, `;
	}
}

class TemplateContext {
	constructor() {
		this._matches = new Multimap();
	}

	_pushVariableMatch(variableId, node) {
		this._matches.set(variableId, node);
	}

	getMatches(variable) {
		return this._matches.get(variable._id) || [];
	}

	getMatch(variable) {
		return this.getMatches(variable)[0];
	}
}

class Template {
	constructor(ast, options, templates) {
		if (typeof ast === 'string') {
			let { babelOptions = {}, ...parserOptions } = options.parserOptions || {};

			parserOptions = {
				ecmaVersion: 2018,
				requireConfigFile: false,
				babelOptions: {
					configFile: false,
					...babelOptions,
				},
				...parserOptions,
			};

			const { body } = parse(ast, parserOptions);

			if (body.length !== 1) {
				throw new Error('Template must contain a single top-level AST node.');
			}

			const [ firstNode ] = body;

			ast = firstNode.type === 'ExpressionStatement' ? firstNode.expression : firstNode;
		}

		this._id = gensym();
		this._ast = ast;
		this._templates = templates;
	}

	narrow(selector, targetMatchIndex = 0) {
		const ast = query(this._ast, selector)[targetMatchIndex];
		const template = new Template(ast, null, this._templates);
		this._templates._registerTemplate(template);
		return template;
	}

	toString() {
		return this._id;
	}
}

class TemplateManager {
	constructor(options = {}) {
		this._options = options;
		this._variables = new Map();
		this._templates = new Map();
	}

	_matchTemplate(handler, template, node, ...rest) {
		template.context = new TemplateContext();

		if (this._nodeMatches(template._ast, node, template.context)) {
			return handler(node, ...rest);
		}

		template.context = null;
	}

	_getNodeVariable(templateNode) {
		if (templateNode.type === 'Identifier') {
			return this._variables.get(templateNode.name);
		}

		if (
			templateNode.type === 'VariableDeclaration'
				&& templateNode.kind === 'var'
				&& templateNode.declarations.length > 1
		) {
			const [ firstDeclarator ] = templateNode.declarations;
			return this._variables.get(firstDeclarator.id.name);
		}

		return null;
	}

	_getSpreadVariableNode(templateNode) {
		if (templateNode.type === 'ExpressionStatement') {
			templateNode = templateNode.expression;
		}

		if (!this._getNodeVariable(templateNode)) {
			return undefined;
		}

		const variable = this._variables.get(templateNode.name);

		return variable instanceof SpreadVariable
			? templateNode
			: undefined;
	}

	_nodeMatches(templateNode, node, context) {
		if (!templateNode || !node) {
			return (
				(templateNode === null || templateNode === undefined)
					&& (node === null || node === undefined)
			);
		}

		const variable = this._getNodeVariable(templateNode);
		if (variable) {
			if (variable instanceof VariableDeclarationVariable) {
				if (node.type !== 'VariableDeclaration') {
					return false;
				}
			}

			const previousMatches = context.getMatches(variable);

			if (previousMatches.every(previousMatchNode => nodeEquals(previousMatchNode, node))) {
				if (variable instanceof VariableDeclarationVariable) {
					const templateDeclarations = templateNode.declarations.slice(1);
					if (!this._nodeArraysMatch(templateDeclarations, node.declarations, context)) {
						return false;
					}
				}

				context._pushVariableMatch(variable._id, node);

				return true;
			}

			return false;
		}

		const { visitorKeys, equalityKeys } = getMatchKeys(templateNode);

		const matches = visitorKeys.every(key => {
			return this._nodePropertyMatches(key, templateNode, node, context);
		}) && equalityKeys.every(key => {
			return nodesPropertiesEqual(templateNode, node, key);
		});

		return matches;
	}

	_spreadVariableMatches(templateNode, nodes, context) {
		const variable = this._variables.get(templateNode.name);
		const previousMatches = context.getMatches(variable);

		if (previousMatches.every(previousMatchNodes => everyNodeEquals(previousMatchNodes, nodes))) {
			context._pushVariableMatch(templateNode.name, nodes);
			return true;
		}

		return false;
	}

	_nodePropertyMatches(key, templateNode, node, context) {
		if (Array.isArray(templateNode[key])) {
			return this._nodeArraysMatch(templateNode[key], node[key], context);
		}

		return this._nodeMatches(templateNode[key], node[key], context);
	}

	_nodeArraysMatch(templateNodes, nodes, context) {
		if (!nodes) {
			return false;
		}

		if (templateNodes.length === 1) {
			const spreadVariableNode = this._getSpreadVariableNode(templateNodes[0]);

			if (spreadVariableNode) {
				return this._spreadVariableMatches(spreadVariableNode, nodes, context);
			}
		}

		return templateNodes.length === nodes.length
			&& templateNodes.every((x, i) => this._nodeMatches(x, nodes[i], context));
	}

	variable() {
		const variable = new Variable();
		this._variables.set(variable._id, variable);
		return variable;
	}

	spreadVariable() {
		const variable = new SpreadVariable();
		this._variables.set(variable._id, variable);
		return variable;
	}

	variableDeclarationVariable() {
		const variable = new VariableDeclarationVariable();
		this._variables.set(variable._id, variable);
		return variable;
	}

	template(strings, ...vars) {
		const source = typeof strings === 'string'
			? strings
			: strings.map((string, i) => string + (vars[i] || '')).join('');
		const template = new Template(source, this._options, this);
		this._registerTemplate(template);
		return template;
	}

	_registerTemplate(template) {
		this._templates.set(template._id, template);
	}

	visitor(visitor) {
		const newVisitor = {};

		for (const key of Object.keys(visitor)) {
			const value = visitor[key];
			const template = this._templates.get(key);

			const newKey = template ? template._ast.type : key;

			const newValue = template ? (...args) => {
				return this._matchTemplate(value, template, ...args);
			} : value;

			newVisitor[newKey] = newVisitor[newKey] || [];
			newVisitor[newKey].push(newValue);
		}

		for (const newKey of Object.keys(newVisitor)) {
			const newValue = newVisitor[newKey];
			newVisitor[newKey] = newValue.length === 1 ? newValue[0] : (...args) => {
				newValue.forEach(handler => handler(...args));
			};
		}

		return newVisitor;
	}
}

const eslintTemplateVisitor = options => new TemplateManager(options);

module.exports = eslintTemplateVisitor;
