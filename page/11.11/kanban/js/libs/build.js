console.log($.fn.jquery)
var $obj = {};
//数字转货币
function formatCurrency(num) {
    num = num.toString().replace(/\$|\,/g,'');
    if(isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    num = Math.floor(num/100).toString();
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
    num = num.substring(0,num.length-(4*i+3))+','+
    num.substring(num.length-(4*i+3));
    return (((sign)?'':'-') + num);
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
	this.settime = roll.settime || 2000;
	this.click = roll.click;
	this.animatetime = roll.animatetime||300;
	this.roll = roll.roll? roll.roll:'true';
	this.keys = roll.keys||'';
}

roll.prototype = {
	engine: function(){
		this.create();
		this.slide();
	}
	,create: function(){
		var html = '';
		var that= this;
		if(this.btn)html += '<div class="roll-prev"><i class="icon">←</i></div>'
		html += '<div class="pull-box"><ul>';
		$.each(this.data,function(i,e){
			if(that.keys!=''){
				var data_key = '';
				$.each(that.keys.split(','),function(n,x){
					data_key += ('data-'+x+'="'+e[x]+'" ')
				})
				html += '<li '+data_key+'>'+e.name+'</li>';
			}else{
				html += '<li>'+e.name+'</li>';
			}
		})
		html += '</ul></div>';
		if(this.btn)html += '<div class="roll-next"><i class="icon">←</i></div>'
		$('<div>').addClass('roll_title '+this.classname).html(html).appendTo(this.parents);
	}
	,slide: function(){
		var num = 0;
		var $t = $('.'+this.classname);
		$t.find('.pull-box li').each(function(){
			num += Math.ceil($(this).outerWidth())+$(this).css('margin-right').split('p')[0]*1+1;
		}).parent().width(num);
		var that =this;
		if($t.find('.pull-box').outerWidth() < $t.find('.pull-box>ul').outerWidth()){
			//时间函数
			function time(){
				var _s = $t.find('.pull-box>ul').children('.sign').index()||0;
				$t.find('.pull-box>ul').animate({'margin-left': -$t.find('.pull-box>ul').children('li').eq(0).outerWidth()},that.animatetime,function(){
					$t.find('.pull-box>ul').children('li').eq(0).insertAfter($t.find('.pull-box>ul').children('li').eq($t.find('.pull-box>ul').children('li').length-1)).parent().css('margin-left',0);
					if(that.btn){
						$('.sign').removeClass('sign');
						$t.find('.pull-box>ul').children('li').eq(_s).addClass('sign');
						that.click.call($t.find('.sign'));
						$('.acticity-img-no').removeClass('acticity-img').text($t.find('.sign').text());
					}
				})
			}
			if(that.roll == 'true'){
				var sets = setInterval(time,this.settime);
				if(!that.btn)time()
				$t.hover(function(){
					clearInterval(sets);
				},function(e){
					if(!that.btn)time()
					sets = setInterval(time,that.settime);
				})
			}
			if(that.btn){
				//点击事件
				$t.find('.roll-next').on('click',function(){//右
					time();
				})
				$t.find('.roll-prev').on('click',function(){//左
					var _t = $t.find('.pull-box>ul');
					var _s = $t.find('.pull-box>ul').children('.sign').index()||0;
					_t.children('li').eq(_t.children('li').length-1).insertBefore(_t.children('li').eq(0)).parent().css({'margin-left': -$t.find('.pull-box>ul').children('li').eq(0).outerWidth()}).animate({'margin-left': 0},that.animatetime,function(){
						$('.sign').removeClass('sign');
						$t.find('.pull-box>ul').children('li').eq(_s).addClass('sign');
						that.click.call($t.find('.pull-box .sign'));
						$('.acticity-img-no').removeClass('acticity-img').text($t.find('.sign').text());
					})
				})
			}
		}
		if(that.btn){
			
			$t.find('.pull-box>ul li').on('click',function(){
				$('.sign').removeClass('sign');
				$(this).addClass('sign');
				that.click.call(this);
				$('.acticity-img-no').removeClass('acticity-img').text($(this).text());
			})
		}
	}
}


//倒计时
var days	= 24*60*60,
	hours	= 60*60,
	minutes	= 60;
$.fn.countdown = function(prop){
	var options = $.extend({
		callback : function(){},
		timestamp : 0,
		back : function(){}
	},prop);
	var left, d, h, m, s, positions;
	init(this, options);
	positions = this.find('.position');
	(function tick(){
		left = Math.floor((options.timestamp - (new Date())) / 1000);
		if(left < 0){
			left = 0;
			options.back();
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
var old_bl = 0;
function achieve(ach){
	var _a = $('<div>').addClass('achieve-content').appendTo(ach.parent);
	var _b = $('<ul>').addClass('achieve-data').appendTo(ach.parent);
	achieve_data({'keys':ach.keys,parent:_b,_a : _a,data :ach.data,bl:ach.bl});
}
function achieve_data(obj){
	var html = '';
	$.each(obj.keys,function(i,e){
		html += '<li  data-contrase = "'+e.contrase+'" data-type="'+e.type+'"><span>'+e.name+'</span><span class="achieve-num" data-text="'+(obj.data[e.type]||0)+'">'+(obj.data[e.type]||0)+'</span></li>';
	})
	obj.parent.html(html);
	var bl = obj.data?obj.data[obj.bl]:'0%';
	var bls = 250-bl.split('%')[0]*3< -100?-100:(250-bl.split('%')[0]*3);
	obj._a.css('background-position-y',old_bl)
	old_bl = bls;
	obj._a.html(bl).animate({'background-position-y':bls},300);
	var arr = [];
	$('.achieve-data .achieve-num').each(function(i,e){
		var oldnum = $obj.sl? $obj.sl[i]:0;
		var newnum = $(this).data('text');
		arr.push(newnum);
		var x = new CountUp($(this).get(0),oldnum,newnum);
		x.start();
	})
	$.extend($obj,{sl:arr});
}





//详细数据
$('.activity-content-table')
function table(tab){
	var html = '<div class="activity-table-title">'+tab.head+'</div><div class="activity-table-box"><div class="activity-table-head"><table><thead><tr>';
	arr_ground = [];
	$.each(tab.titlename,function(i,e){
		html += '<th data-type="'+e.type+'">'+e.name+'</th>'
	})
	html += '<th>成就</th></tr></thead></table></div><div class="activity-table-body"><table><tbody>';
	$.each(tab.data,function(i,e){
		html += '<tr data-_id="'+e[tab.id]+'"  data-old="'+(i+1)+'">';
		var flag_img = true;
		$.each(tab.titlename,function(n,x){
			if(n == 0&& x.type == 'ranking'){
				html += '<td>'+(i+1)+'</td>';
			}else{
				if(typeof e.thumb!='undefined'&&flag_img == true){
					flag_img = false
					html += '<td><img src="'+e.thumb+'">'+e[x.type]+'</td>';
				}else{
					html += '<td>'+e[x.type]+'</td>';
				}
			}
		})
		html += '<td class="achievement"></td></tr>'
	})
	html += '</tbody></table></div>';
	$(tab.parent).html(html);
	var _h = '';
	for(var i = 0 ; i < 6 ; i++){
		_h += '<i style="background-position:-'+i*30+'px 0"></i>'
	}
	$('.achievement').html(_h)
	table_time();
}
var _settime ='';

function setTime(){
	$('.activity-table-body tr').each(function(){
		if(!$(this).is(':hidden')){
			if($(this).offset().top-$(this).parent().offset().top+$(this).outerHeight()<$(this).closest('.activity-table-body').height()){
				$(this).animate({opacity:0},1500,function(){
					$(this).css({opacity:1}).hide();
					if($(this).index()==$(this).siblings().length){
						$('.activity-table-body tr').show();
					}
				})
			}
		}
	})
}
function startTime(){//业绩排行版切换事件start
	if($('.activity-table-body').children().height()>$('.activity-table-body').height())_settime = setInterval(setTime,15000);
}
function endTime(){//业绩排行版切换事件end
	clearInterval(_settime);
}
function table_time(){
	if($('.activity-table-body').children().height()>$('.activity-table-body').height()){
		startTime()
		$('.activity-table-box').hover(function(){
			endTime();
		},function(){
			startTime()
		})
		
	}else{
		endTime();
	}
}





//shade
$('.shade-bottom').on('click',function(){
	$('.shade').hide(600);
})




//关闭事件
function shadeoff(){//遮罩5秒后自动关闭事件
	setTimeout(function(){$('.shade-bottom').click()},5000)
}


var oldnum = $('.activity-content-right label span').data('text')||0;
function monitor(num){//监听事件-前三
	arr_ground = [],//项目组\姓名
	arr_rate = [];//完成率
	//趋势实时销售战报
	var a = new CountUp($('.activity-content-right label span').get(0),oldnum,num);
	oldnum = num;
	a.start();
	//趋势实时销售战报end
	$('.activity-table-body tr').each(function(i,e){
		if(i<3){
			if($(this).children().eq($(this).children().length-1).text()=='0%'||$(this).children().eq($(this).children().length-1).text()=='undefined'){
				arr_ground.push('');
				arr_rate.push('')
			}else{
				arr_ground.push($(this).children().eq(1).html());
				arr_rate.push($(this).children().eq($(this).children().length-2).html())
			}
			
		}
	})
	//前三甲
	$('.activity-content-ranking').children().each(function(){
		$(this).find('span').eq(0).html(arr_ground[$(this).data('no')*1-1]||'');
		$(this).find('span').eq(1).html(arr_rate[$(this).data('no')*1-1]||'');
	})
	//前三甲end
}









