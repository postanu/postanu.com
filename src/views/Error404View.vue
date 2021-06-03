<template lang="pug">
.error-view
	section.section
		p-heading(tag="h1" hero)
			| Page not found
		p.p
			| You have reached a page that does not exist.
			br
			| Try to find what you're looking for in the list below. Or write to our support - we'll figure it out.
		hr.hr
		div(style="display: flex; flex-direction: column; align-items: center; gap: 20px")
			p-button(tag="a" href="/") Main page
			p-button(tag="a" href="mailto:support@postanu.com") Write to support
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Error404View'
})
</script>
