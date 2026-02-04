import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		rules: {
			'id-length': [
				'error',
				{ max: 30, min: 1 },
			],
			'new-cap': [
				'error',
				{
					capIsNewExceptions: [
						'CreateDataProperty',
						'IsCallable',
						'RequireObjectCoercible',
						'ToObject',
					],
				},
			],
		},
	},
	{
		files: ['test/**'],
		rules: {
			'no-invalid-this': 'warn',
		},
	},
];
