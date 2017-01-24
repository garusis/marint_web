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

    ListCourseController.$inject = ['$scope', 'Course'];
    function ListCourseController($scope, Course) {
        $scope.loading=true;
        $scope.loadCourses = function () {
            Course.find({
                filter: {
                    where: {isPublished: true},
                    include: 'instructor'
                }
            }).$promise.then(function (data) {
                data = data.map(function (v) {
                    v.description = v.description.substr(0, 150) + ("...");
                    return v;
                })
                $scope.courses = data
                $scope.loading=false;
            console.log(data)
            });
        }
        $scope.headerSources = headerSources;
        $scope.loadCourses();

    }

    ShowCourseController.$inject = ['$scope', '$stateParams', '$location', 'Course'];
    function ShowCourseController($scope, $stateParams, $location, Course) {
        $scope.headerSources = headerSources;
        $scope.location = $location.absUrl();
        $scope.course = Course.findOne({
            filter: {
                where: {isPublished: true, id: $stateParams.courseId},
                include: 'instructor'
            }
        });
    }
    module
            .controller('ListCourseController', ListCourseController)
            .controller('ShowCourseController', ShowCourseController);
})(angular.module('jg.marlininternacional.news'));
