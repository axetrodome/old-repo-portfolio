$(document).ready(function(){

	var scrollLink = $('.scroll');
	var somelink = $('.link');
	somelink.click(function(e){
		e.preventDefault();
	})
	scrollLink.click(function(e){
		e.preventDefault();

		$('body,html').animate({
			scrollTop:$(this.hash).offset().top
		},1000);
	});

	$(window).scroll(function(){
		var scrollBarLocation = $(this).scrollTop();
		if(scrollBarLocation > 50){
			$('nav').addClass('shrink');
			$('.left').addClass('padding');
			$('.right').addClass('opacity');
			$('.return-top').fadeIn();

		}else{
			$('nav').removeClass('shrink');
			$('.left').removeClass('padding');
			$('.right').removeClass('opacity');
			$('.return-top').fadeOut();

		}
		if(scrollBarLocation >= 400){
			$('#phone').addClass('animate');
			$('#tablet').addClass('animate');
		}else{
			$('#phone').removeClass('animate');
			$('#tablet').removeClass('animate');			
		}


		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top;

			if(sectionOffset <= scrollBarLocation ){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});
	$('.return-top').click(function(){
		$('body,html').animate({
			scrollTop:0

		},1000);
	});
	$('#icon').click(function(){
		$('.right').slideToggle('slow');
	});
});
