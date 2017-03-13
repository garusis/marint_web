/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
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

  ShowModuleController.$inject = ['$scope', '$stateParams', '$location', 'Course'];
  function ShowModuleController ($scope, $stateParams, $location, Course) {
    $scope.headerSources = headerSources;
    $scope.location = $location.absUrl();
    $scope.module = {
      "name": "primero",
      "videos": [
        {
          "title": "video1",
          "url": "http://localhost/videos_prueba/1.mp4"
        },
        {
          "title": "video2",
          "url": "http://localhost/videos_prueba/2.mp4"
        },
        {
          "title": "video3",
          "url": "http://localhost/videos_prueba/3.mp4"
        }
      ]
    };
  }

  module
    .controller('ShowModuleController', ShowModuleController);
})(angular.module('jg.marlininternacional.modules'));
