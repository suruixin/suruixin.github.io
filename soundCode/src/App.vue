<template>
	<div id="musicApp">
		<el-menu :default-active="activeIndex" class="el-menu-demo"  mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="padding-left:55px" @select="select">
			<el-menu-item :index="index.toString()" v-for="(item,index) in title" :key="index">{{item.title}}</el-menu-item>
		</el-menu>
		<router-view class="musicBody" :url="url"></router-view>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Nheader from '@/components/utils/header'
export default {
	name: 'App',
	data() {
		return {
			activeIndex: '0',
			title:[],
			url: '/discover'
		}
	},
	methods: {
		getData(){
			this.$get('/songList').then((res)=>{
				this.title = res.data;

			})
		},
		select(key, keyPath){
			if(key != '3'){
				this.url = this.title[key*1].url;
				this.$router.push(this.url)
			}else{
				const h = this.$createElement;
		        this.$notify({
		          title: '友情提示',
		          message: h('i', { style: 'color: #FFD04B'}, `${this.title[key*1].url}为网易云专属，无法调取歌单！`)
		        });
			}
			
			console.log(key, keyPath)
		}
	},
	created() {
		this.getData();
	},
	components: {
		Nheader
	}
}
</script>

<style lang=less>
#musicApp {
	height: 100%;
	overflow: hidden;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	box-sizing: border-box;
	display:flex;
	flex-direction: column;
	.musicBody{
		flex: 1;
	}
}
</style>