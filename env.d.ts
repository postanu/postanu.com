/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	let component: DefineComponent<{}, {}, any>
	export default component
}
