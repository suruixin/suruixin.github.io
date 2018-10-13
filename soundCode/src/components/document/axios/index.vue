<template>
	<div>
		<!-- <docTemp :tab="tab" :content="content"></docTemp> -->
		<div class="templates">
			<ul class="tempTab">
				<router-link class="tempTabItem" to="/document/axios/introduction" tag="li"><span class="ed">介绍</span></router-link>
				<router-link class="tempTabItem" to="/document/axios/install" tag="li"><span class="ed">安装</span></router-link>
				<router-link class="tempTabItem" to="/document/axios/api/api" tag="li"><span class="ed">API</span></router-link>
				<ul class="childsWrapper">
					<li>get</li>
					<li>post</li>
					<li>axios</li>
					<li>sync</li>
					<li>delete</li>
				</ul>
				<router-link class="tempTabItem" to="/document/axios/parameter/parameter" tag="li"><span class="ed">参数</span></router-link>
			</ul>
			<div class="tempCon" id="tempCon">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
import docTemp from '@/components/templates'
export default({
	components: {
		docTemp
	},
	data(){
		return {
			tab: [],
			content: []
		}
	},
	mounted(){
		this.$get('/static/json/axios.json',{}, function(){return 20000}).then(res => {
			console.log(res)
			if (res.code === "1") {
				this.tab = res.data.tab
				this.content = res.data.content
			}
		})
	}
})
</script>
<style scoped lang="less">
	
</style>