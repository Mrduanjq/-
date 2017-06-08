;
(function (dom,callBackEvents={}){
	var EnabelSwipe = {
		trigger : function(dom,eventName){	//  哪个元素派发了一个什么样的事件
			var evt = document.createEvent("CustomEvent");
			evt.initCustomEvent(eventName,true,true,{});
			dom.dispatchEvent(evt);
		},
		EnabelSwipe : function(dom,callBackEvents={}){
			var start = {x:0,y:0},	//起点
			end   = {x:0,y:0};  //终点
			
			dom.addEventListener("touchstart",function(e){
				start.x = e.targetTouches[0].pageX;
				start.y = e.targetTouches[0].pageY;
				
				console.info(start)
			});

			dom.addEventListener("touchend",function(e){
				
				end.x = e.changedTouches[0].pageX;
				end.y = e.changedTouches[0].pageY;
				
				console.info(e,end);
				
				if(Math.abs(end.x-start.x) > 30 || Math.abs(end.y - start.y) > 30)//是否超过30
				{
					var dir = "";
					if(Math.abs(end.x-start.x) > Math.abs(end.y - start.y) ){
						//表示水平
						dir = end.x > start.x ? "swipeRight" : "swipeLeft"
					}
					else {
						dir = end.y > start.y ? "swipeDown" : "swipeUp"
						//表示垂直方向
					}
					EnabelSwipe.trigger(this,dir);
				}		
			});
			
			if(callBackEvents.left && typeof callBackEvents.left == "function"){
				dom.addEventListener("swipeLeft",function(){
					callBackEvents.left();
				})
			}
			
			if(callBackEvents.right && typeof callBackEvents.right == "function"){
				dom.addEventListener("swipeRight",function(){
					callBackEvents.right();
				})
			}
			
			if(callBackEvents.down && typeof callBackEvents.down == "function"){
				dom.addEventListener("swipeDown",function(){
					callBackEvents.down();
				})
			}
			
			if(callBackEvents.up && typeof callBackEvents.up == "function"){
				dom.addEventListener("swipeUp",function(){
					callBackEvents.up();
				})
			}
		}
	};
		//  哪个元素派发了一个什么样的事件
		// function trigger (dom,eventName){
		// 	var evt = document.createEvent("CustomEvent");
		// 	evt.initCustomEvent(eventName,true,true,{});
		// 	dom.dispatchEvent(evt);
		// }
		

		
		window.EnabelSwipe = EnabelSwipe
	}
)()
	