<template>
	<ul id="install">
		<li class="install">
			<h2 class="installTitle">标题</h2>
			<input type="text" v-model="title"/>
		</li>
		<li class="install">
			<h2 class="installContent">内容</h2>
			<textarea v-model="content"></textarea>
		</li>
		<li class="install">
			<button @click="submit">提交</button>
		</li>
	</ul>
</template>

<script>
	export default({
		data(){
			return{
				title:'',
				content:''
			}
		},
		methods:{
			submit(){
				this.$http.post('/article',{
					title:this.title,
					content:this.content
				}).then((response)=>{
					console.log(response)
				})
			}
		}
	})
</script>

<style scoped lang=less>
</style>