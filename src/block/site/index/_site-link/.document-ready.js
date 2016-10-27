$(function() {
	
	var pc = $('.page-container');
	var v_jq = $('.bg-video');
	var v = v_jq.get(0);
	var a_jq = $('.bg-audio');
	var a = a_jq.get(0);
	
	var attack = function(state) {
		a.play();
		pc.attr('data-state', state);
		setTimeout(function(){
			pc.attr('data-state', '');
		}, 200);
	};
	
	var attack_c = [];
	
	v.addEventListener('timeupdate', function() {
		//duration = 11.52
		
		//v.pause(); 
		//v_jq.data('is_playing', false);
		console.log(v.currentTime);
		
		if(!attack_c[0] && v.currentTime > 0.25 && v.currentTime < 0.5) {
			attack_c[0] = 1;
			attack(2);
		} else
		
		if(!attack_c[1] && v.currentTime > 1.45 && v.currentTime < 1.8) {
			attack_c[1] = 1;
			attack(1);
			//a.play();
		} else
		
		if(!attack_c[2] && v.currentTime > 1.9 && v.currentTime < 2.2) {
			attack_c[2] = 1;
			attack(2);
		} else
		
		if(!attack_c[3] && v.currentTime > 2.6 && v.currentTime < 3.0) {
			attack_c[3] = 1;
			attack(1);
			//a.play();
		} else
		
		
		
		if(!attack_c[4] && v.currentTime > 3.15 && v.currentTime < 3.45) {
			attack_c[4] = 1;
			attack(2);
		} else
		
		if(!attack_c[5] && v.currentTime > 4.6 && v.currentTime < 4.90) {
			attack_c[5] = 1;
			attack(2);
		} else
		
		if(!attack_c[6] && v.currentTime > 4.90 && v.currentTime < 5.15) {
			attack_c[6] = 1;
			attack(1);
			//a.play();
		} else
		
		if(!attack_c[7] && v.currentTime > 5.55 && v.currentTime < 5.85) {
			attack_c[7] = 1;
			attack(1);
		} else
		
		
		
		if(!attack_c[8] && v.currentTime > 6.05 && v.currentTime < 6.37) {
			attack_c[8] = 1;
			attack(2);
		} else
		
		if(!attack_c[9] && v.currentTime > 7.25 && v.currentTime < 7.6) {
			attack_c[9] = 1;
			attack(1);
			//a.play();
		} else
		
		if(!attack_c[10] && v.currentTime > 8.0 && v.currentTime < 8.35) {
			attack_c[10] = 1;
			attack(1);
			//a.play();
		} else
		
		if(!attack_c[11] && v.currentTime > 8.7 && v.currentTime < 9.03) {
			attack_c[11] = 1;
			attack(1);
			//a.play();
		} else
		
		
		
		if(!attack_c[12] && v.currentTime > 9.03 && v.currentTime < 9.3) {
			attack_c[12] = 1;
			attack(2);
		} else
		
		
		
		if(!attack_c[13] && v.currentTime > 9.5 && v.currentTime < 9.76) {
			attack_c[13] = 1;
			attack(0);
		} else
		
		if(!attack_c[14] && v.currentTime > 9.94 && v.currentTime < 10.24) {
			attack_c[14] = 1;
			attack(0);
			//a.play();
		} else
		
		if(!attack_c[15] && v.currentTime > 10.25 && v.currentTime < 10.5) {
			attack_c[15] = 1;
			attack(0);
			//a.play();
		} else
		
		if(!attack_c[16] && v.currentTime > 11.2 && v.currentTime < 11.5) {
			attack_c[16] = 1;
			attack(0);
			//a.play();
		} else {
			
			if(attack_c.length == 17) {
				attack_c = [];
			}
			
		}
		
		
	}, false);
	
	if((!device.mobile() && !device.tablet()) && !(screenJS.isPortrait() && device.desktop())) {
		v.playbackRate = 0.7;
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