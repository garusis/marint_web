/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

  LoginController.$inject = ["$scope", "$rootScope", "User", "$state"];
  function LoginController ($scope, $rootScope, User, $state) {

    this.initScope = function () {
      $scope.user = {};
      $scope.$watchGroup(["user.username", "user.password"], function () {
        $scope.loginForm.$setValidity("credentials", true);
      });
    };

    this.login = function ($user) {
      User.login($user)
        .then(function () {
          $rootScope.$emit("jg.marlininternacional::users::successLogin");
        })
        .catch(function (err) {
          if (err.status === 401) {
            $scope.loginForm.$setValidity("credentials", false);
          }
        });
    };

    this.initScope();
  }

  LogoutController.$inject = ["$scope", "$rootScope", "User"];
  function LogoutController ($scope, $rootScope, User) {
    this.initScope = function () {
      $rootScope.$emit("jg.marlininternacional::users::logout");
    };
    this.initScope();
  }

  module
    .controller("LoginController", LoginController)
    .controller("LogoutController", LogoutController)
    .controller("IndexPublicController", ["$scope", "Testimony", "NewsService", "CourseService",
      function ($scope, Testimony, NewsService, CourseService) {

        $scope.showVideo = function (video) {
          CourseService.showModalVideo(video)
        }

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

        $scope.coursesCarouselConfig = {
          nav: false,
          loop: false,
          autoplay: false,
          //autoplayTimeout: 5000,
          autoplayHoverPause: true,
          items: 3, //10 items above 1000px browser width
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

        $scope.testimonies = Testimony.find();

        CourseService
          .loadCourses({
            order: "name DESC",
            include: [{
              relation: "instructor",
              scope: {
                include: "image"
              }
            }]
          })
          .then(function (data) {
            $scope.courses = data;
          })

        $scope.publications = {
          list: []
        };

        NewsService.loadPublications({
          filter: {
            where: {
              isPublished: true
            },
            order: "publishedAt DESC",
            limit: 10,
            include: [{
              relation: "instructor",
              scope: {
                include: "image"
              }
            }, "image"]
          }
        })
          .then(function (publications) {
            $scope.publications.list = publications
          })
      }]);
})(angular.module("jg.marlininternacional.auth"));