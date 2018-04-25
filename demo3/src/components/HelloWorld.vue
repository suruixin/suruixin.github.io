<template>
	<ul id="ballDown">
		<li class="ballIten" v-for="(item,index) in ball" :key="index">
			<transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
				<div class="ball" :index="index" v-show="item.flag">
					<div class="inner">{{item.text}}</div>
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
			engine:{
				type:Number
			},
			left:{
				type:Number,
				default: 0
			},
			bottom:{
				type:Number,
				default: 0
			}
		},
		watch:{
			engine(){
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
				console.log(el)
				var _i = el.getAttribute('index');
				el.style.display = 'block';
				var inner = el.getElementsByClassName('inner')[0];
				inner.style.transform = "translateX(" + this.right + "px)";
				el.style.transform = "translateY(" + this.top + "px)";
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
		}
	}
</style>