$(document).ready(function(){

	var scrollLink = $('.scroll');

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
		}else{
			$('nav').removeClass('shrink');
			$('.left').removeClass('padding');
			$('.right').removeClass('opacity');

		}
		if(scrollBarLocation >= 400){
			$('#phone').addClass('animate');
			$('#tablet').addClass('animate');
		}else{
			$('#phone').removeClass('animate');
			$('#tablet').removeClass('animate');			
		}
		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top - 20;

			if(sectionOffset <= scrollBarLocation ){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});
	$('#icon').click(function(){
		$('.right').slideToggle('slow');
	});
});
