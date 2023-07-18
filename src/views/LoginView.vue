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
				:disabled="loading"
			) Enter
		.state
			p-dot(:state="state")
			.error(v-if="error")
				h3.error-message Something went wrong
				p.p.p-caption.error-description
					| Don't worry, it happens, there is no success without&nbsp;mistakes.
					| Try to repeat what you were&nbsp;doing.
</template>

<script lang="ts" setup>
import { PInput } from '@postanu/ui'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const loading = ref(false)
const error = ref(false)
const state = computed(
	() => error.value
		? 'error'
		: (loading.value ? 'loading' : false)
)

const email = ref('')
const input = ref<null | typeof PInput>(null)

const route = useRoute()

onMounted(() => {
	input.value?.focus()
})

async function send (): Promise<void> {
	loading.value = true
	error.value = false
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
		if (!response.ok) {
			throw new Error('Response was not ok.')
		}
		setTimeout(() => {
			loading.value = false
		}, 600)
	} catch {
		setTimeout(() => {
			error.value = true
			loading.value = false
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

.error-message
	padding-bottom: 10px

.error-description
	color: var(--p-color-white-05)
</style>
