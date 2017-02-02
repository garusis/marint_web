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
        "small": "assets/images/contactenos/banner.jpg",
        "medium": "assets/images/contactenos/banner.jpg",
        "large": "assets/images/contactenos/banner.jpg"
    };
    contactController.$inject = ["$scope"]
    function contactController($scope) {
        $scope.headerSources = headerSources;
        document.getElementById("scriptmap")
                .addEventListener("load", function () {
                    function initialize() {
                        var mapCanvas = document.getElementById('map');
                        var mapOptions = {
                            center: new google.maps.LatLng(44.5403, -78.5463),
                            zoom: 8,
                            scrollwheel: false,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        }
                        var map = new google.maps.Map(mapCanvas, mapOptions)
                    }
                    google.maps.event.addDomListener(window, 'load', initialize);
                })

    }

    maestrosController.$inject = ["$scope"]
    function maestrosController($scope) {
        $scope.headerSources = headerSources;
    }
    module.controller('ContactController', contactController)
            .controller('MaestrosController', maestrosController)
})(angular.module('jg.marlininternacional.contact'));