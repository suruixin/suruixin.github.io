<template>
	<div id="engine">
		<transition>
			<ul class="engineTab">
				<li></li>

			</ul>
		</transition>
		<ul class="engineContent">
			<li class="conItem" v-for="(item,index) in data" :key="index" ></li>
		</ul>
	</div>
</template>

<script>
export default({
	data(){
		return {
			data:[
				{
					id:1,
					x:6,
					y:6,
					w:6,
					h:6
				},
				{
					id:2,
					x:0,
					y:0,
					w:6,
					h:6
				},
				{
					id:3,
					x:0,
					y:12,
					w:6,
					h:6
				}
			]
		}
	}
})
</script>

<style lang=less scoped>
#engine{
	display:flex;
	height:100%;
	width:100%;
	.engineTab{
		width:200px;
	}	
	.engineContent{
		flex: 1;
	}
}
</style>