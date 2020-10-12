// JavaScript Document

$(document).ready(function(){
    $('div.loader').fadeOut();
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
            $('.header').addClass("sticky");
        }
        else{
            $('.header').removeClass("sticky");
        }
    
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
            $('div.header').addClass("sticky");
        }
        else{
            $('div.header').removeClass("sticky");
        }
    
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
            $('div.headerMob').addClass("sticky");
        }
        else{
            $('div.headerMob').removeClass("sticky");
        }
    
    });

    var $toggleButton = $('.toggle-button'),
	$menuWrap = $('.menu-wrap'),
	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
	$(this).toggleClass('button-open');
	$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
	$(this).next().slideToggle(300);
    });
    

    // $(".productListing").mCustomScrollbar({
    //     axis:"x" ,
    //     theme:"dark"
    // });


    $('.bannerSlider').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });


    $('.productListing').slick({
        dots: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          
          ]
    });


});