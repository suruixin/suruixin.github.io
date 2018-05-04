<template>
	<div id="home">
		
	</div>
</template>
<script>
	export default({
		data(){
			return {
				data:[]
			}
		},
		methods:{
			getData(){
				this.$http.post('/article/list').then((res)=>{
					this.data = res.data
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			this.getData();
		}
	})
</script>

<style scoped lang=less>
	@media screen and (min-width: 900px) {
		#home {
			width: 100%;
			margin: 0 auto;
			background: #fff;
			min-height: 100%;
		}
	}
	
	@media screen and (max-width: 900px) {
		#home {}
	}
</style>