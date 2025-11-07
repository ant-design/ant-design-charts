# ESLint Template Visitor
[![Build Status](https://travis-ci.org/futpib/eslint-template-visitor.svg?branch=master)](https://travis-ci.org/futpib/eslint-template-visitor) [![Coverage Status](https://coveralls.io/repos/github/futpib/eslint-template-visitor/badge.svg?branch=master)](https://coveralls.io/github/futpib/eslint-template-visitor?branch=master)

Simplify eslint rules by visiting templates

## Install

```
npm install eslint-template-visitor

# or

yarn add eslint-template-visitor
```

## Showcase

```diff
+const eslintTemplateVisitor = require('eslint-template-visitor');
+
+const templates = eslintTemplateVisitor();
+
+const objectVariable = templates.variable();
+const argumentsVariable = templates.spreadVariable();
+
+const substrCallTemplate = templates.template`${objectVariable}.substr(${argumentsVariable})`;

 const create = context => {
 	const sourceCode = context.getSourceCode();

-	return {
-		CallExpression(node) {
-			if (node.callee.type !== 'MemberExpression'
-				|| node.callee.property.type !== 'Identifier'
-				|| node.callee.property.name !== 'substr'
-			) {
-				return;
-			}
-
-			const objectNode = node.callee.object;
+	return templates.visitor({
+		[substrCallTemplate](node) {
+			const objectNode = substrCallTemplate.context.getMatch(objectVariable);
+			const argumentNodes = substrCallTemplate.context.getMatch(argumentsVariable);

 			const problem = {
 				node,
 				message: 'Prefer `String#slice()` over `String#substr()`.',
 			};

-			const canFix = node.arguments.length === 0;
+			const canFix = argumentNodes.length === 0;

 			if (canFix) {
 				problem.fix = fixer => fixer.replaceText(node, sourceCode.getText(objectNode) + '.slice()');
 			}

 			context.report(problem);
 		},
-	};
+	});
 };
```

See [examples](https://github.com/futpib/eslint-template-visitor/tree/master/examples) for more.

## API

### `eslintTemplateVisitor(options?)`

Craete a template visitor.

Example:

```js
const eslintTemplateVisitor = require('eslint-template-visitor');

const templates = eslintTemplateVisitor();
```

#### `options`

Type: `object`

##### `parserOptions`

Options for the template parser. Passed down to [`@babel/eslint-parser`](https://github.com/babel/@babel/eslint-parser#additional-parser-configuration).

Example:

```js
const templates = eslintTemplateVisitor({
	parserOptions: {
		ecmaVersion: 2018,
	},
});
```

### `templates.variable()`

Create a variable to be used in a template. Such a variable can match exactly one AST node.

### `templates.spreadVariable()`

Create a spread variable. Spread variable can match an array of AST nodes.

This is useful for matching a number of arguments in a call or a number of statements in a block.

### `templates.variableDeclarationVariable()`

Create a variable declaration variable. Variable declaration variable can match any type of variable declaration node.

This is useful for matching any variable declaration, be it `const`, `let` or `var`.

Use it in place of a variable declaration keyword:

```js
const variableDeclarationVariable = templates.variableDeclarationVariable();

const template = templates.template`() => {
	${variableDeclarationVariable} x = y;
}`;
```

### `templates.template` tag

Creates a template possibly containing variables.

Example:

```js
const objectVariable = templates.variable();
const argumentsVariable = templates.spreadVariable();

const substrCallTemplate = templates.template`${objectVariable}.substr(${argumentsVariable})`;

const create = () => templates.visitor({
	[substrCallTemplate](node) {
		// `node` here is the matching `.substr` call (i.e. `CallExpression`)
	}
});
```

### `templates.visitor({ /* visitors */ })`

Used to merge template visitors with [common ESLint visitors](https://eslint.org/docs/developer-guide/selectors#listening-for-selectors-in-rules).

Example:

```js
const create = () => templates.visitor({
	[substrCallTemplate](node) {
		// Template visitor
	},

	FunctionDeclaration(node) {
		// Simple node type visitor
	},

	'IfStatement > BlockStatement'(node) {
		// ESLint selector visitor
	},
});
```

### `template.context`

A template match context. This property is defined only within a visitor call (in other words, only when working on a matching node).

Example:

```js
const create = () => templates.visitor({
	[substrCallTemplate](node) {
		// `substrCallTemplate.context` can be used here
	},

	FunctionDeclaration(node) {
		// `substrCallTemplate.context` is not defined here, and it does not make sense to use it here,
		// since we `substrCallTemplate` did not match an AST node.
	},
});
```

#### `template.context.getMatch(variable)`

Used to get a match for a variable.

Example:

```js
const objectVariable = templates.variable();
const argumentsVariable = templates.spreadVariable();

const substrCallTemplate = templates.template`${objectVariable}.substr(${argumentsVariable})`;

const create = () => templates.visitor({
	[substrCallTemplate](node) {
		const objectNode = substrCallTemplate.context.getMatch(objectVariable);

		// For example, let's check if `objectNode` is an `Identifier`: `objectNode.type === 'Identifier'`

		const argumentNodes = substrCallTemplate.context.getMatch(argumentsVariable);

		// `Array.isArray(argumentNodes) === true`
	},
});
```

### `template.narrow(selector, targetMatchIndex = 0)`

Narrow the template to a part of the AST matching the selector.

Sometimes you can not define a wanted template at the top level due to JS syntax limitations.
For example, you can't have `await` or `yield` at the top level of a script.

Use a wrapper function in the template and then `narrow` it to a wanted AST node:

```js
const template = templates.template`
	async () => { await 1; }
`.narrow('BlockStatement > :has(AwaitExpression)');
```

The `template` above is equivalent to this:

```js
const template = templates.template`await 1`;
```

Except the latter can not be defined directly due to [`espree` limitations](https://github.com/eslint/espree/issues/409).
