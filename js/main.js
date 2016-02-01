

$(document).ready(function () {
    $(window).on('load', function () {
        // PRELOADER
        
        // PRELOADER END
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar.main-menu").addClass("navbar-fixed");
        } else {
            $(".navbar.main-menu").removeClass("navbar-fixed");
        }
        // fix menu end
    });
        

    if ($(window).scrollTop() > 50) {
        $(".navbar.main-menu").addClass("navbar-fixed");
    } else {
        $(".navbar.main-menu").removeClass("navbar-fixed");
    }
    



    $(window).on("resize", function () {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        $('.main-block').css('height', $(window).height());
    });

    // mobile menu END

    // main block height
    $('.main-block').css('height', $(window).height());
    $(window).resize(function () {
        
    });
    // main block height END

    

    // google map init map
    function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            scrollwheel: false,
            center: {lat: 40.711557, lng: -74.016489}
        });

        // marker
        var marker = new google.maps.Marker({
        map: map,
        position: {lat: 40.711557, lng: -74.016489},
        title: 'Hello World!'
      });

    }
    google.maps.event.addDomListener(window, 'load', initialize);
    // google map END

    // footer map open  
        $(document).on("click", ".open__map__btn", function () {
            $(this).addClass("-open__map");
            return false;
        });
        $(document).on("click", "#map", function () {
            return false;
        });
        $(document).on("click", "body", function () {
            $('.open__map__btn').removeClass("-open__map");
        });
    // footer map open end    

    // anchor scrollTo
    $('.navbar-nav a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        if(anchor.parent().hasClass('reserve'))
            return;

        $('.navbar-nav > li').removeClass('active');
        $(this).parent(".navbar-nav li:not(.reserve)").addClass('active');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        
        e.preventDefault();
        return false;
    });

    $("section, footer").waypoint(function (direction) {
        if (direction === "down") {
            $(".navbar-nav a[href*=#" + this.element.id + "]").parent().addClass('active').siblings().removeClass('active');
        }
    }, {
        offset: "50%"
    });
    
    $("section, footer").waypoint(function (direction) {
        if (direction === "up") {
            $(".navbar-nav a[href*=#" + this.element.id + "]").parent().addClass('active').siblings().removeClass('active');
            if(this.element.id == "about-block") {
                $(".navbar-nav > li").removeClass('active');
            }
        }
    }, {
        offset: "-1%"
    });
    // anchor scroll end


    // slide bottom
    $(document).on("click", ".main__block .btn", function () {
        $('html, body').animate({'scrollTop': $('#contacts').offset().top}, 500);
        return false;
    });
    // slide bottom end

    

    //Reserve form validation
    $(document).on("submit", "form#formReservation, form#formReservation-2", function() {
        if(!validation($(this).attr("id"))) {
            //here code if validation is successful
        }
        return false;
    });
    //End reserve form validation
    
    //Comment form validation
    $(document).on("submit", "form#formComment", function() {
        if(!validation($(this).attr("id"))) {
            //here your code
        }
        return false;
    });
    //End comment form validation

    //Reserve form validation
    $(document).on("submit", "form#subscribe-form", function() {
        if(!validation($(this).attr("id"))) {
            $(this).find('input[type="email"]').parent().append('<strong class="field-success">Success</strong>');
        }
        return false;
    });

    //End reserve form validation


    // galleru initialize
    if($('#gallery-list').length > 0) {
        document.getElementById('gallery-list').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        }
    }
    // galleru initialize end

});

function validation (formId) {
    if($('form#'+ formId +' .field-success')[0] ) $('form#'+ formId +' .field-success').remove();
    $('form#'+ formId +' .field-error').remove();
    $('form#'+ formId +' .form-control').removeClass('inputError');
    var hasError = false;
    $('form#'+ formId +' .requiredField').each(function() {
        if(jQuery.trim($(this).val()) == '' || jQuery.trim($(this).val()) == jQuery.trim($(this).attr('placeholder'))){
            $(this).parent().append('<strong class="field-error">This is a required field</strong>');
            $(this).addClass('inputError');
            hasError = true;
        } else {
            if($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid email address.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('phone')) {
                var phoneReg = /^\+?[0-9 ]*$/;
                if(!phoneReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid phone number.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('date')) {
                var dateReg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
                if(!dateReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid date.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('time')) {
                var dateReg = /^[0-9]{2}:[0-9]{2}$/;
                if(!dateReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid time.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            } else if($(this).hasClass('persons')) {
                var personsReg = /^[1-9]{1}[0-9]{0,1}$/;
                if(!personsReg.test(jQuery.trim($(this).val()))){
                    $(this).parent().append('<strong class="field-error">Please enter a valid number of persons.</strong>');
                    $(this).addClass('inputError');
                    hasError = true;
                } 
            }
        }
    });
    
    return hasError;
}