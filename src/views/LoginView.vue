<template lang="pug">
.login-view
	form.form(@submit.prevent="send")
		div
			label.label
				p-input.input(
					ref="input"
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
					| We’ll send you a magic login link.
			p-button-text.button(
				type="submit"
				variant="target"
				:disabled="state === 'loading'"
			) Enter
		.state
			p-dot(:state="state")
			.state-message(v-if="state ==='error'")
				h3.state-message__title Something went wrong
				p.p.p-caption.state-message__description
					| Don't worry, it happens, there is no success without&nbsp;mistakes.
					| Try to repeat what you were&nbsp;doing.
			.state-message(v-if="state ==='success'")
				h3.state-message__title Login link was sent
				p.p.p-caption.state-message__description
					| Check your inbox, there should be a letter with a&nbsp;magic&nbsp;link.
					| Just click on it to log in.
</template>

<script lang="ts" setup>
import { PInput } from '@postanu/ui'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const state = ref<'error' | 'loading' | 'success' | false>(false)

const email = ref('')
const input = ref<null | typeof PInput>(null)

const route = useRoute()

onMounted(() => {
	input.value?.focus()
})

async function send (): Promise<void> {
	state.value = 'loading'
	input.value?.blur()

	try {
		let response = await fetch(`${route.query.api}/v1/auth/passwordless`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email.value
			})
		})
		if (response.ok) {
			setTimeout(() => {
				state.value = 'success'
			}, 600)
		} else {
			throw new Error('Response was not ok.')
		}
	} catch {
		setTimeout(() => {
			state.value = 'error'
		}, 600)
	}
}
</script>

<style lang="sass" scoped>
.login-view
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

.state
	display: flex
	flex-direction: column
	gap: 20px
	align-items: center
	height: 150px
	padding-bottom: 50px

.state-message__title
	padding-bottom: 10px

.state-message__description
	color: var(--p-color-white-05)
</style>
