// Adopted from https://bananiumlabs.com
// Created for https://launchhacks.tech
if (typeof ($) === undefined || typeof ($) === null) {
    alert("Core site resources failed to load. Please make sure your browser" + 
    " is JavaScript compatible!");
}
$(document).ready(function () {
    // Custom jQuery by Eric Q. 

    // Load page resources
    if (document.getElementById("nav") !== null && document.getElementById("nav") !== undefined) {
        $('#nav').load("resources/nav.html");   
    }

    if (document.getElementById("member") !== null && document.getElementById("member") !== undefined) {
        $('#member').load("resources/member.html");
    }

    if (document.getElementById("team") !== null && document.getElementById("team") !== undefined) {
        $('#team').load("resources/team.html");
    }

    if (document.getElementById("sponsor") !== null && document.getElementById("sponsor") !== undefined) {
        $('#sponsor').load("resources/sponsor.html");
    }

    if (document.getElementById("faq") !== null && document.getElementById("faq") !== undefined) {
        $('#faq').load("resources/faq.html");
    }

    if (document.getElementById("schedule") !== null && document.getElementById("schedule") !== undefined) {
        $('#schedule').load("resources/schedule.html");
    }

    if (document.getElementById("prizes") !== null && document.getElementById("prizes") !== undefined) {
        $('#prizes').load("resources/prizes.html");
    }

    if (document.getElementById("representativeWrapper") !== null && document.getElementById("representativeWrapper") !== undefined) {
        $('#representativeWrapper').load("resources/representative.html");
    }

    $("#livesite").attr("aria-disabled", true);
    $("#livesite").append('<span id="disable"> (COMING SOON!)');
    document.getElementById("livesite").addEventListener('click', function (event) {
        if (this.classList.contains('disabled')) {
            event.preventDefault();
            
            console.warn("Live site is not enabled yet! Preventing redirect.");
            alert("Hold on! The event has not started yet. Please revisit when the event has commenced. :)");
        }
    });

    
    document.getElementById("hackerSignup").addEventListener('click', function (event) {
        let offset = 420;
        let offsetMillis = offset * 60 * 1000;
        let today = new Date();
        let millis = today.getTime();
        let timeZoneOffset = (today.getTimezoneOffset() * 60 * 1000);
        let pst = millis - offsetMillis;
        let currentDate = new Date(pst);
        currentDate.setHours(currentDate.getHours() + 7);
        console.info("PST Time : " + currentDate.toUTCString());
        console.info("Local Time : " + new Date(today.getTime() - timeZoneOffset).toUTCString());
        console.info("PST CONVERTED: " + currentDate);
        let timeYear = currentDate.getFullYear();
        let timeMonth = currentDate.getMonth() + 1;
        let timeDate = currentDate.getDate();
        console.warn("In time limit mode.");
        console.info("year: " + timeYear);
        console.info("month: " + timeMonth);
        console.info("day: " + timeDate);
        if(timeYear != 2019) {
            event.preventDefault();
            alert("LaunchHacks I 2019 has ended! Please wait for LaunchHacks II to come online.");
        }
        else if(timeMonth > 4 || timeDate > 20) {
            event.preventDefault();
            alert("Priority registration deadline has passed. Please email contact@launchhacks.tech to sign up!");
        }
    });

    // Detect browser to load the correct svg
    var bannerFile = '../img/banner-animated.svg'; //default (Chrome/Opera)
    if (typeof InstallTrigger !== 'undefined')  { //Firefox 
        console.log('Using Firefox');
        bannerFile = '../img/banner-animated-firefox.svg';
    }
    else if (!!window.StyleMedia)  {// Edge
        console.log('Using Edge');
        bannerFile = '../img/banner-animated-edge.svg';
    }
    //Safari
    var isSafari = (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)));
    if(isSafari)
        console.log('Using Safari');


    // Animate logo movements

    const logo = new Vivus('bannerLogo', {
        file: bannerFile,
        reverseStack: true,
        onReady: function (bannerLogoVivus) {
            bannerLogoVivus.play(2);
            if(isSafari)
                $('#bannerLogo').css('maxHeight', '0');
            else
                $('#bannerLogo2').hide();
        }
    });

    if(isSafari)
    setTimeout(function() {
        const logo2 = new Vivus('bannerLogo2', {
            file: bannerFile,
            reverseStack: true,
            onReady: function (bannerLogoVivus2) {
                bannerLogoVivus2.play(2);
            }
        });
    }, 1000);
    

    // Animate navbar when scrolled
    $(window).scroll(function () {
        // Change int to configure how many pixels must be scrolled before navbar
        // appears
        if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });

    // User Tracking
    $('#downloadSP').click(function() {
        // Internal metrics recording
        console.log('Sponsor Packet Download Initialized!');
        
    });
    // --- Reserved END Custom jQuery---

    console.log('init');
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == 
                this.pathname.replace(/^\//, '') && location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: (target.offset().top - $('nav').outerHeight())
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        target.focus();
                        // if (target.is(":focus")) { // Checking if the target was focused
                        //     return false;
                        // } else {
                        //     target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        //     target.focus(); // Set focus again
                        // };
                    });
                }
            }
        });
});