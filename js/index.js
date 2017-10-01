//组件
Vue.component('banner',{
	template:'<div v-on:wheel="wheel"></div><div class="shade"><div></div></div>',
	created:function(){//生成前
	},
	mounted:function(){//生成后
		$(this.$el).height($(this.$el).parent().height()*3)
	},
	methods:{
		wheel:function(e){
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
		}
	}
})
//组件end

var vue = new Vue({
	el:'#home',
	data:{
		name:'aaa'
	},
	created:function(i,e){
		$('#home').height($(document).height());
	}
})
