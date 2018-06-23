<template>
	<!-- <div id="music">
		<ul>
			<li v-for="(item,index) in title" :key="index" @click="songListName(item)">{{item.title}}</li>
		</ul>

	</div> -->

	<el-container>
		<el-header>
			
		</el-header>
		<el-main></el-main>
	</el-container>
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
			this.$get('/songList').then((res)=>{
				this.title = res.data;

			})
		},
		songListName(item){//获取歌单事件
			console.log(item)
		}
	}
})
</script>
<style type="text/css">

</style>