<template lang="pug">
.login-view
	form.form(
		v-if="step === 'email'"
		@submit.prevent="sendEmail"
	)
		label.label
			p-input.input(
				ref="inputEmail"
				v-model="email"
				type="email"
				placeholder="kazimir@gmail.com"
				autocomplete="username"
				inputmode="email"
				autofocus="true"
				required
			)
			p.p
				| Type your email address, then press enter.
				br
				| We’ll send you a verification code.
		p-button-text.button(
			type="submit"
			variant="target"
			:disabled="state === 'loading'"
		) Enter
	form.form(
		v-if="step === 'code'"
		@submit.prevent="verifyCode"
	)
		label.label
			p-input.input(
				ref="inputCode"
				v-model="code"
				type="text"
				placeholder="xxx-xxxx-xxx-xxxx"
				autocomplete="one-time-code"
				autocapitalize="off"
				autocorrect="off"
				spellcheck="false"
				autofocus="true"
				required
			)
			p.p
				| Paste in the verification code
				br
				| We’ll verify it for logging in.
		div
			p-button-text.button(
				type="button"
				variant="muted"
				:disabled="state === 'loading'"
				@click="stepBack"
			) Back
			p-button-text.button(
				type="submit"
				variant="target"
				:disabled="state === 'loading'"
			) Verify
	loading-state(:state="state")
		template(#title)
			span(v-html="stateTitle")
		template(#description)
			span(v-html="stateDescription")
</template>

<script lang="ts" setup>
import type { LocationQueryValue } from 'vue-router'

import { PInput } from '@postanu/ui'
import { nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { authSendEmail, authVerifyCode } from '../api/index.js'
import LoadingState from '../components/LoadingState.vue'

type StateTypes = InstanceType<typeof LoadingState>['$props']['state']
type Steps = 'code' | 'email'

const step = ref<Steps>('email')
const state = ref<StateTypes>(false)
const stateTitle = ref<null | string>(null)
const stateDescription = ref<null | string>(null)

const email = ref('')
const code = ref('')

const inputEmail = ref<null | typeof PInput>(null)
const inputCode = ref<null | typeof PInput>(null)

const route = useRoute()

function setState (_state: StateTypes, _step?: Steps): void {
	state.value = _state

	if (_state === 'loading') {
		stateTitle.value = null
		stateDescription.value = null
		return
	}

	if (_step === 'email') {
		if (_state === 'success') {
			stateTitle.value = `Code was sent to ${email.value}`
			stateDescription.value = 'Check your inbox, there should be a&nbsp;letter with&nbsp;a&nbsp;verification&nbsp;code.'
		} else if (_state === 'error') {
			stateTitle.value = 'Something went wrong'
			stateDescription.value = 'Don’t worry, it happens, there is no success without&nbsp;mistakes. Try to repeat.'
		}
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	} else if (_step === 'code') {
		if (_state === 'success') {
			stateTitle.value = 'You were authorized'
			stateDescription.value = 'Now we will automatically redirect you to&nbsp;the&nbsp;application.'
		} else if (_state === 'error') {
			stateTitle.value = 'Something went wrong'
			stateDescription.value = 'Your code is invalid or expired. Check it for errors or&nbsp;try going back and&nbsp;send&nbsp;a&nbsp;new&nbsp;code.'
		}
	}
}

function setFocus (input: 'code' | 'email', active = true): void {
	nextTick(() => {
		if (input === 'email') {
			active ? inputEmail.value?.focus() : inputEmail.value?.blur()
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		} else if (input === 'code') {
			active ? inputCode.value?.focus() : inputCode.value?.blur()
		}
	})
}

onMounted(() => {
	setFocus('email')
})

async function sendEmail (): Promise<void> {
	setState('loading')
	setFocus('email', false)

	try {
		await authSendEmail(
			`${route.query.api_url}/v1/auth/passwordless`,
			email.value,
			route.query.redirect_url as LocationQueryValue
		)
		setTimeout(() => {
			setState('success', 'email')
			step.value = 'code'
			setFocus('code')
		}, 600)
	} catch (error) {
		console.error(error)
		setTimeout(() => {
			setState('error', 'email')
			setFocus('email')
		}, 600)
	}
}

async function verifyCode (): Promise<void> {
	setState('loading')
	setFocus('code', false)

	try {
		let { redirect_url } = await authVerifyCode(
			`${route.query.api_url}/v1/auth/passwordless/verify`,
			code.value
		)
		setTimeout(() => {
			setState('success', 'code')
			setTimeout(() => {
				location.href = redirect_url
			}, 1000)
		}, 600)
	} catch (error) {
		console.error(error)
		setTimeout(() => {
			setState('error', 'code')
			setFocus('code')
		}, 600)
	}
}

function stepBack (): void {
	step.value = 'email'
	code.value = ''
	setFocus('email')
}
</script>

<style lang="sass" scoped>
.login-view
	gap: 100px
	min-height: 100vh
	padding: 0 20px

.p
	max-width: 320px

.form
	display: flex
	flex: 1
	flex-direction: column
	gap: 100px
	justify-content: space-between
	margin-top: 220px

	@media (height < 800px)
		margin-top: 170px

.label
	display: flex
	flex-direction: column
	align-items: center

.input
	display: flex
	gap: 50px
	padding: 0 0 50px
	font-size: var(--p-h1-font-size)
	font-weight: var(--p-h1-font-weight)
	line-height: var(--p-h1-line-height)
	text-align: center

	@media (height < 800px)
		padding-bottom: 30px

.input:focus-visible
	box-shadow: none

.button
	--p-button-padding: 20px
	align-self: center
	margin-top: 80px

	@media (height < 800px)
		margin-top: 60px
</style>
