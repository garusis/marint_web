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

    ListCourseController.$inject = ['$scope', 'Course', "$state"];
    function ListCourseController($scope, Course, $state) {

        $scope.optorderby = null;
        $scope.asc = true;

        $scope.togleAsc = function () {
            $scope.asc = !$scope.asc;
        }
        $scope.loadCourses = function () {
            $scope.loading = true;
            var order = "name "
            if ($scope.optorderby > 0)
            {
                if ($scope.optorderby == 1)
                {
                    order = "name "
                } else if ($scope.optorderby == 2)
                {
                    order = "price "
                }
            }
            order += ($scope.asc ? "ASC" : "DESC")

            Course.find({
                filter: {
                    where: {isPublished: true},
                    order: order,
                    include: 'instructor'
                }
            }).$promise.then(function (data) {

                console.log(data, order)
                data = data.map(function (v) {
                    v.descriptionCaption = v.description.substr(0, 150) + ("...");
                    return v;
                })
                $scope.courses = data
                $scope.loading = false;

            });
        }

        $scope.headerSources = headerSources;
        $scope.loadCourses();
        $scope.showCourse = function (course)
        {

            $state.go("courses.show", {title: course.title, courseId: course.id, course: course})
        }

    }

    ShowCourseController.$inject = ['$scope', '$stateParams', '$location', 'Course'];
    function ShowCourseController($scope, $stateParams, $location, Course) {
        $scope.headerSources = headerSources;
        $scope.location = $location.absUrl();
        $scope.modulos=[];
        
        console.log($stateParams)
        
        $scope.sortModules=function(){
            while($scope.course.moduleList.length>0)
            {
                $scope.modulos.push($scope.course.moduleList.splice(0,4))
            }
        }
        $scope.loadCourse = function () {

            Course.findOne({
                filter: {
                    where: {isPublished: true, id: $stateParams.courseId},
                    include: 'instructor'
                }
            }).$promise.then(function (data) {
                $scope.course = data;
                $scope.sortModules();
            })
        }
        

        if (!$stateParams.course)
        {
            $scope.loadCourse();
        } else
        {
            $scope.course = $stateParams.course;
            $scope.sortModules();
        }


    }
    module.controller('ListCourseController', ListCourseController)
            .controller('ShowCourseController', ShowCourseController);
})(angular.module('jg.marlininternacional.news'));
