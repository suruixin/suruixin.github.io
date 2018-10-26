<template>
	<div class="templates">
		<ul class="tempTab">
			<li class="tempTabItem" v-if="tab" v-for="(item,index) in tab"><span class="ed">{{item.name}}</span></li>
		</ul>
		<div class="tempConWrapper">
			<ul class="tempCon">
				<li class="tempConItem" v-if="content" v-for="(item,index) in content"><span class="ed">{{item.name}}</span></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default({
	name: 'templates',
	props: {
		tab: Array,
		content: Array
	}
})
</script>
<style scoped lang="less">
	.templates{
		height: 100%;
		display: flex;
		.tempTab{
			width: 260px;
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			.tempTabItem{
				font-size: 14px;
				line-height: 40px;
				color: #666;
				font-weight: 600;
				cursor: pointer;
				span.ed{
					padding-left: 45px;
					display: inline-block;
					height: 40px;
					width: 100%;
					transition: color .2s;
					&:hover{
						color: #EDE09D;
					}
				}
			}
		}
		.tempCon{
			height: 100%;
		}
	}
</style>