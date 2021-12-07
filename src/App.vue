<template lang="pug">
header.header
	router-link(to="/")
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
	display: flex
	flex-direction: column
	justify-content: center
	padding: 20px 20px 0px 20px
	text-align: center

.header
	position: fixed
	display: flex
	justify-content: space-between
	width: 100%

.header__logo
	display: inline-block
	padding: 20px

.header__coming
	padding: 20px
	text-transform: lowercase

.footer
	display: flex
	flex-direction: column
	justify-content: center
	margin: 200px 0
	text-align: center

.footer__rune
	margin-bottom: 50px
</style>
