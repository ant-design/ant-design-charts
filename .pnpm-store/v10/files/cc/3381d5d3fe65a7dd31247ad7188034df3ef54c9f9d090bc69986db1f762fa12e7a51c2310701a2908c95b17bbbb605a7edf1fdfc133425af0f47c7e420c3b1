
const errors = [ {
} ];

module.exports = (ruleTester, rule) => ruleTester.run('prefer-string-slice', rule, {
	valid: [
		'foo.slice()',
		'foo.slice(0)',
		'foo.slice(1, 2)',
		'foo.slice(-3, -2)',
	],

	invalid: [
		{
			code: 'foo.substr()',
			output: 'foo.slice()',
			errors,
		},
		{
			code: '"foo".substr()',
			output: '"foo".slice()',
			errors,
		},

		{
			code: 'foo.substr(start)',
			errors,
		},
		{
			code: '"foo".substr(1)',
			errors,
		},
		{
			code: 'foo.substr(start, length)',
			errors,
		},
		{
			code: '"foo".substr(1, 3)',
			errors,
		},
	],
});
