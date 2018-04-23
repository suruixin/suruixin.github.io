<template>
  <div class="hello">
  	<!--这是全屏的页面
  	可以<router-link to="/all/allchild1">点击</router-link>跳转到我的子页面
    <router-view></router-view>-->
    {{$store.state}}
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		background:#ff5000;
		height:500px;
	}
</style>
