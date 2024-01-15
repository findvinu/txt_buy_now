$(document).ready(function () {
    const doc = $(document);
    const homeSlider = doc.find("#slider_home_page");
    setTimeout(function () {}, 2500)

    function checkOffset() {
        if ($('#fixed').offset().top + $('#fixed').height() >= $('#footer').offset().top - 10)
            $('#fixed').css('position', 'absolute');
        if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
            $('#fixed').css('position', 'fixed');
    }
    $(document).scroll(function () {
        checkOffset();
    });
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("fixed").style.opacity = 1;
        } else {
            document.getElementById("fixed").style.opacity = 0;
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    $('.signupBox').hide();
    $('.forgotPBox').hide();
    $('#signup').click(function () {
        $('.loginBox').slideUp(100);
        $('.signupBox').slideDown(300);
    });
    $('#login').click(function () {
        $('.signupBox').slideUp(100);
        $('.loginBox').slideDown(300);
    });
    $('#login1').click(function () {
        $('.forgotPBox').slideUp(100);
        $('.loginBox').slideDown(300);
    });
    $('#forgot').click(function () {
        $('.forgotPBox').slideDown(100);
        $('.loginBox').slideUp(300);
    });
    $(".our-story a").click(function (e) {
        $(".our-story a").removeClass('selected');
        $(".our-story a").removeClass('active');
        $(this).addClass('selected');
    });
});
$(document).ready(function () {
    $(document).ready(function () {
        $('#contact #submit').attr('disabled', 'disabled');
        $('.quick-contact-form .quick_form button#submit').attr('disabled', 'disabled');
        $('#contact input').keyup(function () {
            if ($(this).val() != '') {
                $('#contact #submit').removeAttr('disabled');
            } else {
                $('#contact #submit').attr('disabled', 'disabled');
            }
        });
        $('.quick-contact-form textarea').keyup(function () {
            if ($(this).val() != '') {
                $('.quick-contact-form .quick_form button#submit').removeAttr('disabled');
            } else {
                $('.quick-contact-form .quick_form button#submit').attr('disabled', 'disabled');
            }
        });
    });
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
$(window).on('load', function () {
    'use strict';
    $.fn.exists = function () {
        return this.length > 0;
    };
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 769) {
        var mobile = true;
    } else {
        var mobile = false;
    }
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
        isFirefox = typeof InstallTrigger !== 'undefined',
        isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
        })(!window['safari'] || safari.pushNotification),
        isIE = /*@cc_on!@*/ false || !!document.documentMode,
        isEdge = !isIE && !!window.StyleMedia,
        isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        isBlink = (isChrome || isOpera) && !!window.CSS,
        isParallaxBrowsers = (isOpera || isFirefox || isBlink || isChrome);
    if (isIE) {
        $("body").addClass("ie-browser");
    }
    if (mobile === true) {
        $('.bg-parallax').addClass('bg-parallax-mobiled');
        if ($('#side-dotted-navigation').exists()) {
            var self = $('#side-dotted-navigation');
            $('body section:not(.nav-menu), div').on('touch touchstart', function () {
                $(self).addClass('spy');
            })
            $(self).on('touch touchstart touchend', function () {
                $(self).removeClass('spy');
            })
            $('#side-dotted-navigation:not(".spy")').on('touch', function () {
                $(self).addClass('spy');
            })
        }
        $('.hero-slider').height($(window).outerHeight());
    } else {
        var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false
        });
        $('body').addClass('stable');
        $(window).on("scroll", function () {
            if ($('body').hasClass('stable')) {
                setTimeout(function () {
                    if (isParallaxBrowsers) {
                        s.refresh();
                    }
                }, 100);
                $(window).trigger("resize");
                $('body').removeClass('stable');
            }
        });
        $('#extranav').ready(function () {
            function showHideExtraNav() {
                var nowPos = $(window).scrollTop();
                var extranav = $('#extranav'),
                    showExNav = extranav.attr('data-showme'),
                    hideExNav = extranav.attr('data-hideme');
                if ($(hideExNav).exists() && $(showExNav).exists()) {
                    var showSection = $(showExNav).offset().top,
                        hideSection = $(hideExNav).offset().top;
                    if ($(window).width() > 700) {
                        if (nowPos >= showSection - 60 && nowPos <= hideSection - 60) {
                            $(extranav).slideDown(150).removeClass('hiding');
                        } else {
                            $(extranav).addClass('hiding').slideUp(150);
                        }
                    }
                } else {
                    $(extranav).slideDown(150).removeClass('hiding').find('ul.nav').html('Extra Navigation is here! Please check the data-showme and data-hideme areas. This page does not have those links.');
                }
            }
            $(window).on("scroll", function () {
                showHideExtraNav();
            });
        });
    }

    function isRetina() {
        return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
    }
    if (isRetina()) {
        $("body").addClass("retina-device");
        $("[data-retina-image]").each(function () {
            var $this = $(this),
                $itemWidth = $(this).width(),
                $rtnIMG = $(this).attr("data-retina-image");
            $(this).attr("src", $rtnIMG).css({
                "width": $itemWidth + "px"
            });
        });
    }
    if ($(".retina-logo").exists()) {
        $("body").addClass("has-retina-logo");
    }
    $.fn.getDeviceWidth = function () {
        if ($(window).width() > 1200) {
            $('body').not('.device-xl').removeClass("device-lg device-md device-sm device-xs device-xxs").addClass('device-xl');
        }
        if ($(window).width() > 992 && $(window).width() < 1200) {
            $('body').not('.device-lg').removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass('device-lg');
        }
        if ($(window).width() > 768 && $(window).width() < 992) {
            $('body').not('.device-md').removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass('device-md');
        }
        if ($(window).width() > 576 && $(window).width() < 768) {
            $('body').not('.device-sm').removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass('device-sm');
        }
        if ($(window).width() > 480 && $(window).width() < 576) {
            $('body').not('.device-xs').removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass('device-xs');
        }
        if ($(window).width() < 480) {
            $('body').not('.device-xxs').removeClass("device-xl device-lg device-md device-sm device-xs device-xxs").addClass('device-xxs');
        }
    }
    $('body').getDeviceWidth();
    if ($(window).width() < 769) {
        $("[data-mobile-background]").each(function () {
            var bgSRC = $(this).data('mobile-background');
            $(this).addClass('bg-mobiled').css({
                'background-image': 'url(' + bgSRC + ')',
                'background-size': 'cover !important'
            });
        });
    }
    if ($("[data-original]").exists()) {
        $("[data-original]").lazyload({
            threshold: 1000
        });
    }
    if ($(".video-trigger").exists()) {
        $('.video-trigger').each(function () {
            var target = $(this).find('iframe'),
                trigger = $(this).find('.video-play-trigger'),
                src = $(target).data('src');
            $(trigger).on('click', function (ev) {
                $(target).attr('src', src);
                ev.preventDefault();
                $(this).delay(200).fadeOut(500);
            });
        });
    }
    $('.qdr-alert-trigger').each(function () {
        var self = $(this),
            target = $(self).data('target'),
            timer;
        $(self).on('click', function () {
            clearTimeout(timer);
            $(target).fadeOut(0).stop().clearQueue();
            setTimeout(function () {
                $(target).fadeIn(300)
            }, 1);
            timer = setTimeout(function () {
                $(target).fadeOut(300);
            }, 3000);
        });
    });
    $('.stay').on('click', function (e) {
        e.preventDefault();
    });
    var my_cookie = $.cookie($('.modal-check').attr('name')),
        cookieModal = $("#cookie-modal");
    if (my_cookie && my_cookie == "true") {
        $(this).prop('checked', my_cookie);
    } else {
        $(cookieModal).modal('show');
    }
    $(".modal-check").change(function () {
        $.cookie($(this).attr("name"), $(this).prop('checked'), {
            path: '/',
            expires: 1
        });
    });
    if ($.cookie("no_thanks") == null && $("#cookie-alert").exists() || $("#cookie-modal").exists()) {
        $.fn.show_modal = function () {
            $('#cookie-alert').modal({
                backdrop: 'static',
                keyboard: false
            });
            $('.modal-backdrop.show:not(.fade)').removeClass("modal-backdrop");
            $('body').addClass('cookie-alert-active');
        }
        setTimeout(function () {
            $(window).show_modal();
        }, 3000);
    }
    $.fn.closeCookieAlert = function () {
        $.cookie('no_thanks', 'true', {
            expires: 1,
            path: '/'
        });
        $('body').removeClass('cookie-alert-active');
        $('#cookie-alert').hide();
    }
    $("#cookie-alert .close").on('click', function () {
        $('body').closeCookieAlert();
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('body').closeCookieAlert();
        }
    });
    $('.qdr-hover').each(function () {
        var qdrText = $(this).html();
        $(this).empty();
        $(this).append("<span class='qdr-details'></span>");
        $(this).find('span.qdr-details').html(qdrText);
    });
    $('.qdr-hover-3').each(function () {
        var qdrText = $(this).html();
        $(this).empty();
        $(this).append("<span class='qdr-details'></span>");
        $(this).find('span.qdr-details').html(qdrText);
    });
    $('.boxes').addClass('clearfix');
    $('[class*="qdr-col-"]').addClass('clearfix');
    $("[data-color]").each(function () {
        var clrSRC = $(this).data('color');
        $(this).css({
            'color': clrSRC
        });
    });
    $("[data-bgcolor]").not('.tp-bgimg').not('.rev-slidebg').each(function () {
        var clrSRC = $(this).data('bgcolor');
        $(this).css({
            'background-color': clrSRC
        });
    });
    if ($(".moving-container").exists()) {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {} else {
            $(".moving-container").each(function () {
                var selector = $(this).find('.moving');
                $(this).hover3d({
                    selector: selector,
                    shine: false,
                    perspective: 1500,
                    sensitivity: 85,
                    invert: false
                });
            });
        }
    }
    if ($(".styled-portfolio.parallax").exists()) {
        if ($(window).width() > 630) {
            $(".styled-portfolio.parallax .cbp-item").each(function (i, el) {
                $(this).on("mouseenter", function (e) {
                    var currentX = '',
                        currentY = '',
                        movementConstant = 0.1;
                    var item = $(this);
                    $(item).mousemove(function (e) {
                        if (currentX == '') currentX = e.pageX;
                        var xdiff = e.pageX - currentX;
                        currentX = e.pageX;
                        if (currentY == '') currentY = e.pageY;
                        var ydiff = e.pageY - currentY;
                        currentY = e.pageY;
                        $(item).find('.cbp-caption-defaultWrap').each(function (i, el) {
                            var movement = (i + 1) * (xdiff * movementConstant),
                                movementy = (i + 1) * (ydiff * movementConstant),
                                newX = $(el).position().left + movement,
                                newY = $(el).position().top + movementy;
                            $(el).find('img').css({
                                "-webkit-transform": "translate(" + newX + "px," + newY + "px) scale(1.06)"
                            });
                        });
                    });
                });
                $(this).on("mouseleave", function (e) {
                    $(this).find('img').css({
                        "-webkit-transform": "translate(0px,0px) scale(1.0)"
                    });
                });
            });
        }
    }
    if ($(".fitvids").exists()) {
        $(".fitvids").fitVids();
    }
    if ($("[data-property]").exists()) {
        $(".player").YTPlayer();
    }
    if ($('.timeline-container').exists()) {
        $('.timeline-container').each(function () {
            var $this = $(this);
            $(this).find('.dates div').each(function () {
                var eventID = $(this).data('event-id'),
                    activeDate = $($this).data('active-date');
                $($this).find('#' + activeDate).addClass('active');
                $($this).find('[data-event-id="' + activeDate + '"]').addClass('active');
                $(this).mouseenter(function () {
                    $($this).find('#' + activeDate).removeClass('active');
                    $($this).find('#' + eventID).addClass('active');
                    $($this).find('[data-event-id="' + activeDate + '"]').removeClass('active');
                });
                $(this).mouseleave(function () {
                    $($this).find('#' + activeDate).addClass('active');
                    $($this).find('[data-event-id="' + activeDate + '"]').addClass('active');
                    $($this).find('#' + eventID).removeClass('active');
                    $($this).find('#' + activeDate).addClass('active');
                });
            });
        });
    }
    if ($('.progress-bar').exists()) {
        $('.progress-bar').each(function () {
            var $this = $(this);
            $($this).waypoint(function () {
                var dataSource = $($this).attr('data-value');
                $($this).animate({
                    "width": dataSource + "%"
                }, 300);
                this.destroy();
            }, {
                offset: '100%'
            });
        });
    }
    $.fn.verticalPosition = function () {
        $('.vertical-center').each(function () {
            var itemH = $(this).height();
            $(this).css({
                "margin-top": -itemH / 2
            });
        });
    };
    $('body').verticalPosition();
    $('[data-toggle="tooltip"], .tooltip-item').each(function () {
        var self = $(this),
            prnt = $(self).parent();
        $(self).tooltip({
            html: true,
            container: prnt
        });
    });
    $(".active-me-with-click").each(function () {
        var item = $(this);
        $(window).on('click touchstart touch', function (event) {
            $(item).removeClass('active');
        });
        $(item).on('click touch', function () {
            $(item).toggleClass('active');
            return false;
        });
    });
    $('[data-toggle="popover"]').each(function () {
        var self = $(this),
            prnt = $(self).parent();
        $(self).popover({
            html: true,
            container: prnt
        });
    });
    $('[data-infocard]').each(function () {
        var item = $(this),
            target = $(this).data('infocard'),
            timer;
        $(item).on('mouseenter', function () {
            $(target).addClass('active');
            clearTimeout(timer);
            $(".icon-navigation").addClass("passive");
        });
        $(target).on('mouseenter', function () {
            $(target).addClass('active');
            clearTimeout(timer);
            $(".icon-navigation").addClass("passive");
        });
        $(item).on('mouseleave', function () {
            timer = setTimeout(function () {
                $(target).removeClass('active');
                $(".icon-navigation").removeClass("passive");
            }, 250);
        });
        $(target).on('mouseleave', function () {
            timer = setTimeout(function () {
                $(target).removeClass('active');
                $(".icon-navigation").removeClass("passive");
            }, 250);
        });
    });
    $("[data-gradient-bg]").each(function () {
        var grSRC = $(this).data('gradient-bg'),
            grSize = $(this).data('gradient-size');
        $(this).css({
            'background': 'linear-gradient(90deg,' + grSRC + ')',
            'background-size': grSize + '%' + grSize + '%'
        });
    });
    if ($('#quadra_fixed_modal').exists()) {
        $.fn.qfmScript = function () {
            $('#quadra_fixed_modal:not(.hiding)').each(function () {
                var $qfm = $(this),
                    $qfmtop = $(this).find('.quadra_fixed_modal_top'),
                    $qfmtitle = $(this).find('#qfm_title'),
                    $qfmbutton = $(this).find('#qfm_button');
                $('.quadra_fixed_modal_top, .qfm-trigger').on('click', function () {
                    $qfm.toggleClass('active force-show');
                    $('body').toggleClass('qdr-modal-open');
                    $qfmtop.delay(400).toggleClass('open_modal');
                    $qfmtitle.delay(100).fadeToggle(900);
                    $qfmbutton.delay(100).fadeToggle(900);
                    $qfm.animate({
                        scrollTop: 0
                    }, "fast");
                    return false;
                });
                $(document).keyup(function (e) {
                    if (e.keyCode == 27) {
                        $qfm.removeClass('active force-show');
                        $('body').removeClass('qdr-modal-open');
                        $qfmtop.delay(400).removeClass('open_modal');
                        $qfmtitle.delay(100).fadeOut(900);
                        $qfmbutton.delay(100).fadeIn(900);
                        $qfm.animate({
                            scrollTop: 0
                        }, "fast");
                    }
                });

                function showHideQFM() {
                    if ($qfm.data('showme') && $qfm.data('hideme')) {
                        var showMe = $qfm.data('showme'),
                            hideMe = $qfm.data('hideme'),
                            winHeight = $(window).outerHeight(),
                            showMeP = $(showMe).offset().top,
                            hideMeP = $(hideMe).offset().top,
                            nowP = $(this).scrollTop();
                        if (nowP >= showMeP - winHeight && nowP <= hideMeP - winHeight) {
                            $qfm.addClass("clickable");
                            $('.drop-msg, #back-to-top').addClass('qfm-time');
                        } else {
                            $qfm.removeClass("clickable");
                            $('.drop-msg, #back-to-top').removeClass('qfm-time');
                        }
                    }
                }
                window.onscroll = showHideQFM;
            });
        }
        $(window).qfmScript();
    }
    $('#qfm_button span.hide-modal').on('click touch', function () {
        $('#quadra_fixed_modal').removeClass('.active .clickable').addClass('hiding');
        $('body').addClass('qfm-hiding');
        $('.drop-msg, #back-to-top').removeClass('qfm-time').addClass('modal-hiding');
        return false;
    });
    $(window).on('click touchstart touch', function (event) {
        $('.quick-contact-form').fadeOut("fast").removeClass('active');
        $('body').removeClass('quick-contact-form-active');
    });
    $('.drop-msg, .quick-contact-form-trigger').on('click touch', function () {
        $('.quick-contact-form').fadeToggle("fast").toggleClass('active');
        $('body').toggleClass('quick-contact-form-active');
        return false;
    });
    $('.quick-contact-form, .drop-msg, .quick-contact-form-trigger, #error_message').on('click touch touchstart', function (event) {
        event = event || window.event;
        event.stopPropagation();
    });
    if ($('.waypoint').exists()) {
        $('.waypoint').each(function () {
            var $this = $(this);
            $($this).waypoint(function () {
                $($this).addClass('waypoint-active');
            }, {
                offset: '75%'
            });
        });
    }
    if ($('footer.footer-fixed').exists()) {
        var footer = $('footer.footer-fixed'),
            footerH = $(footer).outerHeight();
        $('<div class="fullwidth bg-transparent footer-keeper" style="height:' + footerH + 'px;"></div> ').insertAfter(footer);
        $('body').addClass('footer-fixed-page');
        $(window).resize(function () {
            var footerH = $(footer).outerHeight();
            $('.footer-keeper').height(footerH);
        });
    }
    $('button.dropdown-toggle + .dropdown-menu').each(function () {
        var target = '#' + $(this).attr('aria-labelledby'),
            self = $(this);
        $(self).find('li').on('click', function () {
            var cache = $(target).children();
            var detail = $(this).find('div').html();
            $(target).text(detail).append(cache);
        });
    });
    $('.quantity').each(function () {
        var minus = $(this).find('.minus'),
            plus = $(this).find('.plus'),
            numbers = $(this).find('.numbers');
        $(plus).on('click', function () {
            $(numbers).val(parseInt($(numbers).val(), 10) + 1);
        });
        $(minus).on('click', function () {
            $(numbers).val(parseInt($(numbers).val(), 10) - 1);
        });
    });
    if ($('#type').exists()) {
        $("#type").typed({
            stringsElement: $('#type-get'),
            typeSpeed: 10,
            backDelay: 800,
            loop: true,
            contentType: 'html',
            loopCount: false,
            showCursor: true,
            resetCallback: function () {
                newTyped();
            }
        });
    }
    if ($('.text-typer').exists()) {
        $(".text-typer").each(function () {
            var self = $(this),
                delay = $(self).data('delay'),
                speed = $(self).data('speed');
            $(self).typed({
                stringsElement: $(self).find('.text-get'),
                typeSpeed: speed,
                backDelay: delay,
                loop: true,
                contentType: 'html',
                loopCount: false,
                showCursor: true,
                resetCallback: function () {
                    newTyped();
                }
            });
        });
    }
    if ($(".text-rotator").exists()) {
        $('.text-rotator').each(function () {
            var animateType = $(this).attr('data-animation'),
                speed = $(this).attr('data-speed');
            $(this).Morphext({
                animation: animateType,
                separator: ",",
                speed: speed,
            });
        })
    }
    if ($(".twitter-feed").exists()) {
        $('.twitter-feed').each(function () {
            var twitterFeeder = $(this),
                username = $(twitterFeeder).data('username'),
                count = $(twitterFeeder).data('count'),
                gap = $(twitterFeeder).data('gap');
            $(twitterFeeder).html('Loading Tweets...');
            $.getJSON("php/twitter.php?un=" + username + "&count=" + count, function (data) {
                $(twitterFeeder).empty();
                var items = [];
                $.each(data, function (key, val) {
                    items.push("<li id='" + key + "'><a href='#" + val.id + "' target='_blank'><i class='fa fa-twitter'></i><span class='tweetText'>" + val.text + "</span>...<span class='postDate'>Posted on " + val.date + "</span></a></li>");
                });
                $("<ul/>", {
                    "class": "twitter-list",
                    html: items.join("")
                }).appendTo(twitterFeeder);
                $(twitterFeeder).find('ul.twitter-list').addClass("gap-" + gap + "");
                if ($('.twitter-feed').hasClass('slider')) {
                    var sliderFeeder = $('.twitter-feed.slider');
                    $(sliderFeeder).find('ul.twitter-list').addClass("twitter-slider circle-dots").slick({
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    });
                }
                $(twitterFeeder).find(".tweetText").text(function (index, currentText) {
                    return currentText.substr(0, 125);
                });
            });
        });
    }
    $(function () {
        var ink, d, x, y;
        $(".click-effect").on("click", function (e) {
            if ($(this).find(".ink").length === 0) {
                $(this).prepend("<span class='ink'></span>");
            }
            ink = $(this).find(".ink");
            ink.removeClass("clicked");
            if (!ink.height() && !ink.width()) {
                d = Math.max($(this).outerWidth(), $(this).outerHeight());
                ink.css({
                    height: d,
                    width: d
                });
            }
            x = e.pageX - $(this).offset().left - ink.width() / 2;
            y = e.pageY - $(this).offset().top - ink.height() / 2;
            ink.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("clicked");
        });
    });
    $('body').scrollspy({
        target: ".nav-menu",
        offset: 200
    });
    $('body').scrollspy({
        target: "menus",
        offset: 250
    });
    $("#navigation.sticky").sticky({
        topSpacing: 0
    });
    $('#navigation .dropdown-toggle').each(function () {
        $(this).on('mouseenter', function () {
            var $this = $(this),
                $item = $($this).find('>.dropdown-menu');
            $($item).show(0);
            var navTop = $('#navigation').offset().top,
                navHeight = $('#navigation').outerHeight(),
                itemTop = ($($item).offset().top - navTop) + navHeight,
                itemWidth = $($this).outerWidth(),
                itemHeight = $($item).outerHeight(),
                wWidth = $(window).outerWidth(),
                wHeight = $(window).outerHeight(),
                ofRight = (wWidth - ($item.offset().left + $item.outerWidth())),
                thisRight = (wWidth - ($this.offset().left + $this.outerWidth())),
                ofBottom = (wHeight - (itemTop + $item.outerHeight()));
            if (ofRight < 30) {
                if ($($item).hasClass('mega-menu') && !$('#navigation').hasClass('side-menu')) {
                    $($item).addClass('to-left').css({
                        'right': -thisRight + 50 + 'px'
                    });
                } else {
                    $($item).removeClass('to-right to-center').addClass('to-left');
                }
            }
            if (ofBottom < 10) {
                if (!$($item).hasClass('mega-menu') && !$('#navigation').hasClass('side-menu') && $(this).closest(".dropdown-menu").length > 0) {
                    $($item).css({
                        'top': (wHeight - (itemTop + itemHeight)) + 50 + 'px'
                    })
                }
            } else {
                if ($(this).closest(".dropdown-menu").length > 0) {
                    $($item).css({
                        'top': '0px'
                    });
                } else {
                    $($item).css({
                        'top': '100%'
                    });
                }
            }
            $('#navigation .dropdown-toggle').not(this).not($(this).parents('.dropdown-toggle')).not($(this).find('.dropdown-toggle')).find('.dropdown-menu').stop(true, true).hide(0);
        });
        $(this).on('mouseleave', function () {
            var $this = $(this),
                $item = $($this).find('>.dropdown-menu');
            if (!$(this).parents('.dropdown-toggle').length) {
                $($item).stop(true, true).delay(600).hide(0);
            } else {
                $($item).hide(0);
            }
            if ($(this).closest(".dropdown-menu").length > 0) {
                $($item).css({
                    'top': '0px'
                });
            } else {
                $($item).css({
                    'top': '100%'
                });
            }
        });
        $('#navigation .nav>li:not(.dropdown-toggle)').on('mouseenter', function () {
            $('#navigation .nav>.dropdown-toggle>.dropdown-menu').stop(true, true).hide(0);
        });
    });
    $('#navigation.side-menu .dropdown-toggle').each(function () {
        $(this).on('mouseenter', function () {
            var $this = $(this),
                $item = $($this).find('>.dropdown-menu'),
                navTop = $('#navigation').offset().top,
                itemTop = $item.offset().top,
                itemHeight = $item.height(),
                wHeight = $(window).height(),
                itemPos = wHeight - (itemTop - navTop) - itemHeight;
            if (itemPos < 0) {
                $($item).css({
                    'top': +(itemPos) - 20 + 'px'
                });
            }
        });
    });
    $('.to-center').each(function () {
        var menuW = $(this).outerWidth();
        if ($(window).width() > 1200) {
            $(this).css({
                'left': -menuW / 2 + 40 + 'px'
            });
        }
    });
    if ($('#navigation .item-note').exists()) {
        $('#navigation .nav-menu .item-note').each(function () {
            $(this).closest('a').addClass('item-noted');
        })
    }
    $('.mega-menu').css({
        'max-width': $(window).width() - 40 + 'px'
    });
    $(window).resize(function () {
        $('.mega-menu').css({
            'max-width': $(window).width() - 40 + 'px'
        });
    });
    var $navigationJump = $('#navigation.modern.jump');
    var navigationShrink = $('#navigation.modern.shrink');
    $($navigationJump).addClass('stability');
    var normalIMG = $('#navigation .logo img:not(.retina-logo)'),
        firstLogo = $(normalIMG).attr('src'),
        secondLogo = $(normalIMG).data('second-logo'),
        retinaIMG = $('#navigation .logo img.retina-logo'),
        firstRetinaLogo = $(retinaIMG).attr('src'),
        secondRetinaLogo = $(retinaIMG).data('second-logo');
    window.scrollBy(0, -1);
    $.fn.shrinkActive = function () {
        $(navigationShrink).addClass('scrolled');
        $(navigationShrink).find(normalIMG).attr('src', secondLogo);
        $(navigationShrink).find(retinaIMG).attr('src', secondRetinaLogo);
    }
    $.fn.shrinkDisable = function () {
        $(navigationShrink).removeClass('scrolled');
        $(navigationShrink).find(normalIMG).attr('src', firstLogo);
        $(navigationShrink).find(retinaIMG).attr('src', firstRetinaLogo);
    }
    $.fn.scrollUpNav = function () {
        $navigationJump.removeClass('scrolled nav_up').addClass('stability').find(normalIMG).attr('src', firstLogo);
        $($navigationJump).find(retinaIMG).attr('src', firstRetinaLogo);
    }
    $.fn.scrollDownNav = function () {
        if ($navigationJump.hasClass('stability')) {
            $navigationJump.addClass('nav_up');
            setTimeout(function () {
                $navigationJump.addClass('scrolled')
            }, 0);
            setTimeout(function () {
                $($navigationJump).find(normalIMG).attr('src', secondLogo);
                $($navigationJump).find(retinaIMG).attr('src', secondRetinaLogo);
            }, 100);
            setTimeout(function () {
                $navigationJump.removeClass('nav_up stability')
            }, 200);
            $("#navigation.jump.pagetopped .logo img:not(.retina-logo)").attr('src', secondLogo);
            $("#navigation.jump.pagetopped .logo img.retina-logo").attr('src', secondRetinaLogo);
        }
    }
    $(window).on("scroll", function () {
        var $navigationJumpNorm = $('#navigation.jump.scrolled:not(.pagetopped)');
        if ($("#pagetop").exists()) {
            var $pagetopH = $('#pagetop').height() * 3;
            if ($(this).scrollTop() > $pagetopH) {
                $('#navigation').scrollDownNav();
            } else {
                $('#navigation').scrollUpNav();
            }
            if ($(this).scrollTop() > $pagetopH * 3) {
                $($navigationJump).addClass('show')
            } else {
                $($navigationJump).removeClass('show')
            }
        } else {
            if ($(window).scrollTop() > 100) {
                $('#navigation').scrollDownNav();
            } else {
                $('#navigation').scrollUpNav();
            }
        }
        if ($(this).scrollTop() > 0) {
            if (!$(navigationShrink).hasClass("scrolled")) {
                $(navigationShrink).shrinkActive();
            }
        } else {
            if ($(navigationShrink).hasClass("scrolled")) {
                $(navigationShrink).shrinkDisable();
            }
        }
        if ($('#navigation-sticky-wrapper').exists()) {
            if ($('#navigation-sticky-wrapper').hasClass('is-sticky') && $(this).scrollTop() > 100) {
                $(navigationShrink).shrinkActive();
            } else {
                $(navigationShrink).shrinkDisable();
            }
        }
    });
    $('<div class="mobile-nb"><div class="hamburger-menu"><div class="top-bun"></div><div class="meat"></div><div class="bottom-bun"></div></div></div>').insertAfter("#navigation div.logo");
    $('.mobile-nb').on("click", function () {
        setTimeout(function () {
            $('#mobile-navigation').addClass("active");
        }, 300);
        $('#mobile-navigation-closer').fadeIn();
    });
    $('<div id="mobile-navigation" class="nav-menu"><div class="mb-close"></div><div class="nav-el"></div><div class="pagetop"></div></div>').insertAfter('#navigation');
    var $navMenus = $('#navigation .nav-menu, #punch-navigation').html(),
        $navEl = $('#navigation .nav-elements').html(),
        $navTop = $('#pagetop').html();
    $($navMenus).insertBefore('#mobile-navigation .nav-el');
    if ($('#navigation .columns .nav-menu').length > 1) {
        var $lastMenu = $('#navigation .nav-menu:last-child > ul').html();
        $($lastMenu).insertAfter("#mobile-navigation .nav li:last-child");
    }
    $('#mobile-navigation .nav-el').append($navEl);
    if ($('#pagetop').exists()) {
        $('#mobile-navigation .pagetop').append($navTop);
    }
    if ($('#mobile-navigation .search-form-trigger').exists()) {
        $('#mobile-navigation .search-form-trigger').appendTo('#mobile-navigation .nav-el');
    }
    if ($('#navigation.side-menu .search').exists()) {
        $('#mobile-navigation .nav-el').append('<a href="#" class="search-form-trigger"><i class="fa fa-search"></i></a>');
    }
    if ($('#navigation.side-menu .menu-bottom').exists()) {
        var mBottom = $('#navigation.side-menu .menu-bottom').html();
        $('#mobile-navigation .pagetop').append(mBottom);
    }
    var $desktopLogo = $('#navigation .logo img').attr('src');
    $.fn.changeMobileLogo = function () {}
    $(window).changeMobileLogo();
    $('<div id="mobile-navigation-closer"></div><textarea id="math" style="display:none;"></textarea>').insertAfter("#mobile-navigation");
    $('#mobile-navigation-closer, .search-form-trigger, .mb-close').on("click", function () {
        $('#mobile-navigation').removeClass("active");
        setTimeout(function () {
            $('#mobile-navigation-closer').fadeOut();
        }, 300);
    });
    $('#mobile-navigation li.dropdown-toggle > a').append('<i></i>');
    $("#mobile-navigation .dropdown-toggle>a").not('.cart-item').on("click touch", function () {
        $(this).toggleClass('showing').closest('li').find('> ul.dropdown-menu').slideToggle({
            duration: 300,
            easing: "easeInOutQuart"
        });
        return false;
    });
    if ($(window).width() > 1120) {
        $('#pagetop').each(function () {
            var itemH = $(this).outerHeight(),
                bigNav = $('#navigation.modern').not('.sticky, .static');
            bigNav.addClass('pagetopped').css("margin-top", itemH + 'px');
        });
    }
    $("a[href^='#']:not([href='#']):not(.no-scroll):not([data-slide]):not([data-toggle])").on('click touch', function (event) {
        var $anchor = $(this),
            headerOffset = $('#navigation').data("offset"),
            $target = $($anchor).attr('href');
        event.preventDefault();
        if ($($target).length) {
            if ($('#navigation').length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - headerOffset + "px"
                }, 1150, 'easeInOutExpo');
            } else {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 900, 'easeInOutExpo');
            }
        }
    });
    $("a[href='#top']").on('click', function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1400, 'easeInOutExpo');
    });
    if ($('.hide-by-scroll').exists() || $('#back-to-top').exists() || $('.hide-on-home').exists()) {
        $("#back-to-top, .hide-on-home").hide();
        var position = $(window).scrollTop();
        $(window).on("scroll touchmove", function () {
            var scroll = $(window).scrollTop();
            if (scroll > position - 1 && scroll > 700) {
                $('.hide-by-scroll').addClass('hiding');
            } else {
                $('.hide-by-scroll').removeClass('hiding');
            }
            position = scroll;
            if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                $('.hide-by-scroll').removeClass('hiding');
            }
            if ($(this).scrollTop() > 500) {
                $('#back-to-top, .hide-on-home').fadeIn();
            } else {
                $('#back-to-top, .hide-on-home').fadeOut();
            }
        });
    }
    $('.hide-by-click').on('click', function () {
        $(this).fadeOut('slow');
    });
    if ($('#side-dotted-navigation').exists()) {
        var self = $('#side-dotted-navigation');
        $(self).on('mouseenter', function () {
            $(this).removeClass('spy');
        })
        $(self).on('mouseleave', function () {
            $(this).addClass('spy');
        })
        $(self).on('click touch touchstart', function () {
            event = event || window.event;
            event.stopPropagation();
        });
    }
    $.fn.showPunchNavigation = function () {
        $('#punch-navigation').addClass('activated');
        $('#punch-navigation .shadow').fadeIn(300);
        $('body').addClass('o-hidden');
        $('.top-elements, .bottom-elements, div.navblock *').delay(950).fadeIn(300);
        $('body').calculateWidth();
    };
    $.fn.hidePunchNavigation = function () {
        $('.top-elements, .bottom-elements, div.navblock>*').fadeOut(300);
        $('#punch-navigation .shadow').delay(1000).fadeOut(300);
        setTimeout(function () {
            $('#punch-navigation').addClass('closing');
            $('body').removeClass('o-hidden');
            $('body').calculateWidth();
        }, 100);
        setTimeout(function () {
            $('#punch-navigation').removeClass('closing activated');
        }, 1400);
    };
    $('.punch-navigation-trigger').on('click', function () {
        if (!$('#punch-navigation').hasClass('activated')) {
            $('body').showPunchNavigation();
        } else {
            $('body').hidePunchNavigation();
        }
        if ($(window).width() < 1120) {
            setTimeout(function () {
                $('#mobile-navigation').animate({
                    left: '0px'
                }, 400, 'easeOutSine');
            }, 300);
            $('#mobile-navigation-closer').fadeIn();
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if ($('#punch-navigation').hasClass('activated')) {
                $('body').hidePunchNavigation();
            }
        }
    });
    $('#punch-navigation .navblock a').not('.nav-title, .nav-subtitle').on('click', function () {
        var Exlink = this.getAttribute('href');
        $('body').hidePunchNavigation();
        setTimeout(function () {
            document.location.href = Exlink;
        }, 1500);
        return false;
    });
    $('#punch-navigation a.nav-title').on('click', function () {
        return false;
    });
    if ($('.fs-searchform').exists()) {
        var trigger = $('.search-form-trigger'),
            form = $('.fs-searchform');
        $(trigger).on('click touch', function (event) {
            $(form).addClass('active');
            setTimeout(function () {
                $('.fs-searchform input').focus();
            }, 900);
            return false;
        });
        $('.form-bg').on('click', function () {
            $('.fs-searchform').removeClass('active');
        });
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                $('.fs-searchform').removeClass('active');
            }
        });
        $('.fs-searchform a').on('click', function () {
            var Exlink = this.getAttribute('href');
            $('.fs-searchform').removeClass('active');
            setTimeout(function () {
                document.location.href = Exlink;
            }, 500);
            return false;
        });
    }
    var rnuma = Math.floor(Math.random() * 5);
    var rnumb = Math.floor(Math.random() * 5);
    var sum = rnuma + rnumb;
    $("#math").html(sum);
    $("#verify").attr("placeholder", rnuma + "+" + rnumb + "= ?");
    var validator = $('#contact_form, .quick_form, #newsletter_form');
    var maxSize = $(validator).attr("data-max-file-size"),
        fileSizeError = $(validator).attr("data-max-file-size-error");
    $.validator.addMethod('filesize', function (value, element, param) {
        return this.optional(element) || (element.files[0].size <= param)
    }, $("<span id='max_size'>" + fileSizeError + "</<span>").appendTo(".inputfile + label"));
    $(validator).each(function () {
        var sendBtn = $(this).find(':submit'),
            $this = $(this),
            timer = window.setTimeout(3500);
        $(this).validate({
            ignore: ".ignore",
            rules: {
                verify: {
                    equalTo: "#math"
                },
                hiddenRecaptcha: {
                    required: function () {
                        if (grecaptcha.getResponse() === '') {
                            $('.g-recaptcha').addClass('error_warning');
                            return true;
                        } else {
                            $('.g-recaptcha').removeClass('error_warning');
                            return false;
                        }
                    }
                },
                userfile: {
                    required: true,
                    filesize: maxSize
                }
            },
            onfocusout: false,
            showErrors: function (map, list) {
                this.currentElements.removeClass("error_warning");
                this.currentElements.closest('.border-effect').removeClass('error_warning');
                $.each(list, function (index, error) {
                    window.clearTimeout(timer);
                    $(error.element).addClass("error_warning");
                    $(error.element).closest('.border-effect').addClass('error_warning');
                    $("div#error_message").fadeIn(300).clearQueue();
                    $("div#error_message").on("click", function () {
                        $(this).fadeOut("fast");
                        window.clearTimeout(timer);
                    });
                    timer = window.setTimeout(function () {
                        $("div#error_message").fadeOut("fast");
                    }, 3500);
                });
            },
            submitHandler: function (form) {
                $(sendBtn).not('.loading').addClass('loading').append("<span class='loader'></span>");
                $.ajax({
                    url: form.action,
                    type: form.method,
                    data: new FormData($(form)[0]),
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function () {
                        $("div#error_message").fadeOut("fast");
                        $("div#submit_message").fadeIn("fast");
                        $(validator).find(".inputfile + label span").empty();
                        setTimeout(function () {
                            $("div#submit_message").fadeOut("fast");
                        }, 5000);
                        $(sendBtn).removeClass('loading');
                        $(validator).trigger("reset");
                    }
                });
            }
        });
    });
    var $newsletterForm = $('form#newsletter_form'),
        sendBtn = $($newsletterForm).find('button');
    $($newsletterForm).validate({
        showErrors: function () {
            this.currentElements.removeClass("error_warning");
            this.currentElements.closest('.border-effect').removeClass('error_warning');
        },
        submitHandler: function () {
            $(sendBtn).not('.loading').addClass('loading').append("<span class='loader'></span>");
            $.ajax({
                url: $newsletterForm.action,
                type: $newsletterForm.method,
                data: $newsletterForm.serialize(),
                cache: false,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function () {
                    $("div#error_message").removeClass("active");
                    $("div#submit_message").addClass("active");
                    setTimeout(function () {
                        $("div#submit_message").removeClass("active");
                    }, 5000);
                    $(sendBtn).removeClass('loading');
                    $($newsletterForm).trigger("reset");
                }
            });
        }
    });
    $('.qdr-alert-trigger').each(function () {
        var self = $(this),
            target = $(self).data('target'),
            timer;
        $(self).on('click', function () {
            clearTimeout(timer);
            $(target).fadeOut(0).stop().clearQueue();
            setTimeout(function () {
                $(target).fadeIn(300)
            }, 1);
            timer = setTimeout(function () {
                $(target).fadeOut(300);
            }, 3000);
        });
    });
    jQuery('span.border-effect').each(function () {
        var $this = $(this);
        $($this).find('*').on('blur', function () {
            $($this).removeClass('active');
        }).on('focus', function () {
            $($this).addClass('active');
        });
    });
    $.fn.callLightboxGallery = function () {
        $('.lightbox_gallery').lightGallery({
            selector: 'a:not(.no-lightbox)',
            download: true,
            speed: 400,
            loop: true,
            controls: true,
            thumbWidth: 100,
            thumbContHeight: 100,
            thumbnail: true,
            thumbMargin: 8,
            share: true,
            cssEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            loadYoutubeThumbnail: true,
            youtubeThumbSize: 'default',
            iframeMaxWidth: '75%',
            loadVimeoThumbnail: true,
            vimeoThumbSize: 'thumbnail_medium',
            youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0
            },
            vimeoPlayerParams: {
                byline: 0,
                portrait: 0,
                color: 'A90707'
            }
        });
        $('.lightbox_gallery:not(.no-lightbox)').addClass('lightboxed');
    }
    if ($(".lightbox_gallery").exists()) {
        $(window).callLightboxGallery();
    }
    $.fn.callLightboxSelected = function () {
        $('.lightbox_selected').lightGallery({
            selector: 'a.lightbox_item',
            download: true,
            speed: 500,
            loop: true,
            controls: true,
            thumbWidth: 100,
            thumbContHeight: 100,
            thumbMargin: 8,
            thumbnail: true,
            share: true,
            cssEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            loadYoutubeThumbnail: true,
            youtubeThumbSize: 'default',
            loadVimeoThumbnail: true,
            iframeMaxWidth: '75%',
            vimeoThumbSize: 'thumbnail_medium',
            youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0
            },
            vimeoPlayerParams: {
                byline: 0,
                portrait: 0,
                color: 'A90707'
            }
        });
    }
    if ($(".lightbox_selected").exists()) {
        $(window).callLightboxSelected();
    }
    $.fn.callLightbox = function () {
        $('.lightbox').lightGallery({
            selector: 'this',
            download: true,
            thumbWidth: 100,
            thumbContHeight: 100,
            thumbnail: true,
            share: true,
            loadYoutubeThumbnail: true,
            youtubeThumbSize: 'default',
            iframeMaxWidth: '75%',
            loadVimeoThumbnail: true,
            youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0
            },
            vimeoPlayerParams: {
                byline: 0,
                portrait: 0,
                color: 'A90707'
            }
        });
    }
    if ($(".lightbox").exists()) {
        $(window).callLightbox();
    }
    if ($(".slider-for").exists()) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            touchThreshold: 150,
            fade: true,
            asNavFor: '.slider-nav'
        });
    }
    if ($(".slider-nav").exists()) {
        $('.slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            touchThreshold: 150,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true
        });
    }
    if ($(".news-slider").exists()) {
        $(".news-slider").slick({
            dots: false,
            arrows: true,
            infinite: true,
            touchThreshold: 150,
            fade: true,
            slidesToShow: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev qdr-hover" tabindex="0" role="button"></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next qdr-hover" tabindex="0" role="button"></button>',
            slidesToScroll: 1
        });
    }
    if ($(".background-slider").exists()) {
        $(".background-slider").slick({
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            touchThreshold: 150,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        $('.slider-next-trigger').on("click", function () {
            $(".background-slider").slick('slickNext');
        });
        $('.slider-prev-trigger').on("click", function () {
            $(".background-slider").slick('slickPrev');
        });
    }
    if ($(".image-slider").exists()) {
        $(".image-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 20,
            adaptiveHeight: true
        }).on('afterChange', function (event, slick) {
            $('.custom-slider').slick("slickSetOption", "swipe", true);
        });
    }
    if ($(".custom-slider").exists()) {
        $('.custom-slider').each(function () {
            var $this = $(this);
            $($this).slick({
                fade: false,
                dots: false,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 3000,
                pauseOnHover: true,
                lazyLoad: 'ondemand',
                infinite: true,
                rtl: false,
                edgeFriction: 0,
                easing: 'linear',
                touchThreshold: 150,
                speed: 400,
                slidesToShow: 3,
                initialSlide: 0,
                draggable: false,
                adaptiveHeight: true,
                variableWidth: false,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" tabindex="0" role="button"></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" tabindex="0" role="button"></button>',
                centerMode: false,
                slidesToScroll: 1,
                setPosition: 1,
                swipe: true,
                touchMove: true,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }).on('afterChange', function (event, slick, currentSlide) {
                if ($($this).hasClass('hero-slider')) {
                    var items = $('.hero-slider .animated'),
                        current = $('.hero-slider .slick-current .animated'),
                        nCurrent = $('.hero-slider .slick-slide:not(.slick-current) .animated');
                    Waypoint.refreshAll();
                    $(current).each(function () {
                        var item = $(this),
                            animation = item.data('animation'),
                            animationDelay = item.data('animation-delay');
                        setTimeout(function () {
                            item.addClass(animation + " visibleme");
                        }, animationDelay);
                    });
                    $(nCurrent).each(function () {
                        var item = $(this),
                            animation = item.data('animation');
                        item.removeClass(animation + "visibleme");
                    });
                    $('.slick-current video').each(function () {
                        this.play();
                    });
                    $('.slick-slide:not(.slick-current) video').each(function () {
                        this.pause();
                    });
                    $($this).find('.slick-slide.slick-current .slide-img .scale-timer').addClass("scaling");
                }
            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if ($($this).hasClass('home-mid-custom-slider')) {
                    var $img = 'images/backgrounds/slide_' + currentSlide + '.jpg';
                    $('.slick-img').fadeTo('fast', 0.3, function () {
                        $(this).css('background-image', 'url(' + $img + ')');
                    }).fadeTo('fast', 1);
                }
                Waypoint.refreshAll();
                $(items).removeClass("visible");
                var nCurrent = $('.hero-slider .slick-slide:not(.slick-current) .animated'),
                    items = $('.hero-slider .animated');
                $(nCurrent).each(function () {
                    var item = $(this),
                        animation = item.data('animation'),
                        animationDelay = item.data('animation-delay');
                    $(item).removeClass(animation + " visibleme");
                });
                $($this).find('.slick-slide:not(slick-current) .slide-img .scale-timer').removeClass("scaling");
            });
        });
        $('.image-slider, .image-slider-navs, .image-slider-dots').on('touchstart touchmove touchend', function () {
            $('.custom-slider').slick("slickSetOption", "swipe", false);
        });
        $('.custom-slider').on('touchstart touchmove touchend', function () {
            $('.custom-slider').slick("slickSetOption", "swipe", true);
        });
        $('.slick-slider.calculate-height .slick-track').addClass('calculate-height');
        $(window).resize(function () {
            $('.slick-slider.calculate-height .slick-track').addClass('calculate-height');
        });
    }
    if ($(".hero-slider").exists()) {
        $('.hero-slider .slick-slide:not(.slick-current) .animated').removeClass('visible');
        $('.slick-slide.slick-current .slide-img .scale-timer').addClass("scaling");
        $('.hero-slider .slick-current .animated').each(function () {
            var item = $(this),
                animation = item.data('animation'),
                animationDelay = item.data('animation-delay');
            $(item).removeClass(animation);
            setTimeout(function () {
                item.addClass(animation + " visibleme");
            }, animationDelay);
        });
        $('.hero-slider-next').on("click", function () {
            $(".hero-slider").slick('slickNext');
        });
        $('.hero-slider-prev').on("click", function () {
            $(".hero-slider").slick('slickPrev');
        });
    }
    if ($(".nav-to-custom-slider").exists()) {
        $('.nav-to-custom-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.custom-slider',
            dots: false,
            touchThreshold: 50,
            arrows: false,
            centerMode: false,
            focusOnSelect: true
        });
    }
    if ($('[data-background-color-selector]').exists()) {
        $('[data-background-color-selector]').each(function () {
            var $this = $(this),
                colorSource = $($this).attr('data-background-color-selector'),
                colorHome = $('#home').attr('data-background-color-selector');
            $this.waypoint(function (direction) {
                if (direction === 'down') {
                    $('.bg-changeable').css({
                        "background-color": '#' + colorSource
                    });
                    $('.changeable-border').css({
                        "border-color": '#' + colorSource
                    });
                }
            }, {
                offset: '60%'
            });
            $this.waypoint(function (direction) {
                if (direction === 'up') {
                    $('.bg-changeable').css({
                        "background-color": '#' + colorSource
                    });
                    $('.changeable-border').css({
                        "border-color": '#' + colorSource
                    });
                }
            }, {
                offset: '-90%'
            });
            $(window).on("scroll", function () {
                if ($(window).scrollTop() < 10) {
                    $('.bg-changeable').css({
                        "background-color": '#' + colorHome
                    });
                    $('.changeable-border').css({
                        "border-color": '#' + colorHome
                    });
                }
            });
        });
    }
    $('.modal').each(function () {
        var $this = $(this),
            $slider = $(this).find('.slick-slider');
        $($this).on('show.bs.modal', function (e) {
            setTimeout(function () {
                $($slider).addClass('modal-active');
            }, 4000);
            if ($(window).width() > 992) {
                setTimeout(function () {
                    $($slider).slick('refresh');
                }, 300);
            } else {
                setTimeout(function () {
                    $($slider).resize();
                }, 400);
            }
        });
        $($this).on('hidden.bs.modal', function (e) {
            setTimeout(function () {
                $($slider).removeClass('modal-active');
            }, 400);
        });
    });
    $('.cbp-l-loadMore-button, [data-toggle]:not([data-toggle="popover"]), .cbp-filter-item, .cbp-l-loadMore-link').on('click', function () {
        setTimeout(function () {
            if (isParallaxBrowsers && mobile === false) {
                var s = skrollr.init({
                    forceHeight: false
                });
                s.refresh();
                $(".icon-navigation").addClass("slow");
            }
            Waypoint.refreshAll();
        }, 500);
        setTimeout(function () {
            $(".icon-navigation").removeClass("slow");
        }, 1400);
    });

    function detectWindowHeightChange(elm, callback) {
        var lastHeight = elm.clientHeight,
            newHeight;
        (function run() {
            newHeight = elm.clientHeight;
            if (lastHeight != newHeight)
                callback();
            lastHeight = newHeight;
            if (elm.onElementHeightChangeTimer)
                clearTimeout(elm.onElementHeightChangeTimer);
            elm.onElementHeightChangeTimer = setTimeout(run, 200);
        })();
    }
    detectWindowHeightChange(document.body, function () {
        if ($(".cbp-item:last-child").hasClass("cbp-item-loading")) {
            if ($(".lightbox_gallery").exists()) {
                $(".lightbox_gallery").data('lightGallery').destroy(true);
                $(window).callLightboxGallery();
            }
            if ($(".lightbox_selected").exists()) {
                $(".lightbox_selected").data('lightGallery').destroy(true);
                $(window).callLightboxSelected();
            }
            if ($(".lightbox").exists()) {
                $(".lightbox").data('lightGallery').destroy(true);
                $(window).callLightbox();
            }
        }
    });
    $(".slick-slider").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var current = $(this).find(".slick-current iframe");
        setTimeout(function () {
            current.attr('src', current.attr('src'));
        }, 1000);
        var dataSettings = $(this).data('slider-options') || {};
    });
    $.fn.calculateWidth = function () {
        $('.calculate-width').each(function () {
            var $this = $(this),
                tagCount = $(this).find('> *').not('.no-calculate').length,
                tags = $(this).find('> *').not('.no-calculate'),
                contWidth = $(this).width();
            $(this).addClass('clearfix');
            $(tags).addClass('width-calculated').css({
                'width': contWidth / tagCount + 'px'
            });
        });
    };
    $('body').calculateWidth();
    if ($(".interactive-packages").exists()) {
        $('.interactive-packages .steps .step').each(function () {
            var itemNr = $(".step").index(this) + 1,
                $this = $(this),
                stepW = $this.width(),
                startWith = $('.interactive-packages .steps').attr('data-startWith');
            $('.selector').css({
                'right': stepW / 2 + 'px'
            });
            $('.interactive-packages .package_title span.title_selector').text(($(startWith).data('name')));
            $('.interactive-packages .package-boxes .box1 span.box-title-selector').text(($(startWith).data('box1')));
            $('.interactive-packages .package-boxes .box2 span.box-title-selector').text(($(startWith).data('box2')));
            $('.interactive-packages .package-boxes .box3 span.box-title-selector').text(($(startWith).data('box3')));
            $('.interactive-packages .package-boxes .box4 span.box-title-selector').text(($(startWith).data('box4')));
            $this.on('click', function () {
                var stepWidth = $('.steps .step').width();
                $('.interactive_bar').css({
                    'width': itemNr * stepWidth + 'px'
                });
                $('.interactive-packages .title').removeClass('active');
                $('.interactive-packages .title:nth-child(' + itemNr + ')').addClass('active');
                $('.interactive-packages .package_title span.title_selector').text(($this.data('name')));
                $('.interactive-packages .package-boxes .box1 span.box-title-selector').text(($this.data('box1')));
                $('.interactive-packages .package-boxes .box2 span.box-title-selector').text(($this.data('box2')));
                $('.interactive-packages .package-boxes .box3 span.box-title-selector').text(($this.data('box3')));
                $('.interactive-packages .package-boxes .box4 span.box-title-selector').text(($this.data('box4')));
            });
        });
    }
    $(window).resize(function () {
        $('body').verticalPosition();
        $('body').makeFullscreen();
        $('.bodywidth').width($(window).width());
        $('body').calculateWidth();
        $('body').getDeviceWidth();
        $('body').animatedItems();
        $('.calculate-height').calculateHeight();
        $('.mnh-full').css({
            'min-height': $(window).height() + 'px'
        });
        $('.height-full').css({
            'height': $(window).height() + 'px'
        });
        $('.to-center').each(function () {
            var menuW = $(this).outerWidth();
            if ($(window).width() > 1200) {
                $(this).css({
                    'left': -menuW / 2 + 40 + 'px'
                });
                $('.mega-menu').removeClass('mini-screen');
            }
            if ($(window).width() < 1200) {
                $(this).css({
                    'left': -menuW / 3 + 150 + 'px'
                });
                $('.mega-menu').addClass('mini-screen')
            }
        });
        if ($(window).width() > 1120) {
            $('#pagetop').each(function () {
                var itemH = $(this).outerHeight(),
                    bigNav = $('#navigation.modern').not('.sticky, .static');
                bigNav.addClass('pagetopped').css("margin-top", itemH + 'px')
            });
        } else {
            $('#navigation.modern').not('.sticky, .static').css({
                "margin-top": 0
            });
        }
        if ($(window).width() < 769) {
            $("[data-mobile-background]").each(function () {
                var bgSRC = $(this).data('mobile-background');
                $(this).css({
                    'background-image': 'url(' + bgSRC + ')',
                    'background-size': 'cover !important'
                });
            });
        } else {
            $("[data-background]").each(function () {
                var bgSRC = $(this).data('background');
                $(this).removeClass('bg-mobiled').css({
                    'background-image': 'url(' + bgSRC + ')'
                });
            });
        }
    });
    var $pageloader = $('.page-loader');
    setTimeout(function () {
        $pageloader.addClass("page-loader--fading-out");
    }, 100);
    setTimeout(function () {
        $pageloader.removeClass("page-loader--fading-out").addClass("page-loader--hidden");
    }, 600);
    $("a:not(a[href^='#']):not([href='#']):not(.no-scroll):not(.lightbox):not(.lightbox_item):not([data-slide]):not([data-toggle]):not([target]):not(.cbp-lightbox):not(.cbp-singlePage):not(.cbp-l-loadMore-link):not(.more-post-button):not([rel]):not(.nl-field-toggle)").on('click touch', function () {
        var Exlink = this.getAttribute('href'),
            $elem = $(this);
        if (/\.(?:jpg|jpeg|gif|png|mp3|mp4)$/i.test($(this).attr('href'))) {} else {
            if ($elem.parents('.lightbox_gallery, #punch-navigation').length) {} else {
                setTimeout(function () {
                    document.location.href = Exlink;
                }, 400);
                if (mobile === true || isSafari || isFirefox) {
                    setTimeout(function () {
                        $pageloader.hide();
                    }, 1200);
                }
                return false;
            }
        }
    });
    $.fn.animatedItems = function () {
        if ($(window).width() > 1024 && mobile === false) {
            $('.animated').not('.hero-slider .animated').each(function () {
                var item = $(this),
                    animation = item.data('animation');
                $(item).waypoint(function () {
                    if (!item.hasClass('visible')) {
                        var animationDelay = item.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                item.addClass(animation + " visible");
                            }, animationDelay);
                        } else {
                            item.addClass(animation + " visible");
                        }
                    }
                }, {
                    offset: '90%'
                });
            });
        } else {
            $('.animated').not('.hero-slider .animated').addClass("visible")
        }
    }
    $("body").animatedItems();
    $(".bg-animated, .bg-animated-reverse, .bg-animated-vertical").each(function () {
        $("<div class='bg-animator'></div>").appendTo(this);
    });
    $.fn.calculateHeight = function () {
        $('.calculate-height').each(function () {
            var maxHeight = -1;
            $(this).find('>*').css({
                'height': 'auto'
            }).each(function () {
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });
            $(this).find('>*').outerHeight(maxHeight);
        });
    };
    $('.calculate-height').calculateHeight();
    $.fn.calculateHeight = function () {
        $('.calculate-height-520').each(function () {
            var maxHeight = '520px';
            $(this).find('>*').css({
                'height': 'auto'
            }).each(function () {
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });
            $(this).find('>*').outerHeight(maxHeight);
        });
    };
    $('.calculate-height-520').calculateHeight();
    if ($(".sticky-item").exists()) {
        $(".sticky-item").each(function () {
            var spacing = $(this).data('top-spacing');
            $(this).sticky({
                topSpacing: spacing
            });
        });
    }
    if ($(".sticky-container").exists()) {
        $(".sticky-container").each(function () {
            var $stick = $(this),
                $width = $($stick).width(),
                $stickTop = $($stick).offset().top,
                $container = $($stick).data('fix-container'),
                $contStart = $($container).offset().top,
                $contEnd = $($container).height() - $($stick).height(),
                $spacing = $($stick).data('top-spacing'),
                $endValue = $contStart + $($container).outerHeight() - $($stick).height();
            $(window).on("scroll", function () {
                $.fn.makeSticky = function () {
                    var now = $(window).scrollTop() + $spacing;
                    if (now < $stickTop) {
                        $($stick).css({
                            'top': '0px',
                            'position': 'absolute',
                            'max-width': $width + 'px'
                        }).addClass('before-cont').removeClass('on-cont after-cont');
                    }
                    if (now > $stickTop) {
                        $($stick).css({
                            'top': $spacing + 'px',
                            'position': 'fixed',
                            'max-width': $width + 'px'
                        }).addClass('on-cont').removeClass('before-cont after-cont');
                    }
                    if (now > $endValue) {
                        $($stick).css({
                            'top': $contEnd + 'px',
                            'position': 'absolute',
                            'max-width': $width + 'px'
                        }).addClass('after-cont').removeClass('before-cont on-cont');
                    }
                };
                if ($($container).has($stick) && $(window).width() > 1000) {
                    $($stick).makeSticky();
                }
            });
        });
    }
    if ($("[data-ajax-load]").exists()) {
        $('[data-ajax-load]').each(function () {
            var value = $(this).data("ajax-load"),
                $this = $(this);
            $(this).empty().load(value, function () {
                if ($($this).hasClass('ajax-slider')) {
                    var $sldr = $(this).find('.custom-slider');
                    $sldr.slick();
                }
            });
        });
    }
});
$("[data-background]").not('.bg-mobiled').each(function () {
    var bgSRC = $(this).data('background');
    var self = $(this);
    $(this).css({
        'background-image': 'url(' + bgSRC + ')'
    });
    $(self).ready(function () {
        setTimeout(function () {
            $(self).addClass('loaded');
        }, 50);
    });
});
$('body').has('#navigation.side-menu.left').addClass('left-side-menu-active');
$('body').has('#navigation.side-menu.right').addClass('right-side-menu-active');
$('body').has('#navigation.mini-side-menu.left').addClass('left-mini-side-menu-active');
$('body').has('#navigation.mini-side-menu.right').addClass('right-mini-side-menu-active');
$('.bg-parallax').each(function () {
    var $this = $(this);
    $($this).closest('section, .parallax-container').addClass('o-hidden relative z-index-1');
});
$.fn.makeFullscreen = function () {
    if ($('body').has('#navigation.side-menu') || $('body').has('#mini-side-menu')) {
        $('.fullscreen').width($('#content').width()).height($(window).height());
    } else {
        $('.fullscreen').width($(window).width()).height($(window).height());
    }
};
$('body').makeFullscreen();
$('.bodywidth').width($(window).width());
$('.mnh-full').css({
    'min-height': $(window).height() + 'px'
});
$('.height-full').css({
    'height': $(window).height() + 'px'
});
$.fn.countTo = function (options) {
    options = $.extend({}, $.fn.countTo.defaults, options || {});
    var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;
    return $(this).each(function () {
        var _this = this,
            loopCount = 0,
            value = options.from,
            interval = setInterval(updateTimer, options.refreshInterval);

        function updateTimer() {
            value += increment;
            loopCount++;
            $(_this).html(value.toFixed(options.decimals).replace(/\B(?=(\d{3})+(?!\d))/g, "."));
            if (typeof (options.onUpdate) === 'function') {
                options.onUpdate.call(_this, value);
            }
            if (loopCount >= loops) {
                clearInterval(interval);
                value = options.to;
                if (typeof (options.onComplete) === 'function') {
                    options.onComplete.call(_this, value);
                }
            }
        }
    });
};
$.fn.countTo.defaults = {
    from: 0,
    to: 100,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null,
};
$('.fact').each(function () {
    $(this).waypoint(function () {
        var dataSource = $(this.element).attr('data-source');
        $(this.element).find('.factor').countTo({
            from: 0,
            to: dataSource,
            speed: 2000,
            refreshInterval: 25
        });
        this.destroy();
    }, {
        offset: '100%'
    });
});
$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
    });
}
$(".digits").digits();
if ($('.countdown').length > 0) {
    $(".countdown").each(function () {
        var $this = $(this),
            Dtimer = $(this).attr("data-time");
        CountDownTimer(Dtimer);

        function CountDownTimer(dt) {
            var end = new Date(dt),
                _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24,
                _year = _day * 365,
                timer, cls = $($this);

            function showRemaining() {
                var now = new Date();
                var distance = end - now;
                if (distance < 0) {
                    clearInterval(timer);
                    $($this).html('EXPIRED');
                    return;
                }
                var years = Math.floor(distance / _year),
                    days = Math.floor((distance % _year) / _day),
                    hours = Math.floor((distance % _day) / _hour),
                    minutes = Math.floor((distance % _hour) / _minute),
                    seconds = Math.floor((distance % _minute) / _second);
                if (String(hours).length < 2) {
                    hours = 0 + String(hours);
                }
                if (String(minutes).length < 2) {
                    minutes = 0 + String(minutes);
                }
                if (String(seconds).length < 2) {
                    seconds = 0 + String(seconds);
                }
                var datestr = '<div class="countdowns"><div class="year"><span class="time">' + years + '</span>' + '<span class="datename"> years</span>' + '</div><span class="dot">:</span>' + '<div><span class="time">' + days + '</span>' + '<span class="datename"> days </span>' + '</div><span class="dot">:</span>' + '<div><span class="time">' + hours + '</span>' + '<span class="datename"> hours </span>' + '</div><span class="dot">:</span>' + '<div><span class="time">' + minutes + '</span>' + '<span class="datename"> minutes </span>' + '</div><span class="dot">:</span>' + '<div><span class="time">' + seconds + '</span>' + '<span class="datename"> seconds </span></div></div>';
                $($this).html(datestr);
                if (years < 1) {
                    $($this).find(".year, .year + .dot").hide();
                }
            }
            showRemaining(), timer = setInterval(showRemaining, 1000);
        }
    });
}
$(document).ready(function () {
    const fadeOne = $("#video_on_text");
    fadeOne.hide();

    function addSlic() {
        $('.fadin-1').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            fade: true,
            autoplay: true,
            cssEase: 'linear',
            arrows: false,
            prevArrow: false,
            nextArrow: false,
            autoplaySpeed: 10000,
        });
    }
    setTimeout(function () {
        fadeOne.fadeIn();
        addSlic()
        startFadeOne();
    }, 5000);

    function startFadeOne() {
        let sst = setInterval(function () {
            if (fadeOne.is(':visible')) {
                clearInterval(sst);
                setTimeout(function () {
                    fadeOne.fadeIn(300);
                    addSlic();
                    startFadeOne();
                }, 8000);
            }
        }, 35000);
    }

    function fadin1Interval() {
        setInterval(function () {
            if (fadeOne.is(':visible')) {
                fadeOne.fadeOut(1500);
            } else {
                fadeOne.fadeIn(300);
            }
        }, 15000);
    }
    $('.fadin').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        arrows: false,
        prevArrow: false,
        nextArrow: false
    });
});


