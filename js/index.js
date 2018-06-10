// Adopted from https://bananiumlabs.com
$(document).ready(function () {
    // Custom jQuery by Eric Q. 

    // Animate logo movements
    const logo = new Vivus('bannerLogo', {
        file: '../img/banner-animated.svg',
        reverseStack: true,
        onReady: function(myVivus) {
            myVivus.play();
        }
    });

    setTimeout(function() {
        $('#bannerLogo').html(`<img src="../img/banner2.svg">`);
    }, 4500)

    // --- Reserved ---

    console.log('init');
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: (target.offset().top - $('#navbarSupportedContent').outerHeight() - 30)
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        target.focus();
                        if (target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // $('#downloadSP').click(function() {
    //     console.log('Sponsor Packet Download Initialized!')
    // });


});