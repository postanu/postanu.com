import '@postanu/ui/style'
import './styles/base.sass'
import './styles/ui.sass'

import {
	PHeading,
	PButton,
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
		app.component('PLogo', PLogo)
	},
	{
		registerComponents: false,
		useHead: false
	}
)
