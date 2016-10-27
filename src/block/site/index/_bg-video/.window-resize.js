$(function() {
	
	if(screenJS.isPortrait()) {
		$('.bg-video').attr('data-orientation', 'p');
	} else {
		$('.bg-video').attr('data-orientation', 'l');
	}
	
	var r = screenJS.screen.w / screenJS.screen.h;
	
	if(r < 1.7777777777777777777777777777778) {
		$('.bg-video').attr('data-orientation', 'p');
	} else {
		$('.bg-video').attr('data-orientation', 'l');
	}
	
});