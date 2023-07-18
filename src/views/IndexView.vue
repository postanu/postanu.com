<template lang="pug">
.index-view
	section.section
		p-heading.title(tag="h1") Sharing your opinion <br>and talking about your life <br>should be easy
	hr.hr
	section.section#ig
		a.ig__link(
			href="https://twitter.com/postanuapp"
			target="_blank"
			rel="noopener"
		)
			p-heading(tag="h2")
				span.ig__muted @postanuapp
</template>

<style lang="sass">
.title
	text-transform: uppercase

.ig__muted
	color: var(--p-color-white-04)

.ig__link
	text-decoration: none

.ig__link:hover
	.ig__muted
		text-decoration: underline
		text-underline-offset: 10px
</style>
