"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

  var headerSources = {
    "original": "assets/images/cursos/banner.jpg",
    "thumb_small": "assets/images/cursos/banner.jpg",
    "thumb_medium": "assets/images/cursos/banner.jpg",
    "thumb_large": "assets/images/cursos/banner.jpg",
    "small": "assets/images/cursos/banner_small.jpg",
    "medium": "assets/images/cursos/banner_medium.jpg",
    "large": "assets/images/cursos/banner_large.jpg",
    "xlarge": "assets/images/cursos/banner.jpg"
  };

  ListCourseController.$inject = ['$scope', 'Course', "$state", "CourseService"];
  function ListCourseController ($scope, Course, $state, CourseService) {

    $scope.optorderby = null;
    $scope.asc = true;
    $scope.submitRequest = {};
    $scope.togleAsc = function () {
      $scope.asc = !$scope.asc;
    }
    $scope.loadCourses = function () {
      $scope.loading = true;
      var order = "name "
      if ($scope.optorderby > 0) {
        if ($scope.optorderby == 1) {
          order = "name "
        } else if ($scope.optorderby == 2) {
          order = "price "
        }
      }
      order += ($scope.asc ? "ASC" : "DESC")
      CourseService.loadCourses({
        where: {isPublished: true},
        order: order,
        include: 'instructor'
      }).then(function (data) {
        $scope.courses = data
        $scope.coursesOpt = data.map(function (v) {
          return {name: v.name, id: v.id}
        })
        $scope.submitRequest.course = $scope.coursesOpt[0];
        $scope.loading = false;
      })

    }

    $scope.headerSources = headerSources;
    $scope.loadCourses();
    $scope.showCourse = function (course) {

      $state.go("courses.show", {title: course.name, courseId: course.id, course: course})
    }

  }

  ShowCourseController.$inject = [
    '$scope', "$q", '$stateParams', '$location', 'CourseService', "User"
  ];
  function ShowCourseController ($scope, $q, $stateParams, $location, CourseService, User) {
    $scope.headerSources = headerSources;
    $scope.location = $location.absUrl();
    $scope.modulos = [];
    $scope.loading = true;
    $scope.hola = true;

    $scope.showVideo = function (video) {
      CourseService.showModalVideo(video)
    }

    $scope.loadCourse = function () {
      var promises = []
      promises[0] = CourseService
        .loadCourse($stateParams.course, {
          where: {isPublished: true, id: $stateParams.courseId},
          include: ['instructor']
        })
        .then(function (data) {
          $scope.course = data
          $scope.loading = false
          return data.modules.get()
            .then(function () {
              return data
            })
        });

      if (User.isAuthenticated()) {
        promises[1] = User.getCurrent()
          .then(function (loggedStudent) {
            return loggedStudent.coursesUser.getById($stateParams.courseId)
          })
          .then(function (course) {
            return course.modules.get()
              .then(function () {
                return course
              })
          })
      }

      $q.all(promises)
        .then(function (resolved) {
          var course = resolved[0]
          var courseUser = resolved[1]
          if (!courseUser) return

          _.forEach(courseUser.modules, function (moduleStudent) {
            var module = _.find(course.modules, {id: moduleStudent.id})
            module.enabled = true
            module.videos = moduleStudent.videos
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    $scope.loadCourse();
  }

  module.controller('ListCourseController', ListCourseController)
    .controller('ShowCourseController', ShowCourseController);
})(angular.module('jg.marlininternacional.courses'));
