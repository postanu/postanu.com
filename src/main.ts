import '@postanu/ui/styles/base.styl'
import './styles/base.styl'
import './styles/ui.styl'

import { PHeading, PIcon, PLogo } from '@postanu/ui'
import { ViteSSG } from 'vite-ssg/single-page'

import AppLine from './components/AppLine.vue'
import App from './App.vue'

export const createApp = ViteSSG(App, ({ app }) => {
	app.component('AppLine', AppLine)
	app.component('PHeading', PHeading)
	app.component('PIcon', PIcon)
	app.component('PLogo', PLogo)
}, {
	registerComponents: false,
	useHead: false
})
