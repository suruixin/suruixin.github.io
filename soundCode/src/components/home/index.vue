<template>
	<div id="home">
		首页正在努力搭建中
		<a href="javascript:void(0)" class="link" @click="clear">三秒后自动跳转至axios文档页面，点击跳转</a>
	</div>
</template>
<script>
export default({
	name: 'home',
	data(){
		return {
			timeout: ''
		}
	},
	mounted(){
		this.timeout = setTimeout(m => {
			this.$router.push('/document/axios')
		}, 3000);
	},
	methods:{
		clear () {
			clearTimeout(this.timeout);
			this.$router.push('/document/axios')
		}
	}
})
</script>
<style scoped lang="less">
	#home{
		font-size: 28px;
		font-weight: 100;
		text-align: center;
		line-height: 500px;
		color: #666;
		.link{
			font-size: 12px;
			line-height: 24px;
			display: block;
			color: #888;
		}
	}
</style>