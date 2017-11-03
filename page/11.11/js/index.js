var jsons =shop_list||{},oldbcode='srx';
var olddata = '';
var R = new roll({keys:'shop_bcode',roll:'false',parents:'.activity-title-right',data:jsons,btn:true,classname:'activity-title-content',click:function(){
	bcode = $('.sign').data('shop_bcode');
	getdata();
}});
	R.engine();
	
var jsons2 = [{name:'倍润清 王小5 填单 18000 2017-10-30'},{name:'倍润清 王小6 填单 18000 2017-10-30'},{name:'倍润清 王小1 填单 18000 2017-10-30'},{name:'倍润清 王小2 填单 18000 2017-10-30'},{name:'倍润清 王小3 填单 18000 2017-10-30'},{name:'倍润清 王小4 填单 18000 2017-10-30'}]
var X = new roll({parents:'.activity-shape-right',data:jsons2,btn:false,classname:'activity-shape-content',animatetime:15000,settime:15000});
X.engine();


//倒计时

$('.activity-content-date').countdown({
	timestamp	: ts
});






//30秒
getdata();
function getdata(){
	$.get(get_url+'?bcode='+bcode,function(back){
		if(JSON.stringify(back) == olddata){
			return false
		}
		//完成度
		if(bcode == ''){
			var frate = 'rate',name = 'name',_id="shop_bcode";
			var titlename = [{name:'排行榜',type:'ranking'},{name:'项目组',type:name},{name:'总目标',type:'final_goal'},{name:'冲刺目标',type:'sprint_goal'},{name:'已完成业绩',type:'finished'},{name:'完成率',type:'frate'}];
		}else{
			var frate = 'frate',name = 'user_name',_id='user_id';
			var titlename = [{name:'排行榜',type:'ranking'},{name:'姓名',type:name},{name:'总目标',type:'final_goal'},{name:'冲刺目标',type:'sprint_goal'},{name:'已完成业绩',type:'finished'},{name:'完成率',type:'frate'}];
		}
		$('.activity-content-aim').children().remove();
		achieve({data:back.data.info,parent:'.activity-content-aim',keys:[{name:'已完成目标业绩',contrase:1,type:'finished'},{name:'应完成业绩目标',contrase:2,type:'finished_today'},{name:'总目标业绩',contrase:3,type:'final_goal'},{name:'冲刺目标业绩',contrase:0,type:'finished'}],bl:frate});
		if(bcode == oldbcode){
			$.each(back.data.list,function(i,e){
				var html=''
				$.each(titlename,function(n,x){
					if(n == 0&& x.type == 'ranking'){
						html += '<td>'+(i+1)+'</td>';
					}else{
						html += '<td data-'+x.type+'="'+e[x.type]+'">'+e[x.type]+'</td>';
					}
				})
				$('.activity-table-body tr[data-_id="'+e[_id]+'"]').attr('new',i).html(html)
			})
		}else{
			//详细数据
			table({data:back.data.list,parent:'.activity-content-table',head:'业绩排行榜',titlename:titlename,id:_id})
		}
		monitor(back.data.info.finished);
		
		olddata = JSON.stringify(back);
		
		var flag = true;
		function _c(){
			$('.activity-table-body tr').each(function(i,e){
				if($(this).attr('new')*1!=$(this).attr('data-old')*1&&flag == true){
					if($(this).attr('data-old') == $(this).prev().data('old')){
						$(this).attr('data-old',$(this).attr('data-old')*1+1)
					}
					flag =false;
					var prev = $('.activity-table-body tr[new="'+($(this).attr('data-old'))+'"]');
					var _t = prev.offset().top - $(this).parent().offset().top;
					var nt = $(this).offset().top - $(this).parent().offset().top;
					var $t=$(this);
					prev.css({'position':'absolute',top:_t,transform:'scale(1.5)','font-weight':'bold'}).animate({top:nt},(_t-nt)*20,function(){
						$(this).css({'position':'relative',transform:'scale(1)',top:0,'font-weight':'400'}).insertBefore($('.activity-table-body tr').eq($(this).attr('new')*1-1));
						var old_t = $(this).attr('data-old');
						$(this).attr('data-old',$t.attr('data-old'));
						$('.activity-table-body tr').eq(old_t-1).attr('data-old',old_t);
						flag = true;_c();
					})
				}
			})
		}
		if($(this).attr('new'))_c()
	})
}




$('.activity-title-left').on('click',function(){
	$('.activity-content-right .acticity-img-no').addClass('acticity-img').text('');
	bcode = '';
	getdata();
})