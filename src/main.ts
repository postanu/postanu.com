import '@postanu/ui/styles/base.styl'
import './styles/base.styl'
import './styles/ui.styl'

import PHeading from '@postanu/ui/components/p-heading/PHeading.vue'
import PButton from '@postanu/ui/components/p-button/PButton.vue'
import PIcon from '@postanu/ui/components/p-icon/PIcon.vue'
import PLogo from '@postanu/ui/components/p-logo/PLogo.vue'
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
