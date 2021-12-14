import { createMemoryHistory, createWebHistory } from 'vue-router'

type LazyComponent = Promise<typeof import('*.vue')>

let isClient = typeof window !== 'undefined'

export let history = isClient ? createWebHistory() : createMemoryHistory()

export let routes = [
	{
		path: '/',
		component: (): LazyComponent =>
			import('../views/IndexView.vue')
	},
	{
		path: '/500',
		component: (): LazyComponent =>
			import('../views/Error500View.vue')
	},
	{
		path: '/close',
		component: (): LazyComponent =>
			import('../views/ClosedTabView.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		component: (): LazyComponent =>
			import('../views/Error404View.vue')
	}
]
