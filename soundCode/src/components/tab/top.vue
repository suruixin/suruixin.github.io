<template>
  <ul id="top">
  	<router-link to="/" tag="li" class="tabItem hoverColor">首页</router-link>
  	<li class="tabItem tabHover">
  		<span class="hoverColor">文档</span>
  		<ul class="document">
  			<router-link to="/document/axios" tag="li" class="hoverColor">axios</router-link>
  		</ul>
  	</li>
  </ul>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style scoped lang="less">
	#top{
		width: 100%;
		display: flex;
		justify-content: center;
		.tabItem{
			font-size: 20px;
			position: relative;
		}
		.hoverColor{
			margin: 0 10px;
			padding: 0 10px;
			cursor: pointer;
			line-height: 40px;
			display: inline-block;
			transition: all .3s;
			border-bottom: 2px solid transparent;
			&:hover{
				color: #EDE09D;
				border-color: #EDE09D;
			}
		}
		.document{
			position: absolute;
			line-height: 30px;
			display: none;
		}
		.tabHover{
			&:hover .document{
				display: inline-block;
			}
		}
	}
</style>
