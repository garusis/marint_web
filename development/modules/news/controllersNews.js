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
    var ListPublicationController = function ($scope, PublicPublication, $state) {
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
            PublicPublication.find({
                filter: {
                    where: {isPublished: true},
                    order: order,
                    include: ['instructor']
                }
            }).$promise.then(function (data) {
                $scope.news = data;
                $scope.news =
                        $scope.news.map(function (v, index) {
                            v.images = {
                                _150x150: "http://placehold.it/150x150",
                                _370x220: "http://placehold.it/370x220",
                                _770x410: "http://placehold.it/770x410",
                            }
                            if (index < 20)
                            {
                                v.images = {
                                    _150x150: "assets/images/publicaciones/posts/150x150/" + (index + 1) + ".jpg",
                                    _370x220: "assets/images/publicaciones/posts/370x220/" + (index + 1) + ".jpg",
                                    _770x410: "assets/images/publicaciones/posts/770x410/" + (index + 1) + ".jpg",
                                }
                            }
                            console.log(v)
                            return v;
                        })
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

    var ShowPublicPublicationController = function ($scope, $stateParams, $location, PublicPublication, $state) {
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
    ShowPublicPublicationController.$inject = ['$scope', '$stateParams', '$location', 'PublicPublication', '$state'];

    module
            .controller('ListPublicationController', ListPublicationController)
            .controller('ShowPublicPublicationController', ShowPublicPublicationController);
})(angular.module('jg.marlininternacional.news'));