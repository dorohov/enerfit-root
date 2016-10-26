$(function() {
	
	var pc = $('.page-container');
	var v = $('.bg-video').get(0);
	
	var attack = function(state) {
		pc.attr('data-state', state);
		setTimeout(function(){
			pc.attr('data-state', '');
		}, 192);
	};
	
	v.addEventListener('timeupdate', function() {
		//duration = 11.52
		console.log(v.currentTime);
		
		if(v.currentTime > 0.25 && v.currentTime < 0.5) {
			attack(2);
		}
		
		if(v.currentTime > 1.9 && v.currentTime < 2.2) {
			attack(2);
		}
		
	}, false);
	
	/*
	setInterval(function(){
		
		var a = parseInt(pc.attr('data-state'));
		
		if(a == 0) {
			pc.attr('data-state', 1);
		} else if(a == 1) {
			pc.attr('data-state', 2);
		} else if(a == 2) {
			pc.attr('data-state', 0);
		}
		
	}, 1000);
	*/
});