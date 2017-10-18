//组件
Vue.component('banner',{
	template:'<div v-on:wheel="wheel" @mousemove="hover" class="banner">'
	+'<ul></ul>'
	+'<ul></ul>'
	+'<ul></ul>'
	+'</div>',
	created:function(){//生成前
	},
	mounted:function(){//生成后
		$(this.$el).height($(this.$el).parent().height()*3);
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
			var x = 
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
		$(this.$el).scroll(function(){
			var y = $(this).scrollTop();
			$(this).children().children().each(function(){
				if($(this).offset().top + $(this).css('margin-bottom').split('p')[0]<10){
					$(that.$el).css({'backgroundImage':'url("images/'+($(this).index()+1)+'.jpg")'});
				}
			})
		})
	}
})
