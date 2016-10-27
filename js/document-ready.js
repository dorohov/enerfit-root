'use strict';


window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}


function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);


$(function() {
	
	/*
	Создание триггеров на элементы, в основном, на body
	*/
	$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init");var e=(new Date).getTime();$(document.body).attr("data-created_at",e)}),$(document.body).on("fecss.window.unload",null,{},function(o,e){console.log("body trigger:fecss.window.unload: "+JSON.stringify(e))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,e){console.log("body trigger:fecss.keydown: "+JSON.stringify(e))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,e){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(o){-o.originalEvent.deltaY||o.originalEvent.detail||o.originalEvent.wheelDelta});
$(document.body).on("fecss.changeDOM",".fecss-change-dom",{},function(e,c){console.log(".fecss-change-dom trigger:fecss.changeDOM")}),$(document.body).on("DOMSubtreeModified",".fecss-change-dom",{},function(e,c){$(this).trigger("fecss.changeDOM")});
$(document.body).on("fecss.jssearch",null,{},function(s,e,n){console.log("body trigger:fecss.jssearch "+e);var c=$(document.body);if(c.find(".fecss-jssearch").removeClass().contents().unwrap(),""==e||" "==e);else{var t=new RegExp("("+e+")","ig"),a=0,o="";c.attr("data-fecss-jssearch",e).find("*").contents().each(function(s){3==this.nodeType&&t.test(this.nodeValue)&&($(this).replaceWith(this.nodeValue.replace(t,'<span class="fecss-jssearch">$1</span>')),a++)}),o=a>0?"Найдено: "+a:"Ничего не найдено",n&&n({msg:o,count:a,text:e})}});
	
	
	/*
	Событие смены класса body
	*/
	$(document.body).on('changeClass', null, {} ,function(event, event_action){
		// event_action = add || remove || toggle
		
		$(function(){});
	});
	
	
	/*
	События смены класса у любого элемента
	*/
		
	
	
	/*
	Основная логика сайта
	*/
	$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(function(){var s=$(document.body),c=s.attr("data-fecss-jssearch")||"";""!=c&&s.trigger("fecss.jssearch",[c,function(s){console.log(s.msg)}])});
$(function(){var e=$(".page-container"),r=$(".bg-video"),t=r.get(0),i=function(r){e.attr("data-state",r),setTimeout(function(){e.attr("data-state","")},200)};t.addEventListener("timeupdate",function(){t.currentTime>.25&&t.currentTime<.5?i(2):t.currentTime>1.45&&t.currentTime<1.8?i(1):t.currentTime>1.9&&t.currentTime<2.2?i(2):t.currentTime>2.6&&t.currentTime<3?i(1):t.currentTime>3.15&&t.currentTime<3.45?i(2):t.currentTime>4.6&&t.currentTime<4.9?i(2):t.currentTime>4.9&&t.currentTime<5.15?i(1):t.currentTime>5.55&&t.currentTime<5.85?i(1):t.currentTime>6.05&&t.currentTime<6.37?i(2):t.currentTime>7.25&&t.currentTime<7.6?i(1):t.currentTime>8&&t.currentTime<8.35?i(1):t.currentTime>8.7&&t.currentTime<9.03?i(1):t.currentTime>9.03&&t.currentTime<9.3?i(2):t.currentTime>9.5&&t.currentTime<9.76?i(0):t.currentTime>9.94&&t.currentTime<10.24?i(0):t.currentTime>10.25&&t.currentTime<10.5?i(0):t.currentTime>11.2&&t.currentTime<11.5&&i(0)},!1),device.mobile()||device.tablet()||screenJS.isPortrait()&&device.desktop()||t.play()});
	
	
	/*
	Событие смены размера экрана, генерация этого события
	*/
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
$(function(){screenJS.isPortrait()?$(".bg-video").attr("data-orientation","p"):$(".bg-video").attr("data-orientation","l");var t=screenJS.screen.w/screenJS.screen.h;t<1.7777777777777777?$(".bg-video").attr("data-orientation","p"):$(".bg-video").attr("data-orientation","l")});
	}).trigger('resize');
	
	
	/*
	Событие скроллинга экрана, генерация этого события
	*/
	$(window).on('scroll',function(event){
		$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?a<200&&o.removeClass("active"):a>200&&o.addClass("active")});
	}).trigger('scroll');
	
	
	/*
	Событие ухода со страницы
	*/
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	
	/*
	Событие инициализации fecss
	*/
	$(document.body).trigger('fecss.init');
	
	
});