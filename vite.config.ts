import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
		vue()
	],
	ssgOptions: {
		script: 'async defer',
		formatting: 'minify',
		includedRoutes: routes => {
			routes.push('404')
			// https://github.com/antfu/vite-ssg/blob/d14b50983a909f4b42d209c4b207a05ee4fefcd9/src/node/build.ts#L19
			return routes.filter(i => !i.includes(':') && !i.includes('*'))
		}
	},
	optimizeDeps: {
		include: ['@postanu/core']
	},
	ssr: {
		noExternal: ['@postanu/ui']
	}
})
