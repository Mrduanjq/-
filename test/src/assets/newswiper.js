;
(function (dom,callBackEvents={}){
	var EnabelSwipe = {
		trigger : function(dom,eventName){	//  �ĸ�Ԫ���ɷ���һ��ʲô�����¼�
			var evt = document.createEvent("CustomEvent");
			evt.initCustomEvent(eventName,true,true,{});
			dom.dispatchEvent(evt);
		},
		EnabelSwipe : function(dom,callBackEvents={}){
			var start = {x:0,y:0},	//���
			end   = {x:0,y:0};  //�յ�
			
			dom.addEventListener("touchstart",function(e){
				start.x = e.targetTouches[0].pageX;
				start.y = e.targetTouches[0].pageY;
				// e.preventDefault();
				console.info(start)
			});

			dom.addEventListener("touchend",function(e){
				
				end.x = e.changedTouches[0].pageX;
				end.y = e.changedTouches[0].pageY;
				
				console.info(e,end);
				
				if(Math.abs(end.x-start.x) > 30 || Math.abs(end.y - start.y) > 30)//�Ƿ񳬹�30
				{
					var dir = "";
					if(Math.abs(end.x-start.x) > Math.abs(end.y - start.y) ){
						//��ʾˮƽ
						dir = end.x > start.x ? "swipeRight" : "swipeLeft"
					}
					else {
						dir = end.y > start.y ? "swipeDown" : "swipeUp"
						//��ʾ��ֱ����
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
		//  �ĸ�Ԫ���ɷ���һ��ʲô�����¼�
		// function trigger (dom,eventName){
		// 	var evt = document.createEvent("CustomEvent");
		// 	evt.initCustomEvent(eventName,true,true,{});
		// 	dom.dispatchEvent(evt);
		// }
		

		
		window.EnabelSwipe = EnabelSwipe
	}
)()
	