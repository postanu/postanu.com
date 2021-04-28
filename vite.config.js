import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
		vue()
	],
	optimizeDeps: {
		exclude: ['@postanu/ui']
	},
	ssgOptions: {
		script: 'async defer',
		formatting: 'minify'
	}
})
