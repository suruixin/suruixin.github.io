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
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.homeItem {
			min-height: 200px;
			display: inline-block;
			background: #f2f2f2;
			margin: 0 10px 10px;
			padding: 10px;
			box-sizing: border-box;
		}
	}
	
	@media screen and (min-width: 900px) {
		#home {
			width: 100%;
			margin: 0 auto;
			background: #fff;
			min-height: 100%;
			.homeItem {
				width: 30%;
			}
		}
	}
	
	@media screen and (max-width: 900px) {
		#home {
			.homeItem {
				width: 300px;
			}
		}
	}
	
	@media screen and (max-width: 400px) {
		#home {
			.homeItem {
				width: 100%;
			}
		}
	}
</style>