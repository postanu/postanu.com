<template lang="pug">
header.header
	p-logo.header__logo
	.header__coming Coming soon
main
	router-view.view
hr.hr
footer.footer
	.footer__rune
		p-icon(icon="edaks")
	p
		p-heading(tag="span" headline) Neither&nbsp;autoposting nor&nbsp;marketing nor&nbsp;SMM <br>nor&nbsp;platform nor&nbsp;service nor&nbsp;promotion nor&nbsp;sales
		br
		br
		p-heading(tag="span" headline) Copyright © 2021 Postanu LLC
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IndexView from './views/IndexView.vue'

export default defineComponent({
	name: 'App',
	components: { IndexView }
})
</script>

<style lang="stylus">
.view
	padding: 20px 20px 0px 20px
	display: flex
	text-align: center
	flex-direction: column
	justify-content: center

.header
	width: 100%
	display: flex
	position: fixed
	justify-content: space-between

.header__logo
	padding: 20px
	display: inline-block

.header__coming
	padding: 20px
	text-transform: lowercase

.footer
	margin: 200px 0
	display: flex
	text-align: center
	flex-direction: column
	justify-content: center

.footer__rune
	margin-bottom: 50px
</style>
