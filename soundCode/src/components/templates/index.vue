<template>
	<div class="templates">
		<ul class="tempTab">
			<li class="tempTabItem" v-if="tab" v-for="(item,index) in tab">{{item}}</li>
		</ul>
		<ul class="tempCon">
			<li class="tempConItem" v-if="content" v-for="(item,index) in content">{{item}}</li>
		</ul>
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
			width: 200px;
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
		}
		.tempCon{
			flex: 1;
			height: 100%;			
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
</style>