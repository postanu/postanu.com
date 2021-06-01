import { createWebHistory } from 'vue-router'

export let history = createWebHistory()

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
