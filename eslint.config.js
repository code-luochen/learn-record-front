import vueEslintParser from 'vue-eslint-parser'

export default [
	// js.configs.recommended,
	// {
	// 	ignores: ['node_modules'],
	// 	rules: {
	// 		semi: 0,
	// 		'prefer-const': 'error',
	// 	},
	// },
	{
		files: ['./**/*.vue'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: vueEslintParser,
		},
	},
]
