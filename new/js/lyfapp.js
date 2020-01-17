(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    var mobileOS = getMobileOperatingSystem()
    if (mobileOS == "Android") {
        console.log("User device is an android")
        $('.download-desktop').addClass('hidden');
        $('.download-mobile').removeClass('hidden');
        $('.download-app-store').addClass('hidden');
        $('.download-play-store').removeClass('hidden');
    } else if (mobileOS == "iOS") {
        console.log("User device is an iPhone")
        $('.download-desktop').addClass('hidden');
        $('.download-mobile').removeClass('hidden');
        $('.download-app-store').removeClass('hidden');
        $('.download-play-store').addClass('hidden');
    } else {
        console.log("User device is a windows phone or desktop or something")
        $('.download-desktop').removeClass('hidden');
        $('.download-mobile').addClass('hidden');
    }

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 80) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent.toLowerCase())) {
            return "Windows Phone";
        }
        if (/android/i.test(userAgent.toLowerCase())) {
            return "Android";
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/ipad|iphone|ipod/.test(userAgent.toLowerCase()) && !window.MSStream) {
            return "iOS";
        }
        return "Desktop";
    }

})(jQuery); // End of use strict