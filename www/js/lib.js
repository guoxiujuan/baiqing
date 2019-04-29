
$(document).ready(function($) {
	
	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=960 ){
				$('#nv').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=960 ){
				$('#nv').stop().slideUp();
			}
		}
	});

	$(function() {
		$('.nav li').hover(function() {
			navem(this);
		}, function() {
			navem('.nav li.on');
		});
		navem('.nav li.on');
		function navem(e) {
			var left = $(e).position().left;
			$(".nav-bg").stop(true).animate({
				left: left
			}, 300);
		}
	});
	
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		if( _top<100 ){
			$('.index #hd').stop().addClass('i-hd');
		}else{
			$('.index #hd').stop().removeClass('i-hd');
		}
	});

	// 导航
		function myNav(){
		    var _winw = $(window).width();
		    if( _winw>960 ){
		        $('.nav li').hover(function() {
		        	navem(this);
		        }, function() {
		        	navem('.nav li.on');
		        });
		        navem('.nav li.on');
		        function navem(e) {
		        	var left = $(e).position().left;
		        	$(".nav-bg").stop(true).animate({
		        		left: left
		        	}, 300);
		        }
		    }else{
		    	$(".nav-bg").hide();
		    }
		}
		myNav();
		$(window).resize(function(event) {
		    myNav();
		});




	
});