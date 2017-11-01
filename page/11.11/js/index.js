var jsons = [{name:'倍润清'},{name:'祛痘'},{name:'祛斑'},{name:'生发'},{name:'黑头'},{name:'红血丝'},{name:'抗皱'},{name:'祛痘'},{name:'祛斑'},{name:'生发'},{name:'黑头'},{name:'红血丝'},{name:'抗皱'},{name:'祛痘'},{name:'祛斑'},{name:'生发'},{name:'黑头'},{name:'红血丝'},{name:'抗皱'}]

var R = new roll({parents:'.activity-title-right',data:jsons,btn:true,classname:'activity-title-content',click:function(){
	console.log(this)
}});
	R.engine();
	
var jsons2 = [{name:'倍润清 王小5 填单 18000 2017-10-30'},{name:'倍润清 王小6 填单 18000 2017-10-30'},{name:'倍润清 王小1 填单 18000 2017-10-30'},{name:'倍润清 王小2 填单 18000 2017-10-30'},{name:'倍润清 王小3 填单 18000 2017-10-30'},{name:'倍润清 王小4 填单 18000 2017-10-30'}]
var X = new roll({parents:'.activity-shape-right',data:jsons2,btn:false,classname:'activity-shape-content',animatetime:15000,settime:15000});
X.engine();


//倒计时
var ts = new Date('2017-11-7 00:00:00').getTime();
$('.activity-content-date').countdown({
	timestamp	: ts
});


//完成度
achieve({parent:'.activity-content-aim',keys:[{name:'总目标业绩',contrase:0},{name:'冲刺目标业绩',contrase:0},{name:'已完成目标业绩',contrase:1},{name:'应完成业绩目标',contrase:2}]})


//详细数据
var datas = [{num:1,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'0'},{num:2,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'0'},{num:3,name:'ccc',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:4,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:5,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:6,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:7,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:8,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:9,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:10,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:11,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:12,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:13,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:14,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'},{num:15,name:'倍润清',num1:50000,num2:80000,num3:8000,num4:'100%'}]
table({data:datas,parent:'.activity-content-table',head:'业绩排行榜',titlename:['排行榜','项目组','总目标','冲刺目标','已完成业绩','完成率']})
