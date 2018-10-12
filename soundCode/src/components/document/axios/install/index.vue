<template>

<div class="tempConItem">
	<p class="desc">
		<a href="https://github.com/suruixin/srxComponents/archive/master.zip">下载</a>后将<span class="zd">utils</span>文件夹内的文件拷贝在自己的自定义插件目录下	
	</p>
	<p class="desc">示例:</p>
		<pre class="bash hljs">
		<code class="bash">
		.
		└── src
		├── assets
		│   └── utils	// 本插件推荐存放位置，后续文件也将放在此目录下
		│       ├── axios
		│       ├── config.js
		│       └── index.js
		├── components
		├── router
		├── App.vue
		└── main.js
		</code>
		</pre>
	<p class="desc">下载完毕后，按以下步骤安装好插件。对Vue使用插件不了解的可以查看 <a href="https://cn.vuejs.org/v2/guide/plugins.html#使用插件" target="view_window">官方文档</a></p>
	<pre class="bash hljs">
	<code class="bash">
	// mian.js
	import Vue from 'vue'
	import App from './App'
	import router from './router'
	import utils from '@/assets/utils' // 引入utils下的index.js

	Vue.config.productionTip = false
	Vue.use(utils) // 使用插件
	</code>
	</pre>
</div>
</template>
<script>
	
</script>
<style>
	
</style>