<template lang="pug">
header.header
	router-link(to="/")
		p-logo.header__logo
	p-button.header__button(disabled) Coming soon
main
	router-view.view
hr.hr
footer.footer
	p
		p-heading(
			tag="span"
			headline
		) Neither&nbsp;autoposting nor&nbsp;marketing nor&nbsp;SMM <br>nor&nbsp;platform nor&nbsp;service nor&nbsp;promotion nor&nbsp;sales
		br
		br
		p-heading(
			tag="span"
			headline
		) Copyright © 2021 Postanu LLC
</template>

<script lang="ts" setup>
</script>

<style lang="sass">
.view
	display: flex
	flex-direction: column
	justify-content: center
	padding: 20px 20px 0
	text-align: center

.header
	position: fixed
	display: flex
	align-items: center
	justify-content: space-between
	width: 100%

.header__logo
	display: inline-block
	padding: 20px

.header__button
	padding: 20px
	border-radius: 35px

.footer
	display: flex
	flex-direction: column
	justify-content: center
	margin: 200px 0
	text-align: center

.footer__rune
	margin-bottom: 50px
</style>
