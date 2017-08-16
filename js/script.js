$(document).ready(function(){
	$(window).scroll(function(event){
		var y = $(this).scrollTop();
		if(y > 50){
			$('nav').addClass('shrink');
		}else{
			$('nav').removeClass('shrink');
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
https://github.com/axetrodome/axetrodome.github.io.git
https://github.com/axetrodome/portfolio.git