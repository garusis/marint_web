/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

    contactController.$inject = ["$scope"]
    function contactController($scope) {

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

    }
    module.controller('ContactController', contactController)
            .controller('MaestrosController', maestrosController)
})(angular.module('jg.marlininternacional.contact'));