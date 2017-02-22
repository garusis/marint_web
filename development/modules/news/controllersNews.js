/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

    var headerSources = {
        "original": "assets/images/publicaciones/banner.jpg",
        "thumb_small": "assets/images/publicaciones/banner.jpg",
        "thumb_medium": "assets/images/publicaciones/banner.jpg",
        "thumb_large": "assets/images/publicaciones/banner.jpg",
        "small": "assets/images/publicaciones/banner.jpg",
        "medium": "assets/images/publicaciones/banner.jpg",
        "large": "assets/images/publicaciones/banner.jpg"
    };
    var newsCarouselConfig = {
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
    var ListPublicationController = function ($scope, NewsService, $state) {
        $scope.headerSources = headerSources;
        $scope.newsCarouselConfig = newsCarouselConfig;

        $scope.optorderby = "";
        $scope.loading = true;
        $scope.loadingRecentNews = true;
        $scope.asc = false;
        $scope.submitRequest = {};
        $scope.togleAsc = function () {
            $scope.asc = !$scope.asc;
        }

        $scope.loadnews = function () {
            var order = "publishedAt "
            if ($scope.optorderby.length > 0)
            {
                order = $scope.optorderby
            }
            order += ($scope.asc ? " ASC" : " DESC")

            NewsService.loadPublications({
                filter: {
                    where: {isPublished: true},
                    order: order,
                    include: ['instructor']
                }
            }, function (data) {
                $scope.news = data;
                $scope.loading = false;
                console.log($scope.news)
            }
            , function (error) {
                
            });
        }

        $scope.loadRecentNews = function () {
            NewsService.loadRecentNews(function (data) {
                $scope.recentNews = data;
                $scope.loadingRecentNews = false;
            }, function (error) {
                
            });
        }
        
        $scope.showNew = function (_new)
        {
            var aux = {
                title: _new.title,
                newId: _new.newId,
                new : _new
            }
            $state.go("news.show", aux)
        }

        $scope.loadnews();
        $scope.loadRecentNews()


    };
    ListPublicationController.$inject = ['$scope', 'NewsService', "$state"];

    var ShowPublicationController = function ($scope, $stateParams, $location, NewsService, $state) {
        $scope.headerSources = headerSources;
        $scope.location = $location.absUrl();
        $scope.loadingRecentNews = true;
        $scope.newsCarouselConfig = newsCarouselConfig;

        if (!$stateParams.new)
        {
            NewsService.loadPublication({
                filter: {
                    where: {isPublished: true, id: $stateParams.newId},
                    include: 'instructor'
                }
            }, function (data) {
                $scope.new = data;
            }, function (error) {

            })
        } else
        {
            $scope.new = $stateParams.new
        }

        $scope.loadRecentNews = function () {
            NewsService.loadRecentNews(function (data) {
                $scope.recentNews = data;
                $scope.loadingRecentNews = false;
                console.log($scope.news)
            }, function (error) {

            })
        }

        $scope.showNew = function (_new)
        {
            var aux = {
                title: _new.title,
                newId: _new.newId,
                new : _new
            }
            $state.go("news.show", aux)
        }
        $scope.loadRecentNews()



    };
    ShowPublicationController.$inject = ['$scope', '$stateParams', '$location', 'NewsService', '$state'];

    module
            .controller('ListPublicationController', ListPublicationController)
            .controller('ShowPublicationController', ShowPublicationController);
})(angular.module('jg.marlininternacional.news'));