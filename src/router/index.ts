import { createMemoryHistory, createWebHistory } from 'vue-router'

let isClient = typeof window !== 'undefined'

export let history = isClient ? createWebHistory() : createMemoryHistory()

export let routes = [
	{
		path: '/',
		component: (): Promise<typeof import('*.vue')> =>
			import('../views/IndexView.vue')
	},
	{
		path: '/500',
		component: (): Promise<typeof import('*.vue')> =>
			import('../views/Error500View.vue')
	}
]
