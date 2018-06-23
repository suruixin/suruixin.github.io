<template>
	<ul id="songList">
		<li v-for="(item,index) in title" :key="index" class="songItem">
			<label>{{item.title}}</label>
			<el-card class="box-card" v-if="song.img" v-for="song in item.data" :key="song.title">
				<div class="text item">
					<img :src="song.img">
					<p>{{song.title}}</p>
				</div>
			</el-card>
		</li>
	</ul>
</template>
<script type="text/javascript">
export default({
	data(){
		return {
			title: [],
		}
	},
	props:{
		url: String
	},
	methods:{
		getData(){
			this.$post('/songList/discover',{url:this.url}).then((res)=>{
				console.log(res)
				this.title = res.data;
				this.title.push({
					data: [{
						img: "http://p1.music.126.net/u0sacSODkgXoOs4Py0s_0A==/18753270325565458.jpg?param=140y140",
						title: "有意思！这些歌同名不同曲唱出别样旋律",
						url: "/playlist?id=2277861412"
					}],
					title:'个人推荐'
				})
			})
		},
	},
	created(){
		this.$nextTick(()=>{
			this.getData();
		})
	}
})
</script>
<style type="text/css" lang=less>
#songList{
	height:100%;
	overflow-y: auto;
	overflow-x: hidden;
	.songItem{
		&:after{
			content: '';
			display: block;
			clear: both;
		}
		label{
			width: 100%;
			display: block;
			height: 45px;
			line-height: 45px;
		}
	}
	
}
.box-card {
	width: 180px;
	float: left;
}
</style>