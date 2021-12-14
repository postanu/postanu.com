<template lang="pug">
.error-view
	section.section
		p-heading(tag="h1" hero)
			| Yay!
			br
			| This tab will be closed soon.
		p.p If you like, close it yourself. Everything you did successfully&nbsp;happened in the previous tab.
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
	setTimeout(() => {
		window.close()
	}, 2000)
})
</script>
