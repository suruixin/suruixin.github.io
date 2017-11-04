var jsons =shop_list||{},oldbcode='srx';
var olddata = 'oldbody';
var R = new roll({keys:'shop_bcode,id',roll:'false',parents:'.activity-title-right',data:jsons,btn:true,classname:'activity-title-content',click:function(){
	bcode = $('.sign').data('shop_bcode');
	getdata();
}});
	R.engine();
	
var jsons2 = [];
var X = new roll({parents:'.activity-shape-right',data:jsons2,btn:false,classname:'activity-shape-content',animatetime:15000,settime:15000});
X.engine();


//倒计时
var ss = 1;
$('.activity-content-date').countdown({
	timestamp	: ts,
	back:function(){
		if(ss ==1){
			ss=2;
			$('.activity-content-date').append('<div class="activity-content-over">活动结束</div>')
		}
	}
});



websocket = new WebSocket('ws://114.215.128.206:8282/'); 
var dhh={};
websocket.onopen = function(evt) {
	dhh.send();
};
websocket.onclose = function(evt) { 
}; 
websocket.onmessage = function(evt) {
	if(typeof evt.data == 'string')back=JSON.parse(evt.data);
	if(back.type&&back.type=='ping'){
		var msg={'msg':'sucess',type:'ping'};
		websocket.send(JSON.stringify(msg));
		return false;
	}
	if(back.vice){
		window.socketVice(back);
	}else{
		dhh.display(back);
	}
	
	
}; 
websocket.onerror = function(evt) {
	console.log('onerror',JSON.stringify(evt));
	websocket = new WebSocket('ws://114.215.128.206:8282/');
	//错误时 页面刷新 
};



	
dhh.send=function(){
	var msg={bcode:bcode,type:'changebcode',active_id:active_id};
	console.log(msg);
	websocket.send(JSON.stringify(msg));
}
var flag = true;
function _c(oldbcode){
	var flag_settime = true;
	$('.activity-table-body[keys="'+oldbcode+'"] tr').each(function(i,e){
		$(this).children().eq(0).text($(this).attr('new'));
		if($(this).attr('new')*1!=$(this).attr('data-old')*1&&flag == true){
			flag_settime = false;
			if($(this).attr('data-old') <= $(this).prev().attr('data-old')){
				$(this).attr('data-old',$(this).prev().attr('data-old')*1+1)
			}
			flag =false;
			var prev = $('.activity-table-body[keys="'+oldbcode+'"] tr[new="'+($(this).attr('data-old'))+'"]');
			var _t = prev.offset().top - $(this).parent().offset().top;
			var nt = $(this).offset().top - $(this).parent().offset().top;
			var $t=$(this);
			prev.css({'position':'absolute',top:_t,transform:'scale(1.5)','font-weight':'bold',background:'#12457a'}).animate({top:nt},((_t-nt)/3*40>300?300:(_t-nt)/3*40),function(){
				$(this).css({'position':'relative',transform:'scale(1)',top:0,'font-weight':'400',background:'transparent'}).insertBefore($('.activity-table-body[keys="'+oldbcode+'"] tr').eq($(this).attr('new')*1-1));
				var old_t = $(this).attr('data-old');
				$(this).attr('data-old',$t.attr('data-old'));
				$('.activity-table-body[keys="'+oldbcode+'"] tr').eq(old_t-1).attr('data-old',old_t);
				flag = true;_c(oldbcode);
			})
		}
	})
	if(flag_settime == true){
		startTime();
	}
}

dhh.display=function(back){
	//检测数据是否正确
	if(back.api!=bcode){
		dhh.send();
		return false;
	}
	if(JSON.stringify(back) == olddata){
		return false
	}
	//完成度
	var arr_title = ['提前完成冲刺目标','提前完成总目标','当天冲刺目标完成','当天目标完成','应该完成冲刺目标','应该完成目标']
	if(bcode == ''){
		var frate = 'rate',name = 'name',_id="shop_bcode";
		var titlename = [{name:'排行榜',type:'ranking'},{name:'项目组',type:name},{name:'总目标',type:'final_goal'},{name:'冲刺目标',type:'sprint_goal'},{name:'今日目标',type:'final_goal_today'},{name:'今日冲刺目标',type:'sprint_goal_today'},{name:'已完成业绩',type:'finished'},{name:'完成率',type:'frate'}];
	}else{
		var frate = 'frate',name = 'user_name',_id='user_id';
		var titlename = [{name:'排行榜',type:'ranking'},{name:'姓名',type:name},{name:'总目标',type:'final_goal'},{name:'冲刺目标',type:'sprint_goal'},{name:'今日目标',type:'final_goal_today'},{name:'今日冲刺目标',type:'sprint_goal_today'},{name:'已完成业绩',type:'finished'},{name:'完成率',type:'frate'}];
	}
	$('.activity-content-aim').children().remove();
	achieve({data:back.data.info,parent:'.activity-content-aim',keys:[{name:'已完成目标业绩',contrase:1,type:'finished'},{name:'应完成业绩目标',contrase:2,type:'finished_today'},{name:'总目标业绩',contrase:3,type:'final_goal'},{name:'冲刺目标业绩',contrase:0,type:'sprint_goal'}],bl:frate});
	if(bcode == oldbcode){
		$.each(back.data.list,function(i,e){
			var html='',flag_img = true;
			$.each(titlename,function(n,x){
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
			html+='<td class="achievement"></td>';
			$('.activity-table-body[keys="'+oldbcode+'"] tr[data-_id="'+e[_id]+'"]').attr('new',i+1).html(html);
			var _h = '';
			for(var i = 0 ; i < 6 ; i++){
				_h += '<i style="background-position:-'+i*30+'px 0" title="'+arr_title+'"></i>'
			}
			$('.achievement').html(_h)
		})
	}else{
		//详细数据
		table({data:back.data.list,parent:'.activity-content-table',head:'业绩排行榜',titlename:titlename,id:_id,title:arr_title});
		$('.activity-table-body').attr('keys',(back.api==''?'oldbody':back.api))
	}
	monitor(back.data.info.finished);
	flag = true;
	olddata = JSON.stringify(back);
	if($('.activity-table-body tr').attr('new')){
		endTime();
		$('.activity-table-body tr').show();
		_c(oldbcode);
	}
	var datas = back.data.list;
	function db(a,b,c){
		if(a>=b){
			$(c).show();
		}else{
			$(c).hide();
		}
	}
	$('.activity-table-body tr').each(function(i){
		$(this).children('.achievement').children().each(function(n,x){
			switch(n){
				case 0:
					db(datas[i]['finished'],datas[i]['sprint_goal'],x)
				break;
				case 1:
					db(datas[i]['finished'],datas[i]['final_goal'],x)
				break;
				case 2:
					db(datas[i]['order_today'],datas[i]['sprint_goal_today'],x)
				break;
				case 3:
					db(datas[i]['order_today'],datas[i]['finished_today'],x)
				break;
				case 4:
					db(datas[i]['finished'],datas[i]['sprinted_today'],x)
				break;
				case 5:
					db(datas[i]['finished'],datas[i]['finished_today'],x)
				break;
			}
		})
	})
	oldbcode=bcode;
}

function getdata(){
	endTime();
	dhh.send();
}

$('.activity-title-left').on('click',function(){
	$('.sign').removeClass('sign');
	$(this).addClass('sign');
	$('.activity-content-right .acticity-img-no').addClass('acticity-img').text('');
	bcode = '';
	getdata();
})