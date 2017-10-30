//组件
Vue.component('banner',{
	template:'<div @wheel="wheel" class="banner">'
		+'<ul><a href="page/demo.html">demo</a></ul>'
		+'<div @mousemove="hover"></div>'
		+'<ul></ul>'
		+'<div @mousemove="hover"></div>'
		+'<ul></ul>'
	+'</div>',
	created:function(){//生成前
		console.log(this.$el)
	},
	mounted:function(){//生成后
		$(this.$el).children('ul').css({height:window.innerHeight});this.oy = 0; this.ox = 0;
	},
	methods:{
		wheel:function(e){
			$(this.$el).children().each(function(){
				
			})
			if(e.wheelDelta){
				var y = e.wheelDelta
			}else{
				var y = e.deltaY
			}
			switch(y){
				case 120:
				case -3:
					console.log('top')
				break;
				case -120:
				case 3:
				break
			}
		},
		hover:function(e){
			var nx = e.clientX, ny = e.clientY
			var x = $(this.$el).closest('#home').css('background-position-x').split('%')[0].split('p')[0]*1;
			var y = $(this.$el).closest('#home').css('background-position-y').split('%')[0];
			if(this.ox != 0&&nx > this.ox){
				console.log(this.ox,nx,x)
				$(this.$el).closest('#home').css('background-position-x',(x+0.2))
			}else if(this.ox != 0&&nx < this.ox){
				$(this.$el).closest('#home').css('background-position-x',(x-0.2))
			}
			this.ox = nx;
			this.oy = ny;
		}
	}
})
//组件end
var vue = new Vue({
	el:'#home',
	data:{
		name:'aaa',
		scroll:''
	},
	methods:{
		menu:function(){
			this.scroll = $('body').scrollTop();
        	console.log(this.scroll)
		}
	},
	created:function(i,e){
		console.log(this.$el)
	},
	mounted:function(){
		var that = this;
		$(document).scroll(function(){
			console.log($(this).scrollTop())
			var y = $(this).scrollTop();
			$('.banner').children('ul').each(function(i){
				if(y > $(this).height()+$(this).offset().top){
					$(this).parent('.banner').css({'background-image':'url("../images/'+(i+1)+'.jpg")'})
				}
			})
		})
	}
})
