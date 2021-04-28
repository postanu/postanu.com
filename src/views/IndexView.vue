<template lang="pug">
.index-view
	section.section
		p-heading(tag="h1" hero) Sharing your opinion <br>and talking about your life <br>should be easy
		app-line
	section.section#ig
		a.ig__link(
			href="https://instagram.com/postanuapp"
			target="_blank"
			rel="noopener"
		)
			p-heading(tag="h2" hero)
				| IG
				br
				span.ig__muted @postanuapp
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'IndexView'
})
</script>

<style lang="stylus">
.index-view
	padding: 20px 20px 0px 20px
	display: flex
	text-align: center
	flex-direction: column
	justify-content: center

.ig__muted
	color: var(--p-color-white-04)

.ig__link
	text-decoration: none

.ig__link:hover
	color: inherit

	.ig__muted
		text-decoration: underline
		text-underline-offset: 10px

</style>
