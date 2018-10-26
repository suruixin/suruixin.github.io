<template>
	<div class="tem-pl">
		<p class="desc">下来推荐下小伙伴比较喜欢用的两种数据请求的方式：</p>
		<p class="desc">第一种是新建一个文件夹，将所有的数据请求放在这个文件夹下</p>
<pre class="bash hljs">
	
  <span>//例子</span>
  // Number
  传入number代表需要存储的具体时间，单位为:分
  
  
  // Boolean
  是否启用本地储存，储存时间10分钟
  
  
  // String
  在config.js中配置duration项，当你传入该string时，启用自定义存储时间，单位毫秒
  config所在目录
  .
  └── src
  ├── assets
  │   └── utils  // 本插件推荐存放位置，后续文件也将放在此目录下
  │       ├── axios
  │       ├── config.js // 配置文件
  │       └── index.js
  ├── components
  ├── router
  ├── App.vue
  └── main.js
  // 例子
  // app.vue
  this.$post('/static/json/axios.json', {}, 'tenMin').then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })
  // config.js
  const config = {
    request: {
      intercept(){ },// this.$get this.$post数据请求时 拦截器
      duration: {
        tenMin() {
          return 60*1000*10
        }
      }
    }
  }
  export default config
  
	
  // function
  自定义一个函数返回存储时间
  //例子
  this.$post('/static/json/axios.json', {}, m => {return 60*1000*10}).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })
</pre>
	</div>
</template>

<script>
</script>

<style>
</style>
