$(document).ready(function() {
	$(".slider").slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		slidesToScroll:2,
		responsive: [
		    {
		      breakpoint: 992, // размер экрана 1024
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll:1, // тут меняем slidesToShow
		    	}
			},
			{
		      breakpoint: 767, // размер экрана 1024
		      settings: {
		      	dots:false,
		        slidesToShow: 1,
		        slidesToScroll:1,// тут меняем slidesToShow
		    	}
			}
		],
	});
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function(event){
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});


	$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

});