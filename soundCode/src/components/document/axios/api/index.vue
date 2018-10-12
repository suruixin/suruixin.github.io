<template>
<ul class="tempConItem">
	<li>
		<router-link to="/document/axios/api/get">get</router-link>
		<p class="zd desc">this.$get(url,prams,duration)</p>
		<p class="desc"><span>url: //请求地址</span><span>类型: String</span></p>
		<p class="desc"><span>prams: //请求参数</span><span>类型: Object</span></p>
		<p class="desc"><span>duration: //本地存储,为Number时,存储时间单位为分钟;为Boolean时,true为10分钟;function时接受用户返回的值,单位毫秒,若用户不返回,抛出一个异常;String时接收用户在config中设置的方法的key值,若未匹配到则抛出一个异常</span><span>类型: Number|Boolean</span></p>
	</li>
</ul>
</template>
<script>

</script>
<style>
	
</style>