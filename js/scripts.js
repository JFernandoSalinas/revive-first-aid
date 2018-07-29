//----SCROLL REVEAL-----//
window.sr = ScrollReveal({ reset: false ,duration: 1000,mobile:   false });
//Scroll Reveal config
sr.reveal('.col-md-6');
sr.reveal('#book-btn-area');
sr.reveal('#testimonials-area');
sr.reveal('#course-1',{origin: 'bottom',distance: '100px'});
sr.reveal('#course-2',{origin: 'top',distance: '100px'});
sr.reveal('#course-3',{origin: 'bottom',distance: '100px'});
sr.reveal('#header-img-content',{origin: 'left',distance: '100px'});
sr.reveal('#booking-form-message',{origin: 'bottom',distance: '100px'});
sr.reveal('#course-area-details',{origin: 'right',distance: '100px'});
sr.reveal('.about-us',{origin: 'right',distance: '100px'});

//-----Mobile Menu----/
$(document).ready(function(){
	$(".mobile-menu-toggle").click(function(){
		$("#mobile-menu").slideToggle(500);
		$(this).css( "display", "none" );
		$(".mobile-close-toggle").css( "display", "initial" );
	});
	$(".mobile-close-toggle").click(function(){
		$("#mobile-menu").slideToggle(500);
		$(this).css( "display", "none" );
		$(".mobile-menu-toggle").css( "display", "initial" );
		
	});
});

//parallax effect script
//HOMEPAGE
$('.parallax-window').parallax({imageSrc: '../images/82522.jpg'});
//pages
//COURSE PAGE
$('#couse-page-header').parallax({imageSrc: '../images/25048.jpg'});
//About Us Page
$('#about-us-header').parallax({imageSrc: '../images/aboutus.jpg'});
//Book Course Page
$('#book-course-header').parallax({imageSrc: '../images/bookcourse.jpg',positionY: '-150px'});
//Recert Page
$('#course-recert-header').parallax({imageSrc: '../images/recert.jpg'});
//Emergency First Aid
$('#course-emergency-header').parallax({imageSrc: '../images/emergency.jpg'});
//Standard First Aid
$('#course-standard-header').parallax({imageSrc: '../images/standard.jpg'});
//initialise Superfish
jQuery(document).ready(function(){
	jQuery('ul.sf-menu').superfish();
});


//----Date Picker for Form----//
$(function () {
    $('#datetimepicker').datetimepicker();
});

//Carousel duration to spin after 10 seconds//
$('.carousel').carousel({
	interval: 10000
});

//----Display Alert once form is submitted----//
function submitForm(){
$('.alert-success').css( "display", "inherit" );
setTimeout(function() {
    $('.alert-success').fadeOut('slow');
}, 20000);
}
//Scroll to top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

