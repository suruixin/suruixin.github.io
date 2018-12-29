<template>
	<div>
		<!-- <docTemp :tab="tab" :content="content"></docTemp> -->
		<div class="templates">
			<ul class="tempTab">
				<router-link class="tempTabItem" to="/document/axios/introduction" tag="li"><span class="ed" :class="{active:$route.name === 'axiosIntroduction'}">介绍</span></router-link>
				<router-link class="tempTabItem" to="/document/axios/install" tag="li"><span class="ed" :class="{active:$route.name === 'axiosInstall'}">安装</span></router-link>
				<li class="tempTabItem" @click="tabChildCallBack(-1)"><span class="ed" :class="{active:$route.name === 'axiosApi'}">API</span></li>
				<transition >
				<ul class="childsWrapper">
					<li class="tempTabItem" v-for="(item,index) in tab" @click="tabChildCallBack(index, item)" :key="index"><span class="childEd" :class="{active: $route.params.api === item}">{{item}}</span></li>
				</ul>
				</transition>
				<router-link class="tempTabItem" to="/document/axios/parameter/parameter" tag="li"><span class="ed" :class="{active:$route.name === 'parameter'}">参数</span></router-link>
				<!-- <router-link class="tempTabItem" to="/document/axios/example" tag="li"><span class="ed" :class="{active:$route.name === 'example'}">常用例子</span></router-link> -->
			</ul>
			<div class="tempCon" id="tempCon" style="width: 600px;" ref="tempCon">
				<router-view ref="router"></router-view>
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
			tab: ['get', 'post', 'axios', 'sync', 'delete'],
			content: []
		}
	},
	mounted(){
// 		this.$get('/static/json/axios.json',{}, function(){return 20000}).then(res => {
// 			console.log(res)
// 			if (res.code === "1") {
// 				this.tab = res.data.tab
// 				this.content = res.data.content
// 			}
// 		})
		this.init()
	},
	methods: {
		tabChildCallBack(index, to) {
			let oldScroll = this.$refs.tempCon.scrollTop
			let count = 1
			if(index === -1){
				this.$router.push('/document/axios/api/api')
				let interApi = setInterval(m => {
					if(count === 30){
						clearInterval(interApi)
					}
					this.$refs.tempCon.scrollTo(0, oldScroll - ((oldScroll - 0 + 61) / 30 * count))
					count++
				}, 10)
			}
			if(to) {
				this.$router.push(`/document/axios/api/${to}`)
			}
			setTimeout(m => {
				for(var i = 0; i< this.$refs.router.$refs.tempConItem.children.length; i++){
					let childDom = this.$refs.router.$refs.tempConItem.children[i]
					if(index === i&&oldScroll !== childDom.offsetTop-61){
						let inter = setInterval(m => {
							if(count === 30){
								clearInterval(inter)
							}
							if(oldScroll < childDom.offsetTop-61) {
								this.$refs.tempCon.scrollTo(0, oldScroll + (childDom.offsetTop - 61 - oldScroll)/30*count)
							}else{
								this.$refs.tempCon.scrollTo(0, oldScroll - ((oldScroll - childDom.offsetTop + 61) / 30 * count))
							}
							count++
						}, 10)
					}
				}
			}, 30)
			
		},
		init(){
			if(this.$route.params.api) {
				this.tab.map((m, i) => {
					if(this.$route.params.api === m)
					this.tabChildCallBack(i)
				})
			}
		}
	}
})
</script>
<style scoped lang="less">
	.active {
		color: #CE5423;
	}
</style>