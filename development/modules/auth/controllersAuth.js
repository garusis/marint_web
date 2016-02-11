/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module
        .controller('IndexPublicController', ['$scope', 'Testimony', 'PublicPublication', function ($scope, Testimony, PublicPublication) {
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
                nav: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                items: 1, //10 items above 1000px browser width
                navText: ["", ""],
                responsive: {
                    0: {
                        nav: false
                    },
                    480: {
                        nav: false
                    },
                    768: {
                        nav: true
                    }
                }
            };

            $scope.newsCarouselConfig = {
                enabled: true,
                autoplay: true,
                draggable: false,
                autoplaySpeed: 5000,
                speed: 300,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical: true,
                pauseOnHover: true
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

            $scope.testimonies = Testimony.find();
            $scope.publications = {
                limit: 10,
                orderBy: 'createAt',
                orderDirection: 'DESC'
            };

            this.loadPublications = function (page) {
                $scope.publications.count = PublicPublication.count();
                $scope.publications.list = PublicPublication.find({
                    filter: {
                        skip: (page - 1) * $scope.publications.limit,
                        limit: $scope.publications.limit,
                        order: $scope.publications.orderBy + ' ' + $scope.publications.orderDirection,
                        fields: {content: false},
                        include: ['instructor']
                    }
                });
                $scope.publications.page = page;
            };

            this.loadPublications(1);
        }]);
})(angular.module('jg.marlininternacional.auth'));