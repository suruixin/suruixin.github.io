console.log($.fn.jquery)

var roll = function(roll){
	this.data = roll.data;
	this.classname = roll.classname||'';
	this.parents = roll.parents;
	this.btn = roll.btn?roll.btn:false;
	this.settime = roll.settime || 12000;
	this.click = roll.click;
	this.animatetime = roll.animatetime||300
}

roll.prototype = {
	engine: function(){
		this.create();
		this.slide();
	}
	,create: function(){
		var html = '';
		if(this.btn)html += '<div class="roll-prev"><i class="icon">←</i></div>'
		html += '<div class="pull-box"><ul>';
		$.each(this.data,function(i,e){
			html += '<li>'+e.name+'</li>';
		})
		html += '</ul></div>';
		if(this.btn)html += '<div class="roll-next"><i class="icon">←</i></div>'
		$('<div>').addClass('roll_title '+this.classname).html(html).appendTo(this.parents);
		var num = 0;
		var $t = $('.'+this.classname)
		$t.find('.pull-box li').each(function(){
			num += $(this).outerWidth();
		}).parent().width(num);
	}
	,slide: function(){
		var that =this;var $t = $('.'+this.classname)
		if($t.find('.pull-box').outerWidth() < $t.find('.pull-box>ul').outerWidth()){
			//时间函数
			function time(){
				$t.find('.pull-box>ul').animate({'margin-left': -$t.find('.pull-box>ul').children('li').eq(0).outerWidth()},that.animatetime,function(){
					$t.find('.pull-box>ul').children('li').eq(0).insertAfter($t.find('.pull-box>ul').children('li').eq($t.find('.pull-box>ul').children('li').length-1)).parent().css('margin-left',0)
					if(that.btn)that.click.call(this.childNodes[0])
				})
			}
			var sets = setInterval(time,this.settime);
			if(!that.btn)time()
			$t.hover(function(){
				clearInterval(sets);
			},function(e){
				if(!that.btn)time()
				sets = setInterval(time,that.settime);
			})
			//点击事件
			$t.find('.roll-next').on('click',function(){//右
				time()
			})
			$t.find('.roll-prev').on('click',function(){//左
				var _t = $t.find('.pull-box>ul');
				_t.children('li').eq(_t.children('li').length-1).insertBefore(_t.children('li').eq(0)).parent().css({'margin-left': -$t.find('.pull-box>ul').children('li').eq(0).outerWidth()}).animate({'margin-left': 0},that.animatetime,function(){
					that.click.call(this.childNodes[0])
				})
			})
		}
		$t.find('.pull-box>ul li').on('click',function(){
			that.click.call(this)
		})
	}
}



	
$('button').on('click',function(){
//	var arr = [];
//	$('.title2 tr').each(function(){
//		arr.push()
//	})
//	var max = Math.max.apply(Math,arr);
	console.log($('.title2 tr').eq(3).offset().top)
	var _t = $('.title2 tr').eq(1).offset().top - $('.title2 tr').parent().offset().top;
	$('.title2 tr').eq(1).css({'position':'absolute',top:_t,transform:'scale(1.2)'}).animate({top:0},600,function(){
		$(this).css({'position':'relative',transform:'scale(1)'}).insertBefore($('.title2 tr').eq(0))
	})
})
