<template>
	<div id="app">
		<router-view name="login" />
	</div>
</template>

<script>
	import all from '@/components/all/all'
	import { mapState } from 'vuex'
	export default {
		name: 'App',
		data() {
			return {
				localCount: 1
			}
		},
		created() {
			this.$http.post('/index').then((res) => {
				//				console.log(res)
			}).catch((err) => {
				console.log(err)
			});
		},
		methods: {
			a() {
				this.$store.commit('increment')
			}
		},
		components: {
			all
		},
		computed: {
			//mapState   将指定属性 放入 this
			...mapState(['obj'])
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}
</style>