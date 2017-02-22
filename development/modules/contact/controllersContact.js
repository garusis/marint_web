/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    var headerSources = {
        "original": "assets/images/contactenos/banner.jpg",
        "thumb_small": "assets/images/contactenos/banner.jpg",
        "thumb_medium": "assets/images/contactenos/banner.jpg",
        "thumb_large": "assets/images/contactenos/banner.jpg",
        "small": "assets/images/contactenos/banner_small.jpg",
        "medium": "assets/images/contactenos/banner_medium.jpg",
        "large": "assets/images/contactenos/banner_large.jpg",
        "xlarge": "assets/images/contactenos/banner.jpg"
    };
    contactController.$inject = ["$scope"]
    function contactController($scope) {
        $scope.headerSources = headerSources;
        $scope.mapOptions = {
            center: new google.maps.LatLng(44.5403, -78.5463),
            zoom: 8,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions)
    }

    maestrosController.$inject = ["$scope"]
    function maestrosController($scope) {
        $scope.headerSources = headerSources;
    }
    module.controller('ContactController', contactController)
            .controller('MaestrosController', maestrosController)
})(angular.module('jg.marlininternacional.contact'));