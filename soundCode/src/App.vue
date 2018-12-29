<template>
  <div id="app">
    <tabTop></tabTop>
    <router-view class="routerContent"/>
  </div>
</template>

<script>
import tabTop from '@/components/tab/top'
export default {
  name: 'App',
  components:{
    tabTop
  }
}
</script>

<style lang="less" >
#app{
	height: 100%;
	.routerContent{
		height: calc(100% - 61px);
	}
}
</style>
