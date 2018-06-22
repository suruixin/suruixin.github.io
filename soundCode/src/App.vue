<template>
	<div id="app">
		<!-- <Nheader></Nheader>
		<router-view name="home" /> -->
		<router-view />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Nheader from '@/components/utils/header'
	export default {
		name: 'App',
		data() {
			return {}
		},
		methods: {},
		created() {},
		components: {
			Nheader
		}
	}
</script>

<style>
	#app {
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		box-sizing: border-box;
	}
	
	@media screen and (min-width: 900px) {
		#app {
			padding-top: 50px;
		}
	}
	
	@media screen and (max-width: 900px) {
		#app {
			padding-top: 45px;
		}
	}
</style>