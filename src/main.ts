import './styles/base.sass'
import '@postanu/ui/styles'

import {
	PButton,
	PButtonText,
	PDot,
	PHeading,
	PHeadline,
	PInput,
	PLogo
} from '@postanu/ui'
import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { history, routes } from './router'

export const createApp = ViteSSG(
	App,
	{ history, routes },
	({ app }) => {
		app.component('PButton', PButton)
		app.component('PButtonText', PButtonText)
		app.component('PDot', PDot)
		app.component('PHeading', PHeading)
		app.component('PHeadline', PHeadline)
		app.component('PInput', PInput)
		app.component('PLogo', PLogo)
	},
	{
		registerComponents: false,
		useHead: false
	}
)
