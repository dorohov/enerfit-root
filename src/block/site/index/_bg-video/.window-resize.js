$(function() {
	
	if(screenJS.isPortrait()) {
		$('.bg-video').attr('data-orientation', 'p');
	} else {
		$('.bg-video').attr('data-orientation', 'l');
	}
	
});