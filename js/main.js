// JavaScript Document
$('.slider-22').slick({
  dots: true,
	rtl: true,
  speed: 300,
	autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
		autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 540,
      settings: {
		autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
		autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});