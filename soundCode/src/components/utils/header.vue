<template>
	<div id="headerWrapper">
		<div class="button" v-if="show" @click="show = !show,phoneFlag = true">
			<i class="iconfont-personal icon-personal-caidan"></i>
		</div>
		<transition v-on:before-enter="beforeEnter" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave" v-on:leave="leave">
			<ul class="headerCon" v-if="!show" @click="show =!show">
				<li class="close" v-if="phoneFlag"><i class="icon-personal-guanbi iconfont-personal" @click="phoneFlag = false"></i></li>
				<li @click.stop="itemTitle" v-for="(item,index) in title" :index="index" :key="index" class="headerItem" :class="{active:index == active}" @mouseenter="headerHover(index,'enter')" @mouseleave="headerHover(index,'leave')">
					{{item}}
				</li>
				<li ref="hoverDom" class="borderHover"></li>
			</ul>
		</transition>
		<!--<router-link to="/article/install">新增</router-link>-->
	</div>
</template>

<script>
	export default({
		data() {
			return {
				title: ['标题1', '标题1', '标题1', '标题1'],
				active: 0,
				show: false,
				phoneFlag: false
			}
		},
		methods: {
			headerHover(el, type) {
				if(document.body.clientWidth < 900){
					return
				}
				if(type == 'enter') {
					this.$refs.hoverDom.style = `margin-left:${el*200}px`;
				} else if(type == "leave") {
					this.$refs.hoverDom.style = `margin-left:${this.active*200}px`;
				}
			},
			listen() {
				var client = () => {
					if(document.body.clientWidth < 900) {
						this.show = true;
					} else {
						this.show = false;
						this.phoneFlag = false
					}
				};
				client();
				document.getElementsByTagName('body')[0].onresize = () => {
					client()
				}
			},
			beforeEnter(el) {
				el.style.opacity = 0;
				el.style.top = '-100%';
				var dom = el.children;
				for(var i = 0; i < dom.length; i++) {
					dom[i].style.transitionDelay = i * 0.1 + 's';
					dom[i].style.transform = 'scaleY(.2)';
				}
			},
			afterEnter(el) {
				el.style.opacity = 1;
				el.style.top = 0;
				var dom = el.children;
				for(var i = 0; i < dom.length; i++) {
					dom[i].style.transform = 'scaleY(1)';
				}
			},
			beforeLeave(el) {
				var dom = el.children;
				el.style.transitionDelay = '.3s';
				for(var i = 0; i < dom.length; i++) {
					if(dom[i].className == "close"){
						dom[i].children[0].style.transform = "rotate(-90deg)"
					}else{
						dom[i].style.transform = 'scaleY(.2)';
					}
				}
				el.style.opacity = 1;
				el.style.top = '2%';
			},
			leave(el) {
				el.style.opacity = 0.5;
				el.style.top = '-50%';
			},
			itemTitle() {

			}
		},
		created() {
			this.listen()
		}
	})
</script>

<style scoped lang=less>
	@media screen and (min-width: 900px) {
		#headerWrapper {
			background: #fff;
			box-shadow: 0 4px 11px -5px rgba(0, 0, 0, 0.4);
			position: fixed;
			height: 50px;
			top: 0;
			left: 0;
			text-align: center;
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
					background: #C69F73;
					opacity: .2;
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
			background: #000;
			position: fixed;
			height: 45px;
			top: 0;
			left: 0;
			.button {
				height: 45px;
				line-height: 45px;
				text-align: right;
				color: #fff;
				padding-right: 15px;
			}
			.headerCon {
				position: fixed;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background: rgba(0, 0, 0, .8);
				transition: all .3s;
				display: flex;
				flex-direction: column;
				.close {
					height: 45px;
					line-height: 45px;
					i {
						float: right;
						width: 45px;
						height:100%;
						text-align:center;
						color:#fff;
						transition: all .3s;
					}
				}
				.headerItem {
					line-height: 60px;
					height: 60px;
					padding: 0 15px;
					transition: all .6s;
					background: rgba(255, 255, 255, .1);
					color:#eee;
					font-weight: 200;
				}
			}
		}
	}
	
	#headerWrapper {
		width: 100%;
		color: #666;
		.headerCon {
			.active {
				color: #C69F73;
			}
		}
	}
</style>