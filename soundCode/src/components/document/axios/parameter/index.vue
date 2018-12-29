<template>
<div ref="parameter" class="parameter">
  <p class="desc">参数介绍</p>
  <ul class="tempConItem" ref="tempConItem">
    <li>
      <router-link to="/document/axios/parameter/url" class="tem-title" tag="p">url</router-link>
      <div class="tem-pl">
        <p class="desc">类型：String</p>
        <p class="desc">必填，请求地址</p>
      </div>
    </li>
    <li>
      <router-link to="/document/axios/parameter/prams" class="tem-title" tag="p">prams</router-link>
      <div class="tem-pl">
        <p class="desc">类型：Object</p>
        <p class="desc">选填，参数</p>
      </div>
    </li>
    <li>
      <router-link to="/document/axios/parameter/duration" class="tem-title" tag="p">duration</router-link>
      <div class="tem-pl">
        <p class="desc">类型：Number|Boolean|String|function</p>
        <p class="desc">选填，本地存储时间</p>
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
    </li>
  </ul>
</div>

</template>
<script>
</script>
<style>
  .tem-title{
    font-size: 21px;
    color: #333;
    font-weight: 600;
    line-height: 42px;
      cursor: pointer;
  }
</style>
<style scoped>
	.parameter{
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>