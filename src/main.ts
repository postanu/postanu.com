import '@postanu/ui/styles/base.styl'
import './styles/base.styl'
import './styles/ui.styl'

import {
	PHeading,
	PButton,
	PIcon,
	PLogo
} from '@postanu/ui'
import { ViteSSG } from 'vite-ssg'

import { routes, history } from './router'
import App from './App.vue'

export const createApp = ViteSSG(
	App,
	{ history, routes },
	({ app }) => {
		app.component('PHeading', PHeading)
		app.component('PButton', PButton)
		app.component('PIcon', PIcon)
		app.component('PLogo', PLogo)
	},
	{
		registerComponents: false,
		useHead: false
	}
)
