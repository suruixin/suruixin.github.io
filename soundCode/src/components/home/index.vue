<template>
	<ul id="home">
		<li v-for="(item,index) in data" :key="index" class="hover homeItem">
			{{item.title}}
		</li>
	</ul>
</template>
<script>
	import qs from 'qs';
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
			},
			setData() {
				this.$http.post('http://www.tuling123.com/openapi/api', qs.stringify({
					key: '10db56a8fd7c431da2bcc9d64b500f7c',
					info: '你好'
				})).then((respons) => {
					console.log(respons)
				})
			}
		},
		created() {
			this.getData();
			this.setData();
		}
	})
</script>

<style scoped lang=less>
	#home {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		max-width: 1200px;
		margin: auto;
		.homeItem {
			min-height: 300px;
			display: inline-block;
			background: #f4f4f4;
			margin: 0 10px 10px;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 6px;
			color: #494949;
			padding: 20px;
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