
/*
start .fecss document-ready
*/

$(function(){
	var res = 'noname-browser';
	var userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf('msie') != -1) res = 'msie';
	if (userAgent.indexOf('trident') != -1) res = 'msie';
	if (userAgent.indexOf('konqueror') != -1) res = 'konqueror';
	if (userAgent.indexOf('firefox') != -1) res = 'firefox';
	if (userAgent.indexOf('safari') != -1) res = 'safari';
	if (userAgent.indexOf('chrome') != -1) res = 'chrome';
	if (userAgent.indexOf('chromium') != -1) res = 'chromium';
	if (userAgent.indexOf('opera') != -1) res = 'opera';
	if (userAgent.indexOf('yabrowser') != -1) res = 'yabrowser';
	
	$('html').eq(0).addClass(res);
});

$(function(){
	$(document.body).on('keydown', function(event){
		event.stopPropagation();
		
		$(document.body).trigger('fecss.keydown', [{
			alt : event.altKey,
			ctrl : event.ctrlKey,
			shift : event.shiftKey,
			meta : event.metaKey,
			key : event.which,
			liter : String.fromCharCode(event.which),
		}]);
	});
});

$(function(){
	//moment.locale(window.navigator.userLanguage || window.navigator.language);
	//alert(moment().format('LLLL'));
});

/*
end .fecss document-ready
*/