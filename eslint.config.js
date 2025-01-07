export default [
	js.configs.recommended,
	{
		ignores: ['node_modules'],
		rules: {
			semi: 0,
			'prefer-const': 'error',
		},
	},
]
