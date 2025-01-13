import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@utils': '/src/utils',
		},
	},
	server: {
		port: 3000,
		open: true,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:3001',
		// 		changeOrigin: true,
		// 	},
		// },
	},
})
