<template lang="pug">
.loading-state
	p-dot(:state="state")
	div(v-if="title || description")
		h3.state-message__title(v-if="title")
			slot(name="title")
		p.p.p-caption.state-message__description(v-if="description")
			slot(name="description")
</template>

<script lang="ts" setup>
import { PDot } from '@postanu/ui'

interface Props {
	state: InstanceType<typeof PDot>['$props']['state']
}

interface Slots {
	title: () => unknown
	description: () => unknown
}

defineProps<Props>()
const { title, description } = defineSlots<Slots>()
</script>

<style lang="sass">
.loading-state
	display: flex
	flex-direction: column
	gap: 20px
	align-items: center
	height: 150px

.state-message__title
	padding-bottom: 10px

.state-message__description
	color: var(--p-color-white-05)

.p
	max-width: 320px
</style>
