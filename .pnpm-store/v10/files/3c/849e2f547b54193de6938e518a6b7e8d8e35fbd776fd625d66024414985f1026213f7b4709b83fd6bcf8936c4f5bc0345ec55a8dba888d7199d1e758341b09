const assert = require('assert');
const { check } = require('../src/checker.js');

async function test() {
	const error = await check().catch((error) => error);

	assert(/No configuration provided/.test(error.message));

	const fail = await check('./test/fail');

	assert(fail.length > 0);
	assert(fail.includes('indentation'));

	const pass = await check('./test/pass');

	assert(pass === null);
}

test().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
