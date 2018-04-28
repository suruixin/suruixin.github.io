<template>
	<div id="headerWrapper">
		<ul class="headerCon">
			<li v-for="(item,index) in title" :key="index" class="headerItem" :class="{active:index == active}" @mouseenter="headerHover(index,'enter')" @mouseleave="headerHover(index,'leave')">
				{{item}}
			</li>
			<li ref="hoverDom" class="borderHover"></li>
		</ul>
		<!--<router-link to="/article/install">新增</router-link>-->
	</div>
</template>

<script>
	export default({
		data() {
			return {
				title: ['标题1', '标题1', '标题1', '标题1'],
				active: 0
			}
		},
		methods: {
			headerHover(el, type) {
				if(type == 'enter') {
					this.$refs.hoverDom.style = `margin-left:${el*200}px`;
				} else if(type == "leave") {
					this.$refs.hoverDom.style = `margin-left:${this.active*200}px`;
				}
			}
		}
	})
</script>

<style scoped lang=less>
	@media screen and (min-width: 900px) {
		#headerWrapper {
			background: #fff;
			box-shadow: 0 4px 11px -5px rgba(0, 0, 0, 0.4);
			position: fixed;
			top: 0;
			left: 0;
			.headerCon {
				display: inline-block;
				height: 100%;
				width: 0 auto;
				position: relative;
				.headerItem {
					display: inline-block;
					width: 200px;
					text-align: center;
					height: 100%;
					line-height: 50px;
					color: #494949;
					font-weight: 500;
					transition: all .4s;
					&:hover {
						color: #C69F73
					}
				}
				.borderHover {
					position: absolute;
					width: 200px;
					height: 2px;
					background: #ccc;
					bottom: 0;
					left: 0;
					border-radius: 2px 2px 0 0;
					transition: margin .3s;
				}
			}
		}
	}
	
	@media screen and (max-width: 900px) {
		#headerWrapper {
			background: #f2f2f2;
		}
	}
	
	#headerWrapper {
		width: 100%;
		height: 50px;
		.headerCon {
			.active {
				color: #C69F73;
			}
		}
	}
</style>