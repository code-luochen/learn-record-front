import vueEslintParser from 'vue-eslint-parser'

export default [
	{
		files: ['./**/*.vue'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: vueEslintParser,
		},
	},
]
