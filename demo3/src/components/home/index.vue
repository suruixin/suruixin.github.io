<template>
	<div id="engine">
		<transition>
			<ul class="engineTab">
				<li>
					<div>
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
					</div>
				</li>
			</ul>
		</transition>
		<ul class="engineContent">
			
		</ul>
	</div>
</template>

<script>
	export default({
		data(){
			return {
				
			}
		}
	})
</script>

<style lang=less scoped>
#engine{
	.engineTab{
		width:200px;
		height:auto;
		display:flex;
		div{
			display:flex;
			width:200px;
			justify-content:space-between;
			flex-wrap:wrap;
			align-content:space-around;
			span{
				width:80px;
				height:30px;
				display:block;
				background:red;
				text-align:center;
				line-height:30px;
			}
		}
	}
}
</style>