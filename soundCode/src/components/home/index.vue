<template>
	<ul id="home">
		<li v-for="(item,index) in data" :key="index" class="hover homeItem">
			{{item.title}}
		</li>
	</ul>
</template>
<script>
	export default({
		data() {
			return {
				data: []
			}
		},
		methods: {
			getData() {
				this.$http.post('/article/list').then((res) => {
					for(var i = 0; i < 20; i++) {
						this.data.push(...res.data.data);
					}
				}).catch((err) => {
					console.log(err)
				})
			}
		},
		created() {
			this.getData();
		}
	})
</script>

<style scoped lang=less>
	#home {
		.homeItem{
			min-height: 200px;
			width: 300px;
			display:inline-block;
			background:#f2f2f2;
			margin: 0 15px 15px 0;
		}
	}
	
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