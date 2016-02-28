/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

    var headerSources = {
        "original": "//localhost/cloud/headers/news.jpg",
        "thumb_small": "//localhost/cloud/headers/news.jpg",
        "thumb_medium": "//localhost/cloud/headers/news.jpg",
        "thumb_large": "//localhost/cloud/headers/news.jpg",
        "small": "//localhost/cloud/headers/news.jpg",
        "medium": "//localhost/cloud/headers/news.jpg",
        "large": "//localhost/cloud/headers/news.jpg"
    };

    var ListPublicationController = function ($scope) {
        $scope.headerSources = headerSources;
    };
    ListPublicationController.$inject = ['$scope'];

    var ShowPublicPublicationController = function ($scope) {

    };
    ShowPublicPublicationController.$inject = ['$scope'];

    module
        .controller('ListPublicationController', ListPublicationController)
        .controller('ShowPublicPublicationController', ShowPublicPublicationController);
})(angular.module('jg.marlininternacional.news'));