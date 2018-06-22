<template>
	<div id="music">
		<ul>
			<li v-for="(item,index) in title" :key="index">{{item.title}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default ({
	data(){
		return {
			title:[]
		}
	},
	created(){
		this.getData();
	},
	methods:{
		getData(){
			this.$http.get('/songList').then((res)=>{
				this.title = res.data.data;

			})
		}
	}
})
</script>
<style type="text/css">

</style>