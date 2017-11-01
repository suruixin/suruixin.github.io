console.log($.fn.jquery)
//数字转货币
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
    cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num + '.' + cents);
}
//数字转货币end



var num_all = 0,//总目标
	num_spurt = 0,//冲刺目标
	num_acc = 0,//完成值
	arr_ground = [],//项目组\姓名
	arr_rate = [];//完成率
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


//倒计时
var days	= 24*60*60,
	hours	= 60*60,
	minutes	= 60;
$.fn.countdown = function(prop){
	var options = $.extend({
		callback	: function(){},
		timestamp	: 0
	},prop);
	
	console.log(options)
	var left, d, h, m, s, positions;
	init(this, options);
	positions = this.find('.position');
	(function tick(){
		left = Math.floor((options.timestamp - (new Date())) / 1000);
		
		if(left < 0){
			left = 0;
		}
		d = Math.floor(left / days);
		updateDuo(0, 1, d);
		left -= d*days;
		h = Math.floor(left / hours);
		updateDuo(2, 3, h);
		left -= h*hours;
		m = Math.floor(left / minutes);
		updateDuo(4, 5, m);
		left -= m*minutes;
		s = left;
		updateDuo(6, 7, s);
		options.callback(d, h, m, s);
		setTimeout(tick, 1000);
	})();
	
	function updateDuo(minor,major,value){
		switchDigit(positions.eq(minor),Math.floor(value/10)%10);
		switchDigit(positions.eq(major),value%10);
	}
	
	return this;
};
function init(elem, options){
	console.log(elem)
	elem.addClass('countdownHolder');
	$.each(['Days','Hours','Minutes','Seconds'],function(i,_e){
		var times = "";
		switch(_e){
			case 'Days':
				times = '天';
			break;
			case 'Hours':
				times = '时';
			break;
			case 'Minutes':
				times = '分';
			break;
			case 'Seconds':
				times = '秒';
			break;
		}
		$('<span class="count'+this+' count">').html(
			'<span class="position">'+
				'<span class="digit static">0</span>'+
			'</span>'+
			'<span class="position">'+
				'<span class="digit static">0</span>'+
			'</span>'+
			'<span class="counttime">'+times+'</span>'
		).appendTo(elem);
		
		
	});
}
function switchDigit(position,number){
	
	var digit = position.find('.digit')
	
	if(digit.is(':animated')){
		return false;
	}
	
	if(position.data('digit') == number){
		return false;
	}
	
	position.data('digit', number);
	
	var replacement = $('<span>',{
		'class':'digit',
		css:{
			top:'-2.1em',
			opacity:0
		},
		html:number
	});
	digit.before(replacement).removeClass('static').animate({top:'50px',opacity:0},'fast',function(){
			digit.remove();
		})

	replacement.delay(100).animate({top:0,opacity:1},'fast',function(){
			replacement.addClass('static');
		});
}


//完成度
function achieve(ach){
	var _a = $('<div>').addClass('achieve-content').appendTo(ach.parent);
	var _b = $('<ul>').addClass('achieve-data').appendTo(ach.parent);
	achieve_data({'keys':ach.keys,parent:_b});
	achieve_update(_a,_b)
}
function achieve_data(obj){
	var html = '';
	$.each(obj.keys,function(i,e){
		html += '<li  data-contrase = "'+e.contrase+'"><span>'+e.name+'</span><span class="achieve-num">500000</span></li>'
	})
	obj.parent.html(html);
}
function achieve_update(_a,_b){
	var bl = (_b.children('[data-contrase=1]').find('.achieve-num').text()*1)/(_b.children('[data-contrase=2]').find('.achieve-num').text()*1);
	_b.children().each(function(){
		$(this).find('.achieve-num').text(formatCurrency($(this).find('.achieve-num').text()))
	})
	var bls = 250-bl*300< -100?-100:(250-bl*300)
	_a.html(Math.floor(bl*100)+'%').animate({'background-position-y':bls},300);
	console.log(_b.find('.achieve-num').countUp())
}


//战报
$('.activity-content-right label span').text(formatCurrency($('.activity-content-right label span').text()));
$('.activity-content-right label span').countUp();


//详细数据
$('.activity-content-table')
function table(tab){
	var html = '<div class="activity-table-title">'+tab.head+'</div><div class="activity-table-box"><div class="activity-table-head"><table><thead><tr>';
	arr_ground = [];
	$.each(tab.titlename,function(i,e){
		html += '<th>'+e+'</th>'
	})
	html += '</tr></thead></table></div><div class="activity-table-body"><table><tbody>';
	$.each(tab.data,function(i,e){
		html += '<tr>'
			$.each(e,function(n,x){
				html += '<td>'+x+'</td>'
			})
		html += '</tr>'
	})
	html += '</tbody></table></div>'
	$(tab.parent).html(html);
	table_time()
}

function table_time(){
	var set_time = setInterval(a,10000);
	function a(){
		$('.activity-table-body tr').each(function(){
			if(!$(this).is(':hidden')){
				if($(this).offset().top-$(this).parent().offset().top+$(this).outerHeight()<$(this).closest('.activity-table-body').height()){
					$(this).animate({'margin-top':100,opacity:0},600,function(){
						$(this).css({opacity:1}).hide();
						if($(this).index()==$(this).siblings().length){
							$('.activity-table-body tr').show();
						}
					})
				}
			}
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



//shade
$('.shade-bottom').on('click',function(){
	$('.shade').hide(600);
})
function shadeoff(){
	setTimeout(function(){$('.shade-bottom').click()},5000)
}
