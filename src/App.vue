<template lang="pug">
header.header
	router-link(to="/")
		p-logo.header__logo
	p-button.header__button(disabled) Coming soon
main.main
	router-view.view
hr.hr(v-if="showFooter")
footer.footer(v-if="showFooter")
	p
		p-headline(tag="span") Neither&nbsp;autoposting nor&nbsp;marketing nor&nbsp;SMM <br>nor&nbsp;platform nor&nbsp;service nor&nbsp;promotion nor&nbsp;sales
		br
		br
		p-headline(tag="span") Copyright © 2023 Postanu LLC
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

let route = useRoute()
let showFooter = computed(() => route.meta.footer !== false)
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
