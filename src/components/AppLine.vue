<template lang="pug">
.app-line
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AppLine'
})
</script>

<style lang="stylus">
.app-line
	height: 35vh
	position: relative
	margin-top: 50px

.app-line:after
	content: ""
	left: 50%
	height: 100%
	position: absolute
	border-left: 1px solid var(--p-color-white-02)
</style>
