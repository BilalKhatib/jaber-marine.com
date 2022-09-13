$(function() {
    var home = $(".home-link");
    var about = $(".about-link");
    var images = $(".images-link");
    var owner = $('.owner-link')
    var contact = $(".contact-link");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 600) {
            about.removeClass('about-link').addClass("active");
            home.removeClass('active');
        } 

        if (scroll >= 1300) {
            images.removeClass('image-link').addClass("active");
            about.removeClass('active');
        } 

        if (scroll >= 2000) {
            owner.removeClass('owner-link').addClass("active");
            images.removeClass('active');
        } 

        if (scroll >= 2500) {
            contact.removeClass('contact-link').addClass("active");
            owner.removeClass('active');
        } 

        if (scroll <= 2500) {
            contact.removeClass('active').addClass("contact-link");
            owner.removeClass('owner-link').addClass('active');
        }

        if (scroll <= 2000) {
            owner.removeClass('active').addClass("owner-link");
            images.removeClass('images-link').addClass('active');
        }

        if (scroll <= 1300) {
            images.removeClass('active').addClass("images-link");
            about.removeClass('about-link').addClass('active');
        }

        if (scroll <= 600) {
            about.removeClass('active').addClass("about-link");
            home.removeClass('home-link').addClass('active');
        }
    });
});