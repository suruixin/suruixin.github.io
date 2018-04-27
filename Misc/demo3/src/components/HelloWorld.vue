<template>
	<ul id="ballDown" :class="styleClass">
		<li class="ballIten" v-for="(item,index) in ball" :key="index">
			<transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
				<div class="ball" :index="index" v-show="item.flag">
					<div class="inner" v-html="html"></div>
				</div>
			</transition>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				ball: [],
				num: 0
			}
		},
		props:{
			/**
			 * 
			 * 用于监听小球的点击事件   不可为空
			 * {type:Number}
			 *
			 */
			engine:{ 
				type:Number
			},
			/**
			 * 
			 * 小球距离弹出位置的left和bottom值
			 * {type:Number}
			 *
			 */
			left:{
				type:Number,
				default: 0
			},
			bottom:{
				type:Number,
				default: 0
			},
			/**
			 * 
			 * 新增class用于调整小球的相关属性
			 * {type:String}
			 *
			 */
			styleClass:{
				type:String,
				default: ''
			},
			/**
			 * 
			 * 小球中的html内容
			 * {type:String}
			 *
			 */
			html:{
				type:String,
				default: ''
			}
		},
		watch:{
			engine(){ //用于监听点击  便于小球进行动画   
				this.ballfun()
			}
		},
		methods: {
			ballfun() {  //触发小球掉落事件
				if(this.num >= 5) {
					this.num = 0;
				}
				this.ball[this.num].flag = true
				this.num++;
			},
			balls() { //创建小球
				this.ball = [];
				for(var i = 0; i < 5; i++) {
					this.ball.push({
						flag: false,
						text: i
					})
				}
			},
			beforeEnter(el) {
				var _i = el.getAttribute('index');
				el.style.display = 'block';
				var inner = el.getElementsByClassName('inner')[0];
				inner.style.transform = "translateX(" + this.bottom + "px)";
				el.style.transform = "translateY(" + this.left + "px)";
			},
			enter(el, done) {
				var _i = el.getAttribute('index');
				var rf = el.offsetHeight;
				this.$nextTick(function() {
					var inner = el.getElementsByClassName('inner')[0];
					inner.style.transform = "translateX(0)"
					el.style.transform = "translateY(0)"
				});
				this.ball[_i].flag = false;
			},
			afterEnter(el) {
				var _i = el.getAttribute('index');
				this.$nextTick(function() {
					this.ball[_i].flag = false;
				});
			},
		},
		created() {
			this.balls();
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=less>
	.h(@h: 100%) {
		height: @h;
	}
	
	.w(@w: 100%) {
		width: @w;
	}
	
	#ballDown {
		position: fixed;
		.w(22px);
		.h(22px);
		bottom:15px;
		left: 0;
		li{
			position:absolute;
			.w();
			.h();
			list-style:none;
			.ball{
				.w();
				.h();
				transition: all .6s cubic-bezier(.35,-0.28,.73,.3);
			}
			.inner{
				border-radius: 50%;
				transition: all .6s linear;
				background:red
			}
		}
	}
</style>