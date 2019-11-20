$(function () {
    "use strict";

    /*
***************************
    main section start
*/

    let arrImages = [
            'images/main/bg_main.jpg',
            'images/main/bg_main2.jpg'
        ],
        i = 1;

    function nextMainSlide() {
        if (i > arrImages.length - 1) {
            $('main').animate({
                'opacity': '0.9'
            }, 400, function () {
                i = 1;
                $(this).css({
                    'background': 'url(' + arrImages[0] + ') center no-repeat',
                    'background-size': 'cover'
                });
            });
            $('main').animate({
                'opacity': '1',
                'transition': 'all 0.9s ease-in-out'
            }, 400);
        } else {
            $('main').animate({
                'opacity': '0.9'
            }, 400, function () {
                $(this).css({
                    'background': 'url(' + arrImages[i] + ') center no-repeat',
                    'background-size': 'cover'
                });
                i++;
            });
            $('main').animate({
                'opacity': '1',
                'transition': 'all 0.9s ease-in-out'
            }, 400);
        }
    }

    setInterval(nextMainSlide, 5000);


    /*
***************************
    main section end
*/

    /*
***************************
    production section start
*/

    let $allSlidesPrd = $('.slider-box img'),
        $arrSliderSrc = [],
        $i = 0,
        $indexPrd = 0;

    $allSlidesPrd.each(function () {
        $arrSliderSrc[$i] = $(this).attr('src');
        $(this).remove();
        $i++;
    });

    function initPdr() {
        let i = 0,
            objImgPdr = [];

        $allSlidesPrd.each(function () {

            objImgPdr[i] = $('<img>').attr('src', $arrSliderSrc[i]);
            $('.slider-box').append(objImgPdr[i]);
            objImgPdr[i].css({
                'left': i * 100 - 100 + '%'
            });
            i++;
        });

    }

    initPdr();

    function getPrevSlide() {
        $('.arrow-left').off('click', getPrevSlide);
        let currentSlides = $('.slider-box img'),
            newSlide = null,
            offset = 0;

        currentSlides.each(function () {
            $(this).css({
                'left': offset * 100 + '%'
            });
            offset++;
        });
        getPrevPanelSlide();
        $indexPrd--;
        if ($indexPrd < 0 || $indexPrd == $arrSliderSrc.length) $indexPrd = $arrSliderSrc.length - 1;
        newSlide = $('<img>').attr('src', $arrSliderSrc[$indexPrd]);
        newSlide.css({
            'left': -100 + '%'
        });
        $('.slider-box').prepend(newSlide);
        setTimeout(function () {
            $('.slider-box img:last').remove();
            $('.arrow-left').on('click', getPrevSlide);
        }, 500);
    }

    function getNextSlide() {
        $('.arrow-right').off('click', getNextSlide);
        let currentSlides = $('.slider-box img'),
            newSlide = null,
            offset = 0;
        currentSlides.each(function () {
            $(this).css({
                'left': offset * 100 - 200 + '%'
            });
            offset++;
        });
        getNextPanelSlide();
        if ($indexPrd == $arrSliderSrc.length) $indexPrd = 0;
        newSlide = $('<img>').attr('src', $arrSliderSrc[$indexPrd]);
        newSlide.css({
            'left': offset * 100 - 200 + '%'
        });
        $indexPrd++;

        $('.slider-box').append(newSlide);
        setTimeout(function () {
            $('.slider-box img:first').remove();
            $('.arrow-right').on('click', getNextSlide);
        }, 500);

    }

    // panel-slide start

    let $allPanelSlidesPdr = $('.panel-slide img'),
        $indexPanelPrd = 0,
        $arrPanelSliderSrc = [];
    $i = 0;

    $allPanelSlidesPdr.each(function () {
        $arrPanelSliderSrc[$i] = $(this).attr('src');
        $(this).remove();
        $i++;
    });


    function initPanelPdr() {
        let arrImages = [],
            countSlide = $arrPanelSliderSrc.length,
            offset = 0;
        for (let i = 0; i < countSlide * 2; i++) {
            if (offset >= countSlide) offset = 0;
            arrImages[i] = $('<img>').attr('src', $arrPanelSliderSrc[offset]);
            arrImages[i].css({
                'left': i * 160 - 160 + 'px'
            });
            $('.panel-slide').append(arrImages[i]);
            offset++;
        }

        arrImages[$indexPanelPrd + 1].addClass('production-slide-act');

    }

    initPanelPdr();

    function getPrevPanelSlide() {
        let currentSlides = $('.panel-slide img'),
            newSlide = null,
            offset = 0;

        currentSlides.each(function () {
            if (offset == 0) {
                $(this).addClass('production-slide-act');
            } else {
                $(this).removeClass('production-slide-act');
            }
            $(this).css({
                'left': offset * 160 + 'px'
            });
            offset++;
        });

        $indexPanelPrd--;
        if ($indexPanelPrd < 0 || $indexPanelPrd == $arrPanelSliderSrc.length) $indexPanelPrd = $arrPanelSliderSrc.length - 1;
        newSlide = $('<img>').attr('src', $arrPanelSliderSrc[$indexPanelPrd]);
        newSlide.css({
            'left': -160 + 'px'
        });
        $('.panel-slide').prepend(newSlide);
        setTimeout(function () {
            $('.panel-slide img:last').remove();
        }, 500);
    }

    function getNextPanelSlide() {
        let currentSlides = $('.panel-slide img'),
            newSlide = null,
            offset = 0;

        currentSlides.each(function () {
            if (offset == 2) {
                $(this).addClass('production-slide-act');
            } else {
                $(this).removeClass('production-slide-act');
            }
            $(this).css({
                'left': offset * 160 - 320 + 'px'
            });
            offset++;
        });

        if ($indexPanelPrd == $arrPanelSliderSrc.length) $indexPanelPrd = 0;
        newSlide = $('<img>').attr('src', $arrPanelSliderSrc[$indexPanelPrd]);
        newSlide.css({
            'left': offset * 160 - 320 + 'px'
        });
        $indexPanelPrd++;

        $('.panel-slide').append(newSlide);
        setTimeout(function () {
            $('.panel-slide img:first').remove();
        }, 500);
    }

    $('.arrow-left').on('click', getPrevSlide);
    $('.arrow-right').on('click', getNextSlide);

    // panel-slide end

    /*
    ***************************
        production section end
    */

    /*
    ***************************
        feedback section start
    */

    let $allFeedImg = $('.feedback-slide-wrapper img'),
        $arrFeedSlideSrc = [],
        $indexFeed = 0;
    $i = 0;

    $allFeedImg.remove();
    $allFeedImg.each(function () {
        $arrFeedSlideSrc[$i] = $(this).attr('src');
        $i++;
    });

    function initFeed() {
        let count = $arrFeedSlideSrc.length,
            newImg = [],
            offset = 0;
        for (let i = 0; i < count * 2; i++) {
            if (offset >= count) offset = 0;
            newImg[i] = $('<img>').attr('src', $arrFeedSlideSrc[offset]);
            newImg[i].css({
                'left': i * 290 - 290 + 'px',
                'margin-left': 28 + 'px'
            });
            $('.feedback-slide-wrapper').append(newImg[i]);
            offset++;
        }
    }

    function getNextFeedSlide() {
        $('.feedback-arrow-right').off('click', getNextFeedSlide);
        let currentSlides = $('.feedback-slide-wrapper img'),
            count = $arrFeedSlideSrc.length,
            newImg = null,
            offset = 0;

        currentSlides.each(function () {
            $(this).css({
                'left': offset * 290 - 580 + 'px'
            });
            offset++;
        });

        if ($indexFeed == count) $indexFeed = 0;
        newImg = $('<img>').attr('src', $arrFeedSlideSrc[$indexFeed]);
        newImg.css({
            'left': offset * 290 - 580 + 'px',
            'margin-left': 28 + 'px'
        });
        $indexFeed++;
        $('.feedback-slide-wrapper').append(newImg);

        setTimeout(function () {
            $('.feedback-slide-wrapper img:first').remove();
            $('.feedback-arrow-right').on('click', getNextFeedSlide);
        }, 500);

    }

    function getPrevFeedSlide() {
        $('.feedback-arrow-left').off('click', getPrevFeedSlide);
        let currentSlides = $('.feedback-slide-wrapper img'),
            count = $arrFeedSlideSrc.length,
            newImg = null,
            offset = 0;
        currentSlides.each(function () {
            $(this).css({
                'left': offset * 290 + 'px'
            });
            offset++;
        });

        $indexFeed--;
        if ($indexFeed < 0 || $indexFeed == count) $indexFeed = count - 1;
        newImg = $('<img>').attr('src', $arrFeedSlideSrc[$indexFeed]);
        newImg.css({
            'left': -290 + 'px',
            'margin-left': 28 + 'px'
        });
        $('.feedback-slide-wrapper').prepend(newImg);

        setTimeout(function () {
            $('.feedback-slide-wrapper img:last').remove();
            $('.feedback-arrow-left').on('click', getPrevFeedSlide);
        }, 500);
    }

    initFeed();

    $('.feedback-arrow-right').on('click', getNextFeedSlide);
    $('.feedback-arrow-left').on('click', getPrevFeedSlide);
    /*
    ***************************
        feedback section end
    */

});