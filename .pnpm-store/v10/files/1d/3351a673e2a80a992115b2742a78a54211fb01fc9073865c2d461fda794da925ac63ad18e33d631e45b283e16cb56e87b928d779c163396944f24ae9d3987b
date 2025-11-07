
const test = require('ava');
const sinon = require('sinon');

const { omit, times } = require('ramda');

const { default: fuzzProgram, FuzzerState } = require('shift-fuzzer');
const { default: shiftCodegen, FormattedCodeGen } = require('shift-codegen');

const { parse: babelEslintParse } = require('@babel/eslint-parser');

const seedrandom = require('seedrandom');

const shiftToEspreeSafe = require('../test/_shift-to-espree-safe');
const dropExtraTopLevelNodes = require('../test/_drop-extra-top-level-nodes');
const babelEslintWorkarounds = require('../test/_babel-eslint-parser-workarounds');
const { parse, PARSER } = require('../test/_parser');

const recurse = require('./recurse');

const eslintTemplateVisitor = require('.');

const SEED = process.env.SEED || Math.random().toString(16).slice(2);

console.log(`
Reproduce the randomized fuzzing test by running:
\`\`\`bash
SEED=${JSON.stringify(SEED)} npm test
\`\`\`
`);

const parserOptions = {
	sourceType: 'module',
	ecmaVersion: 2018,
	requireConfigFile: false,
};

test.beforeEach(t => {
	t.context.rng = seedrandom(SEED);
});

test('mixing templates into a visitor', t => {
	const templates = eslintTemplateVisitor();

	const a = templates.variable();
	const template = templates.template`${a}.parentNode.removeChild(${a})`;

	const ast = parse(`
		foo.parentNode.removeChild(foo);
		foo.parentNode.removeChild(bar);
	`, parserOptions);

	const visitorA = {
		[template]: sinon.spy(),
		CallExpression: sinon.spy(),
		MemberExpression: sinon.spy(),
	};

	const visitorB = {
		[template]: sinon.spy(),
		MemberExpression: sinon.spy(),
	};

	recurse.visit(ast, visitorA);
	recurse.visit(ast, templates.visitor(visitorB));

	t.false(visitorA[template].called);
	t.true(visitorA.CallExpression.called);
	t.true(visitorA.MemberExpression.called);

	t.true(visitorB[template].called);
	t.true(visitorB.MemberExpression.called);

	t.deepEqual(
		visitorA.MemberExpression.getCalls().map(call => call.args),
		visitorB.MemberExpression.getCalls().map(call => call.args),
	);

	t.deepEqual(
		visitorA.CallExpression.getCalls().map(call => call.args).slice(0, 1),
		visitorB[template].getCalls().map(call => call.args),
	);
});

test('variable matching', t => {
	const templates = eslintTemplateVisitor();

	const a = templates.variable();
	const template = templates.template`${a}.foo()`;

	const visitor = {
		[template]: sinon.spy(),
	};

	recurse.visit(parse('foo.bar()', parserOptions), templates.visitor(visitor));
	t.false(visitor[template].called);

	recurse.visit(parse('bar.foo()', parserOptions), templates.visitor(visitor));
	t.true(visitor[template].called);
});

const templateFoundInMacro = (t, templateSource, source, expectedToMatch = true) => {
	const templates = eslintTemplateVisitor({ parserOptions });
	const template = templates.template(templateSource);

	const visitor = {
		[template]: sinon.spy(),
	};

	recurse.visit(parse(source, parserOptions), templates.visitor(visitor));
	t.is(visitor[template].called, expectedToMatch);
};

templateFoundInMacro.title = (_, templateSource, source, expectedToMatch = true) => {
	return `\`${templateSource}\` ${expectedToMatch ? 'should be found in' : 'should not be found in'} \`${source}\``;
};

const templateMatchesMacro = (t, templateSource, source, expectedToMatch = true) => {
	const wrap = s => `uniqueEnoughIdentifier((${s}))`;
	templateFoundInMacro(t, wrap(templateSource), wrap(source), expectedToMatch);
};

templateMatchesMacro.title = (_, templateSource, source, expectedToMatch = true) => {
	return `\`${templateSource}\` ${expectedToMatch ? 'should match' : 'should not match'} \`${source}\``;
};

test(templateMatchesMacro, 'foo', 'bar', false);
test(templateMatchesMacro, 'foo', 'foo');

test(templateMatchesMacro, 'foo.bar', 'foo.bar');
test(templateMatchesMacro, 'foo.bar', 'foo["bar"]', false);
test(templateMatchesMacro, 'foo.bar', 'foo.quz', false);
test(templateMatchesMacro, 'foo.bar', 'quz.bar', false);

test(templateMatchesMacro, 'foo.bar()', 'foo.bar()');
test(templateMatchesMacro, 'foo.bar()', 'foo["bar"]()', false);
test(templateMatchesMacro, 'foo.bar()', 'foo.quz()', false);
test(templateMatchesMacro, 'foo.bar()', 'quz.bar()', false);

test(templateFoundInMacro, 'x', '[a, b, c]', false);
test(templateFoundInMacro, 'b', '[a, b, c]');

test(templateMatchesMacro, '1', '2', false);
test(templateMatchesMacro, '1', '1');

test(templateFoundInMacro, '9', '[1, 2, 3]', false);
test(templateFoundInMacro, '2', '[1, 2, 3]');

test(templateFoundInMacro, '({})', '({a:[]})', false);
test(templateFoundInMacro, '({})', '[{}]');

test(templateMatchesMacro, '(() => {})', '(function() {})', false);
test(templateMatchesMacro, '(( ) => { })', '(()=>{})');

test(templateMatchesMacro, 'NaN', '-NaN', false);
test(templateMatchesMacro, 'NaN', 'NaN');

test(templateFoundInMacro, 'NaN', 'NaN');
test(templateFoundInMacro, 'NaN', '-NaN');
test(templateFoundInMacro, '-NaN', '+NaN', false);
test(templateFoundInMacro, '+NaN', '-NaN', false);

test(templateMatchesMacro, '/a/', '/a/g', false);
test(templateMatchesMacro, '/a/', '/a/');

test(templateFoundInMacro, '/x/', 'foo(/x/)');
test(templateFoundInMacro, '/x/', 'foo(/x/y)', false);

test(templateMatchesMacro, '0', '+0', false);
test(templateMatchesMacro, '0', '-0', false);
test(templateMatchesMacro, '0', '0');

test(templateFoundInMacro, '0', '+0');
test(templateFoundInMacro, '0', '-0');
test(templateFoundInMacro, '0', '0');
test(templateFoundInMacro, '-0', '0', false);
test(templateFoundInMacro, '+0', '0', false);

test('variable values', t => {
	t.plan(6);

	const templates = eslintTemplateVisitor();

	const receiver = templates.variable();
	const method = templates.variable();
	const template = templates.template`${receiver}.${method}()`;

	const visitor = {
		[template](node) {
			const receiverNode = template.context.getMatch(receiver);
			const methodNode = template.context.getMatch(method);

			t.is(node.type, 'CallExpression');
			t.is(node.arguments.length, 0);

			t.is(receiverNode.type, 'Identifier');
			t.is(receiverNode.name, 'bar');

			t.is(methodNode.type, 'Identifier');
			t.is(methodNode.name, 'foo');
		},
	};

	// Should match
	recurse.visit(parse('bar.foo()', parserOptions), templates.visitor(visitor));

	// Should not match
	recurse.visit(parse('bar.foo(argument)', parserOptions), templates.visitor(visitor));
	recurse.visit(parse('bar.foo(...arguments)', parserOptions), templates.visitor(visitor));
});

test('`spreadVariable` matching arguments', t => {
	const templates = eslintTemplateVisitor();

	const argumentsVariable = templates.spreadVariable();
	const template = templates.template`receiver.method(${argumentsVariable})`;

	const recordedArguments = [];

	const visitor = {
		[template](node) {
			const argumentNodes = template.context.getMatch(argumentsVariable);

			recordedArguments.push(argumentNodes);

			t.is(node.type, 'CallExpression');
			t.is(node.arguments, argumentNodes);
		},
	};

	recurse.visit(parse('receiver.method()', parserOptions), templates.visitor(visitor));

	t.is(recordedArguments.length, 1);
	t.deepEqual(recordedArguments[0], []);

	recurse.visit(parse('receiver.method(onlyArgument)', parserOptions), templates.visitor(visitor));

	t.is(recordedArguments.length, 2);
	t.is(recordedArguments[1].length, 1);

	recurse.visit(parse('receiver.method(argument1, argument2)', parserOptions), templates.visitor(visitor));

	t.is(recordedArguments.length, 3);
	t.is(recordedArguments[2].length, 2);

	recurse.visit(parse('receiver.method(...arguments)', parserOptions), templates.visitor(visitor));

	t.is(recordedArguments.length, 4);
	t.is(recordedArguments[3].length, 1);
	t.is(recordedArguments[3][0].type, 'SpreadElement');
});

test('`spreadVariable` matching statements', t => {
	const templates = eslintTemplateVisitor({ parserOptions });

	const statementsVariable = templates.spreadVariable();
	const template = templates.template`() => {${statementsVariable}}`;

	const recordedStatements = [];

	const visitor = {
		[template](node) {
			const statementNodes = template.context.getMatch(statementsVariable);

			recordedStatements.push(statementNodes);

			t.is(node.type, 'ArrowFunctionExpression');
			t.is(node.body.type, 'BlockStatement');
			t.is(node.body.body, statementNodes);
		},
	};

	recurse.visit(parse('() => {}', parserOptions), templates.visitor(visitor));

	t.is(recordedStatements.length, 1);
	t.deepEqual(recordedStatements[0], []);

	recurse.visit(parse('() => { onlyStatement; }', parserOptions), templates.visitor(visitor));

	t.is(recordedStatements.length, 2);
	t.is(recordedStatements[1].length, 1);

	recurse.visit(parse('() => { statement1; statement2 }', parserOptions), templates.visitor(visitor));

	t.is(recordedStatements.length, 3);
	t.is(recordedStatements[2].length, 2);
});

test('`variableDeclarationVariable` matching variable declarations', t => {
	const templates = eslintTemplateVisitor({ parserOptions });

	const variableDeclarationVariable = templates.variableDeclarationVariable();
	const template = templates.template`() => {
		${variableDeclarationVariable} x = y;
	}`;

	const recordedVariableDeclarations = [];

	const visitor = {
		[template](node) {
			const variableDeclarationNode = template.context.getMatch(variableDeclarationVariable);

			recordedVariableDeclarations.push(variableDeclarationNode);

			t.is(node.type, 'ArrowFunctionExpression');
			t.is(node.body.type, 'BlockStatement');
			t.deepEqual(node.body.body[0], variableDeclarationNode);
		},
	};

	recurse.visit(parse('() => {}', parserOptions), templates.visitor(visitor));

	t.deepEqual(recordedVariableDeclarations, []);

	recurse.visit(parse('() => { x = y; }', parserOptions), templates.visitor(visitor));

	t.deepEqual(recordedVariableDeclarations, []);

	recurse.visit(parse('() => { const x = y; }', parserOptions), templates.visitor(visitor));

	t.is(recordedVariableDeclarations.length, 1);
	t.is(recordedVariableDeclarations[0].kind, 'const');

	recurse.visit(parse('() => { let x = y; }', parserOptions), templates.visitor(visitor));

	t.is(recordedVariableDeclarations.length, 2);
	t.is(recordedVariableDeclarations[1].kind, 'let');

	recurse.visit(parse('() => { var x = y; }', parserOptions), templates.visitor(visitor));

	t.is(recordedVariableDeclarations.length, 3);
	t.is(recordedVariableDeclarations[2].kind, 'var');
});

test('`variableDeclarationVariable` unification', t => {
	const templates = eslintTemplateVisitor({ parserOptions });

	const variableDeclarationVariable = templates.variableDeclarationVariable();
	const variableVariable = templates.variable();
	const template = templates.template`{
		${variableDeclarationVariable} ${variableVariable};
		${variableDeclarationVariable} ${variableVariable};
	}`;

	const recordedVariableDeclarations = [];
	const recordedVariables = [];

	const visitor = {
		[template](node) {
			const variableDeclarationNode = template.context.getMatch(variableDeclarationVariable);
			const variableNode = template.context.getMatch(variableVariable);

			recordedVariableDeclarations.push(variableDeclarationNode);
			recordedVariables.push(variableNode);

			t.is(node.type, 'BlockStatement');
		},
	};

	recurse.visit(parse('() => { var x; var x; }', parserOptions), templates.visitor(visitor));

	t.is(recordedVariableDeclarations.length, 1);
	t.is(recordedVariableDeclarations[0].kind, 'var');

	t.is(recordedVariables.length, 1);
	t.is(recordedVariables[0].type, 'Identifier');
	t.is(recordedVariables[0].name, 'x');
});

const omitLocation = omit([
	'start',
	'end',
	'loc',
	'range',
]);

test('variable unification', t => {
	t.plan(6);

	const templates = eslintTemplateVisitor();

	const x = templates.variable();
	const template = templates.template`${x} + ${x}`;

	const visitor = {
		[template](node) {
			t.is(node.type, 'BinaryExpression');

			const xNodes = template.context.getMatches(x);

			t.is(xNodes.length, 2);

			const [ x1, x2 ] = xNodes;

			t.is(x1.type, 'Identifier');
			t.is(x1.name, 'foo');

			t.not(x1, x2);
			t.deepEqual(omitLocation(x1), omitLocation(x2));
		},
	};

	// Should match
	recurse.visit(parse('foo + foo', parserOptions), templates.visitor(visitor));

	// Should not match
	recurse.visit(parse('foo + bar', parserOptions), templates.visitor(visitor));
	recurse.visit(parse('bar + foo', parserOptions), templates.visitor(visitor));
});

test('throws on multiple top-level nodes in a template', t => {
	const templates = eslintTemplateVisitor({ parserOptions });

	t.throws(() => {
		return templates.template`a; b;`;
	});
});

test('narrow to a statement with await', t => {
	const templates = eslintTemplateVisitor({ parserOptions });

	const template = templates.template`
		async () => { await 1; }
	`.narrow('BlockStatement > :has(AwaitExpression)');

	const source = 'async () => { await 0; await 1; await 2; }';

	const visitor = {
		[template]: sinon.spy(),
	};

	recurse.visit(parse(source, parserOptions), templates.visitor(visitor));
	t.true(visitor[template].called);
	t.is(visitor[template].callCount, 1);
});

if (PARSER === '@babel/eslint-parser') {
	test('dynamic import', t => {
		const templates = eslintTemplateVisitor({ parserOptions });

		const template = templates.template`import('foo')`;

		const source = 'async () => { await import(\'bar\'); await import(\'foo\'); await import(\'qux\'); }';

		const visitor = {
			[template]: sinon.spy(),
		};

		recurse.visit(parse(source, parserOptions), templates.visitor(visitor));
		t.true(visitor[template].called);
		t.is(visitor[template].callCount, 1);
	});
}

test('fuzzing', t => {
	const { rng } = t.context;

	const templates = eslintTemplateVisitor({ parserOptions });

	const totalTests = 2 ** 13;
	let skippedTests = 0;

	times(() => {
		const randomShiftAST = fuzzProgram(new FuzzerState({ rng, maxDepth: 3 }));
		const randomEspreeSafeShiftAST = shiftToEspreeSafe(dropExtraTopLevelNodes(randomShiftAST));
		const randomJS = shiftCodegen(randomEspreeSafeShiftAST, new FormattedCodeGen()) || '"empty program";';

		try {
			const { shouldSkip } = babelEslintWorkarounds(babelEslintParse(randomJS, parserOptions));

			if (shouldSkip) {
				console.warn('Ignored a random script due to a `@babel/eslint-parser` bug (this is fine):', randomJS);
				skippedTests += 1;
				return;
			}
		} catch (error) {
			if (error.name === 'SyntaxError') {
				// TODO: `shiftToEspreeSafe` or `fuzzProgram` should do a better job ensuring program is valid
				console.warn('Ignored error (this is fine):', error.name + ':', error.message);
				skippedTests += 1;
				return;
			}

			throw error;
		}

		const randomTemplate = templates.template(randomJS);
		const randomAST = parse(randomJS, parserOptions);

		const visitor = {
			[randomTemplate]: sinon.spy(),
		};

		recurse.visit(randomAST, templates.visitor(visitor));

		const { called } = visitor[randomTemplate];

		t.true(called);

		if (!called) {
			console.dir({
				randomJS,
				randomEspreeSafeShiftAST,
				randomAST,
			}, { depth: null });

			throw new Error('Fuzzing test failed. This error is thrown just to stop this long test early.');
		}
	}, totalTests);

	console.log({
		skippedTests,
		totalTests,
	});
});
