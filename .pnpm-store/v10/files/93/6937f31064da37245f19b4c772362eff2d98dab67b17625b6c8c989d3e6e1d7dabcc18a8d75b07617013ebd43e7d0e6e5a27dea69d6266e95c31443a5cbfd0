
const test = require('ava');
const avaRuleTester = require('eslint-ava-rule-tester');

const run = require('./_common');
const rule = require('./before');

const ruleTester = avaRuleTester(test, {
	env: {
		es6: true,
	},
});

run(ruleTester, rule);
