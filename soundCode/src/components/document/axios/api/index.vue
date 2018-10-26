<template>
<div>
  <p class="desc">详细的参数数据会在<router-link class="tem-a" to='/document/axios/parameter/parameter'>参数</router-link>中进行详细的介绍</p>
  <ul class="tempConItem" ref="tempConItem">
    <li>
      <router-link to="/document/axios/api/get" class="tem-title" tag="p">get</router-link>
      <div class="tem-pl">
<pre class="bash hljs">
  <span>//格式</span>
  this.$get(url[,prams,duration])
</pre>
        <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/url'>url</router-link><span>类型: String</span></p>
        <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/prams'>prams</router-link><span>类型: Object</span></p>
        <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/duration'>duration</router-link><span>类型: Number|Boolean|String|function</span></p>
        <p class="desc">
          例子：
<pre class="bash hljs">
  <span>//例子</span>
  this.$get('/static/json/axios.json', {name: 'siyue'}).then(res => {
    console.log(res)
  })

  <span>//升级版 使用本地缓存</span>
  this.$get('/static/json/axios.json', {}, true).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })

  this.$get('/static/json/axios.json', {}, 10).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })

  this.$get('/static/json/axios.json', {}, m => {return 60*1000*10}).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })

  this.$get('/static/json/axios.json', {}, 'tenMin').then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })
  //config.js
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
</pre>
        </p>
      </div>
    </li>
    <li>
      <router-link to="/document/axios/api/post" class="tem-title" tag="p">post</router-link>
    <div class="tem-pl">
<pre class="bash hljs">
    <span>//格式</span>
    this.$post(url[,prams,duration])
</pre>
      <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/url'>url</router-link><span>类型: String</span></p>
      <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/prams'>prams</router-link><span>类型: Object</span></p>
      <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/duration'>duration</router-link><span>类型: Number|Boolean|String|function</span></p>
      <p class="desc">
        例子：
<pre class="bash hljs">
  <span>//例子</span>
  this.$post('/static/json/axios.json', {name: 'siyue'}).then(res => {
    console.log(res)
  })

  <span>//升级版 使用本地缓存</span>
  this.$post('/static/json/axios.json', {}, true).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })

  this.$post('/static/json/axios.json', {}, 10).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })

  this.$post('/static/json/axios.json', {}, m => {return 60*1000*10}).then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })

  this.$post('/static/json/axios.json', {}, 'tenMin').then(res => {
    console.log(res) // 十分钟内将在本地读取数据，超过十分钟进行新的数据请求并替换继续保存十分钟
  })
  //config.js
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
</pre>
        </p>
      </div>
    </li>
    <li>
      <router-link to="/document/axios/api/axios" class="tem-title" tag="p">axios</router-link>
      <div class="tem-pl">
<pre class="bash hljs">
  <span>//格式</span>
  this.$axios
</pre>
      <p class="desc">这是对axios的一个输出，方便对axios进行配置，详细信息查看<a class="tem-a" href="https://github.com/axios/axios">官网</a>，不做介绍</p>
      </div>
    </li>
    <li>
      <router-link to="/document/axios/api/sync" class="tem-title" tag="p">sync</router-link>
      <div class="tem-pl">
<pre class="bash hljs">
  <span>//格式</span>
  this.$sync(url)
</pre>
        <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/url'>url</router-link><span>类型: Array</span></p>
          例子：
<pre class="bash hljs">
  <span>//例子</span>
  var prom = new Promise((resolve, reject) => {setTimout(m => {resolve({"data": "ok"})
  this.$sync([
  this.get('/user',{name: 'siyue'}),
  this.post('/user',{name: 'siyue'}),
  this.$axios.get('/user',{name: 'siyue'}),
  new Promise((resolve, reject) => {setTimout(m => {resolve({"data": "ok"})}, 3000)}),
  prom]).then(res => {
    console.log(res) // res输出一个数组
  })
</pre>
        </p>
      </div>
      <p class="desc">主要运用了es9的async和await属性进行制作，实现数据的同步获取，及方法1执行完毕后，执行方法2，以此类推，使用场景：</p>
      <p class="desc">&nbsp;&nbsp;1 某请求地址需要先从别的地址获取到的参数，然后进行数据请求</p>
      <p class="desc">&nbsp;&nbsp;2 请求较多导致页面加载缓慢，可以将一部分允许靠后加载的数据延迟加载</p>
      <p class="desc">&nbsp;&nbsp;3 友好的滚动加载</p>
    </li>
    <li>
      <router-link to="/document/axios/api/delete" class="tem-title" tag="p">delete</router-link>
      <div class="tem-pl">
<pre class="bash hljs">
  <span>//格式</span>
  this.$delete(url[,params])
</pre>
      <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/url'>url</router-link><span>类型: String</span></p>
      <p class="desc"><router-link class="tem-a" to='/document/axios/parameter/params'>params</router-link><span>类型: Object</span></p>
      <p class="desc">使用方法同get,post请求，不做过多介绍（ps:本地存储不需要，你懂的）</p>
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