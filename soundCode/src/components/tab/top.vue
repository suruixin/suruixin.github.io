<template>
  <ul id="top">
  	<router-link to="/" tag="li" class="tabItem hoverColor">首页</router-link>
  	<li class="tabItem tabHover">
  		<span class="hoverColor">文档<i class="icon-srx icon-down"></i></span>
  		<ul class="document">
  			<router-link to="/document/axios" tag="li" class="hoverColor ">axios</router-link>
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
		border-bottom: 1px solid #e1e1e1;
		height: 60px;
		.tabItem{
			font-size: 20px;
			position: relative;
			&:hover .icon-down {
				transform: rotate(180deg);
			}
			.icon-down {
				transform: rotate(0);
			    display: inline-block;
			    height: 20px;
			    width: 20px;
			    line-height: 20px;
			    text-align: center;
			    vertical-align: middle;
			    transition: transform .3s;
			}
		}
		.hoverColor{
			margin: 0 10px;
			padding: 0 10px;
			cursor: pointer;
			line-height: 60px;
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
			border: 1px solid #e1e1e1;
			background: #fff;
			padding: 5px 0;
			border-radius: 5px;
			.hoverColor{
				line-height: 30px;
			}
		}
		.tabHover{
			&:hover .document{
				display: inline-block;
			}
		}
	}
</style>
