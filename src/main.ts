import './styles/base.sass'
import './styles/ui.sass'
import '@postanu/ui/styles'

import {
	PButton,
	PHeading,
	PLogo
} from '@postanu/ui'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { history, routes } from './router'

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
