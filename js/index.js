var zero = document.getElementById('videozero');
var one = document.getElementById('videoone');
var two = document.getElementById('videotwo');
var three = document.getElementById('videothree');
var mySwiperHome = new Swiper('.swiper-container-homepage',{
	loop : true,
	autoplay: 5000,
	pagination : '.swiper-pagination',
	direction: 'horizontal',
	autoplayDisableOnInteraction : false
});
//5p
var mySwiperFive = new Swiper('.swiper-container-five',{
	loop : true,
	autoplay: 5000,
	pagination : '.swiper-pagination',
	direction: 'horizontal',
	autoplayDisableOnInteraction : false
});
//6p
var mySwiperSix = new Swiper('.swiper-container-pageSix1',{
	loop : true,
	autoplay: 5000,
	direction: 'horizontal',
	autoplayDisableOnInteraction : false
});
//9p
var mySwiperNine = new Swiper('.swiper-container-nine',{
	direction: 'horizontal',
	autoplayDisableOnInteraction : false,
	pagination : '.swiper-pagination9',
	slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30
});
$(function(){
	$(document).on('touchstart','#lookmore',function(){
		$('#page4').slideDown();
	});
	$(document).on('touchstart','#close',function(){
		$('#page4').slideUp();		
		two.pause();
		$('#videotwo').hide();
		$('#videotwo').siblings('.playPop').show();
		three.pause();
		$('#videothree').hide();
		$('#videothree').siblings('.playPop').show();
	});
	$(document).on('touchstart','#playone',function(){
		$('#videoone').show();
		document.getElementById('videoone').play();
	});
	$(document).on('touchstart','#playone',function(){
		$('#videoone').show();
		document.getElementById('videoone').play();
	});
	
	$(document).on('touchstart','#playzero',function(){
		$('#videozero').siblings('.playPop').hide();
		$('#videozero').show();
		zero.play();
	});
	
	$(document).on('touchstart','#playtwo',function(){
		$('#videotwo').siblings('.playPop').hide();
		$('#videotwo').show();
		two.play();
		three.pause();
		$('#videothree').hide();
		$('#videothree').siblings('.playPop').show();
	});
	
	$(document).on('touchstart','#playthree',function(){
		$('#videothree').siblings('.playPop').hide();
		$('#videothree').show();
		three.play();
		two.pause();
		$('#videotwo').hide();
		$('#videotwo').siblings('.playPop').show();
	});
	
});