/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module.controller('IndexPublicController', ['$scope', function ($scope) {
        $scope.mainSliderConfigs = {
            delay: 6000,
            startwidth: 1170,
            startheight: 580,
            onHoverStop: "off",
            hideTimerBar: "on",
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 3,
            hideThumbs: 200,
            navigationType: "bullet",
            navigationArrows: "verticalcentered",
            navigationStyle: "preview4",
            touchenabled: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            stopAtSlide: -1,
            stopAfterLoops: -1,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            hideSliderAtLimit: 0,
            hideThumbsOnMobile: "on",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResoluition: 0,
            fullWidth: "on",
            shadow: 0
        };

        $scope.testimonialsCarouselConfig = {
            navigation: true,
            navigationText: ["", ""],
            pagination: false,
            paginationNumbers: false,
            autoPlay: 4000, //Set AutoPlay to 3 seconds
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        };

        $scope.coursesCarouseConfig = {
            pagination: true,
            paginationNumbers: false,
            autoPlay: 5000, //Set AutoPlay to 3 seconds
            items: 4, //10 items above 1000px browser width
            itemsDesktop: [1000, 4], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 2], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        };
    }]);
})(angular.module('jg.marlininternacional.auth'));