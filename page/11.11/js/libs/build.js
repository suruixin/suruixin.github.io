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
	arr_mean = 0,//应完成目标总额
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
		var that =this;var $t = $('.'+this.classname);
		if($t.find('.pull-box').outerWidth() < $t.find('.pull-box>ul').outerWidth()){
			//时间函数
			function time(){
				$t.find('.pull-box>ul').animate({'margin-left': -$t.find('.pull-box>ul').children('li').eq(0).outerWidth()},that.animatetime,function(){
					$t.find('.pull-box>ul').children('li').eq(0).insertAfter($t.find('.pull-box>ul').children('li').eq($t.find('.pull-box>ul').children('li').length-1)).parent().css('margin-left',0)
					if(that.btn){
						that.click.call(this.childNodes[0]);
						monitor()
					}
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
					that.click.call(this.childNodes[0]);
					monitor();
				})
			})
		}
		$t.find('.pull-box>ul li').on('click',function(){
			that.click.call(this);
			monitor();
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
	achieve_update(_a,_b);
}
function achieve_data(obj){
	var html = '';
	$.each(obj.keys,function(i,e){
		html += '<li  data-contrase = "'+e.contrase+'" data-type="'+e.type+'"><span>'+e.name+'</span><span class="achieve-num" data-text="500000">500000</span></li>';
	})
	obj.parent.html(html);
}
function achieve_update(_a,_b){
	var bl = (_b.children('[data-contrase=1]').find('.achieve-num').data('text')*1)/(_b.children('[data-contrase=2]').find('.achieve-num').data('text')*1);
	_b.children().each(function(){
		$(this).find('.achieve-num').text(formatCurrency($(this).find('.achieve-num').text()))
	})
	var bls = 250-bl*300< -100?-100:(250-bl*300)
	_a.html(Math.floor(bl*100)+'%').animate({'background-position-y':bls},300);
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
		console.log(i,e)
		html += '<th data-type="'+e.type+'">'+e.name+'</th>'
	})
	html += '</tr></thead></table></div><div class="activity-table-body"><table><tbody>';
	$.each(tab.data,function(i,e){
		html += '<tr>';
		$.each(e,function(n,x){
			html += '<td>'+x+'</td>';
		})
		html += '</tr>'
	})
	html += '</tbody></table></div>'
	$(tab.parent).html(html);
	table_time();
}
var settime ='';
function table_time(){
	if($('.activity-table-body').children().height()>$('.activity-table-body').height()){
		settime = setInterval(a,10000);
		$('.activity-table-box').hover(function(){
			clearInterval(settime);
		},function(){
			settime = setInterval(a,10000);
		})
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
	}else{
		clearInterval(settime);
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




//关闭事件
function shadeoff(){//遮罩5秒后自动关闭事件
	setTimeout(function(){$('.shade-bottom').click()},5000)
}



function monitor(){//监听事件
	num_all = 0,//总目标
	num_spurt = 0,//冲刺目标
	num_acc = 0,//完成值
	arr_mean = 0,//应完成业绩
	arr_ground = [],//项目组\姓名
	arr_rate = [];//完成率
	//完成百分比左
	//更新数值
	$('.activity-table-body tr').each(function(i,e){
		if(i<3){
			arr_ground.push($(this).children().eq($('.activity-table-head th[data-type="group"]').index()).text());
			arr_rate.push($(this).children().eq($(this).children().length-1).text())
		}
		num_all += $(e).children('td').eq($('.activity-table-head th[data-type="all"]').index()).text()*1;
		num_spurt += $(e).children('td').eq($('.activity-table-head th[data-type="sprint"]').index()).text()*1;
		num_acc += $(e).children('td').eq($('.activity-table-head th[data-type="done"]').index()).text()*1;
	})
	arr_mean = num_all/mean_time*(mean_time - $('.countDays .position').text()*1);
	if(arr_mean<0)arr_mean = 0;
	$('.achieve-data li[data-type="done"]').children('.achieve-num').text();
	$('.achieve-data li[data-type="all"]').children('.achieve-num').text(formatCurrency(num_all)).data({'text':num_all,counterupTo:formatCurrency(num_all)});
	$('.achieve-data li[data-type="sprint"]').children('.achieve-num').text(formatCurrency(num_spurt)).data({'text':num_spurt,counterupTo:formatCurrency(num_spurt)});
	$('.achieve-data li[data-type="done"]').children('.achieve-num').text(formatCurrency(num_acc)).data({'text':num_acc,counterupTo:formatCurrency(num_acc)});
	$('.achieve-data li[data-type="mean"]').children('.achieve-num').text(formatCurrency(arr_mean)).data({'text':arr_mean,counterupTo:formatCurrency(arr_mean)});
	$('.achieve-data li').children('.achieve-num').countUp();
	//更新数值end
	achieve_update($('.achieve-content'),$('.achieve-data'));//更新百分比
	//完成百分比左 end
	//趋势实时销售战报
	$('.activity-content-right label span').text(formatCurrency(num_acc)).data({'text':num_acc,counterupTo:formatCurrency(num_acc)}).countUp();
	//趋势实时销售战报end
	//前三甲
	$('.activity-content-ranking').children().each(function(){
		$(this).find('span').eq(0).text(arr_ground[$(this).data('no')*1-1]);
		$(this).find('span').eq(1).text(arr_rate[$(this).data('no')*1-1]);
	})
	//前三件end
}


//数据加载
function redraw(){
	var datas = [{num:1,name:'nn',num1:50000,num3:8000,num4:'0'},{num:2,name:'nn',num1:50000,num3:8000,num4:'0'},{num:3,name:'srx',num1:50000,num3:8000,num4:'0'},{num:4,name:'四月',num1:50000,num3:8000,num4:'0'},{num:5,name:'穷穷',num1:50000,num3:8000,num4:'0'}];
	$('.activity-content-table').children().remove();
	table({data:datas,parent:'.activity-content-table',head:'业绩排行榜',titlename:[{name:'排行榜',type:'ranking'},{name:'姓名',type:'group'},{name:'总目标',type:'all'},{name:'已完成业绩',type:'done'},{name:'完成率',type:'ful'}]})
}




$('.activity-title-left').on('click',function(){
//	redraw();
//	monitor();
})
