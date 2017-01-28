/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

    var headerSources = {
        "original": "http://placehold.it/1700x380",
        "thumb_small": "http://placehold.it/1700x380",
        "thumb_medium": "http://placehold.it/1700x380",
        "thumb_large": "http://placehold.it/1700x380",
        "small": "http://placehold.it/1700x380",
        "medium": "http://placehold.it/1700x380",
        "large": "http://placehold.it/1700x380"
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
    var ListPublicationController = function ($scope, PublicPublication, $state) {
        $scope.headerSources = headerSources;
        $scope.newsCarouselConfig = newsCarouselConfig;

        $scope.optorderby = "";
        $scope.loading = true;
        $scope.loadingRecentNews = true;
        $scope.asc = true;
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
            PublicPublication.find({
                filter: {
                    where: {isPublished: true},
                    order: order,
                }
            }).$promise.then(function (data) {
                $scope.news = data;
                $scope.loading = false;
                console.log($scope.news)
            })
        }



        $scope.loadRecentNews = function () {
            PublicPublication.find({
                filter: {
                    where: {
                        isPublished: true
                    },
                    order: "publishedAt DESC",
                    limit: 10,
                    include: ['instructor']
                }
            }).$promise.then(function (data) {
                $scope.recentNews = data;
                $scope.loadingRecentNews = false;
                console.log($scope.news)
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

        $scope.loadnews();
        $scope.loadRecentNews()


    };
    ListPublicationController.$inject = ['$scope', 'PublicPublication', "$state"];

    var ShowPublicPublicationController = function ($scope, $stateParams, $location, PublicPublication) {
        $scope.headerSources = headerSources;
        $scope.location = $location.absUrl();
        $scope.loadingRecentNews = true;
        $scope.newsCarouselConfig = newsCarouselConfig;
        
        if (!$stateParams.new)
        {
            PublicPublication.findOne({
                filter: {
                    where: {isPublished: true, id: $stateParams.newId},
                    include: 'instructor'
                }
            }).$promise.then(function (data) {
                $scope.new = data;
            })
        } else
        {
            $scope.new = $stateParams.new
        }

        $scope.loadRecentNews = function () {
            PublicPublication.find({
                filter: {
                    where: {
                        isPublished: true
                    },
                    order: "publishedAt DESC",
                    limit: 10,
                    include: ['instructor']
                }
            }).$promise.then(function (data) {
                $scope.recentNews = data;
                $scope.loadingRecentNews = false;
                console.log($scope.news)
            })
        }

        $scope.loadRecentNews()



    };
    ShowPublicPublicationController.$inject = ['$scope', '$stateParams', '$location', 'PublicPublication'];

    module
            .controller('ListPublicationController', ListPublicationController)
            .controller('ShowPublicPublicationController', ShowPublicPublicationController);
})(angular.module('jg.marlininternacional.news'));