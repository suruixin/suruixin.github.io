<template>
	<div id="app">
		<router-view name="home" />
		<router-view/>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'App',
		created() {

		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
</style>