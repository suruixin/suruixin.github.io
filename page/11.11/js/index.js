var jsons = [{name:'倍润清'},{name:'祛痘'},{name:'祛斑'},{name:'生发'},{name:'黑头'},{name:'红血丝'},{name:'抗皱'},{name:'祛痘'},{name:'祛斑'},{name:'生发'},{name:'黑头'},{name:'红血丝'},{name:'抗皱'},{name:'祛痘'},{name:'祛斑'},{name:'生发'},{name:'黑头'},{name:'红血丝'},{name:'抗皱'}]

var R = new roll({parents:'.activity-title-right',data:jsons,btn:true,classname:'activity-title-content',click:function(){
	console.log(this)
}});
	R.engine();
	
var jsons2 = [{name:'倍润清 王小5 填单 18000 2017-10-30'},{name:'倍润清 王小6 填单 18000 2017-10-30'},{name:'倍润清 王小1 填单 18000 2017-10-30'},{name:'倍润清 王小2 填单 18000 2017-10-30'},{name:'倍润清 王小3 填单 18000 2017-10-30'},{name:'倍润清 王小4 填单 18000 2017-10-30'}]
var X = new roll({parents:'.activity-shape-right',data:jsons2,btn:false,classname:'activity-shape-content',animatetime:15000,settime:15000});
X.engine();
