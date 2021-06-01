<template lang="pug">
.error-view
	section.section
		p-heading(tag="h1" hero)
			| Error 500
			br
			| Something went wrong
		p.p Don't worry, it happens, there is no success without mistakes. Try to repeat what you were doing.
	template(v-if="showCode")
		hr.hr
		section.section
			p.p If this is not the first time you've got this problem, send&nbsp;this code to support:
			p-heading(tag="span" hero) {{ code }}
			p.p This way we'll understand what problem you've encountered and fix it faster.
			div
				//- p-button Write to support
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'Error500View',
	setup () {
		let route = useRoute()
		return {
			showCode: computed(() => route.query.code),
			code: route.query.code
		}
	}
})
</script>
