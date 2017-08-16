$(document).ready(function(){
	$(window).scroll(function(event){
		var y = $(this).scrollTop();
		if(y > 50){
			$('nav').addClass('shrink');
			$('.left').addClass('padding');
			$('.right').addClass('opacity');
		}else{
			$('nav').removeClass('shrink');
			$('.left').removeClass('padding');
			$('.right').removeClass('opacity');

		}
		if(y >= 400){
			$('#phone').addClass('animate');
			$('#tablet').addClass('animate');
		}else{
			$('#phone').removeClass('animate');
			$('#tablet').removeClass('animate');			
		}
	});
	$('#icon').click(function(){
		$('.right').slideToggle('slow');
	});
});
