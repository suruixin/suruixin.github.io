$('#home').on("mouseenter mouseleave",function(e){
	var w = this.offsetWidth;
   	var h = this.offsetHeight;
   	var toTop = this.getBoundingClientRect().top + document.body.scrollTop;
   	var x = (e.pageX - this.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1);
   	var y = (e.pageY - toTop - h/2) * (h > w ? (w / h) : 1);
   	var direction = Math.round((((Math.atan2(y, x) * 180 / Math.PI) + 180) / 90) + 3) % 4;
   	var type = e.type;
   	orien(direction,type,$(this));
   	function orien(direction,type,obj){
   		console.log(direction,type,obj);
   		types = (type == 'mouseenter'? 0 : 1);
   		var t = '',l = '' , b = '' , l = '' ;
   		switch(direction){
   			case 0://top
   				console.log(types)
   				types == 0?(t = 9 , l = 0):(t = 0 , l = 0)
   			break;
   			case 1://right
   				
   			break;
   			case 2://bottom
   				
   			break;
   			case 3://left
   				
   			break;
   		}
   		console.log(t,l)
   		obj.css({transform:'rotateX('+t+'deg) rotateY('+l+'deg)'})
   	}
})
