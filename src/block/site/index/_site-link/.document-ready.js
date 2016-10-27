$(function() {
	
	var pc = $('.page-container');
	var v_jq = $('.bg-video');
	var v = v_jq.get(0);
	//var a_jq = $('.bg-audio');
	//var a = a_jq.get(0);
	
	var attack = function(state) {
		pc.attr('data-state', state);
		setTimeout(function(){
			pc.attr('data-state', '');
		}, 200);
	};
	
	v.addEventListener('timeupdate', function() {
		//duration = 11.52
		
		//v.pause(); 
		//v_jq.data('is_playing', false);
		//console.log(v.currentTime);
		
		
		if(v.currentTime > 0.25 && v.currentTime < 0.5) {
			attack(2);
		} else
		
		if(v.currentTime > 1.45 && v.currentTime < 1.8) {
			attack(1);
			//a.play();
		} else
		
		if(v.currentTime > 1.9 && v.currentTime < 2.2) {
			attack(2);
		} else
		
		if(v.currentTime > 2.6 && v.currentTime < 3.0) {
			attack(1);
			//a.play();
		} else
		
		
		
		if(v.currentTime > 3.15 && v.currentTime < 3.45) {
			attack(2);
		} else
		
		if(v.currentTime > 4.6 && v.currentTime < 4.90) {
			attack(2);
		} else
		
		if(v.currentTime > 4.90 && v.currentTime < 5.15) {
			attack(1);
			//a.play();
		} else
		
		if(v.currentTime > 5.55 && v.currentTime < 5.85) {
			attack(1);
		} else
		
		
		
		if(v.currentTime > 6.05 && v.currentTime < 6.37) {
			attack(2);
		} else
		
		if(v.currentTime > 7.25 && v.currentTime < 7.6) {
			attack(1);
			//a.play();
		} else
		
		if(v.currentTime > 8.0 && v.currentTime < 8.35) {
			attack(1);
			//a.play();
		} else
		
		if(v.currentTime > 8.7 && v.currentTime < 9.03) {
			attack(1);
			//a.play();
		} else
		
		
		
		if(v.currentTime > 9.03 && v.currentTime < 9.3) {
			attack(2);
		} else
		
		
		
		if(v.currentTime > 9.5 && v.currentTime < 9.76) {
			attack(0);
		} else
		
		if(v.currentTime > 9.94 && v.currentTime < 10.24) {
			attack(0);
			//a.play();
		} else
		
		if(v.currentTime > 10.25 && v.currentTime < 10.5) {
			attack(0);
			//a.play();
		} else
		
		if(v.currentTime > 11.2 && v.currentTime < 11.5) {
			attack(0);
			//a.play();
		}
		
		
	}, false);
	
	if((!device.mobile() && !device.tablet()) && !(screenJS.isPortrait() && device.desktop())) {
		v.play();
	}
	/*
	$(document.body).on('click', '.central-title', {}, function(event){
		event.preventDefault();
		
		if(v_jq.data('is_playing')) {
			v.pause(); 
			v_jq.data('is_playing', false);
			console.log('attack: ' + v.currentTime);
		} else {
			v.play();
			v_jq.data('is_playing', true);
		}
		
	});
	*/
	
	//v_jq.data('is_playing', false);
	//attack(0);
	
});