'use strict'
/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  var headerSources = {
    "original": "assets/images/usuario/banner.jpg",
    "thumb_small": "assets/images/usuario/banner.jpg",
    "thumb_medium": "assets/images/usuario/banner.jpg",
    "thumb_large": "assets/images/usuario/banner.jpg",
    "small": "assets/images/usuario/banner_small.jpg",
    "medium": "assets/images/usuario/banner_medium.jpg",
    "large": "assets/images/usuario/banner_large.jpg",
    "xlarge": "assets/images/usuario/banner.jpg"
  };

  UserProfileController.$inject = ["$scope"]
  function UserProfileController ($scope) {
    $scope.headerSources = headerSources;
  }

  UserActivityController.$inject = ["$scope", 'StudentService', "CourseService"]
  function UserActivityController ($scope, StudentService, CourseService) {
    $scope.headerSources = headerSources;
    StudentService.getCurrent()
      .then(function (student) {
        $scope.student = student;
        student.coursesStudent
          .get()
          .then(function (response) {
            $scope.student.cursos = response.data.map(function (relation) {
              return relation.course;
            });
            CourseService.setImages($scope.student.cursos)
          })
        student.commentStudent
          .get()
          .then(function (comments) {
            $scope.student.comments = comments
            _.forEach(comments, function (comment) {
              comment.publication.load()
            })
          });
      })

  }

  UserConfigurationController.$inject = ["$scope", "StudentService", "$timeout"]
  function UserConfigurationController ($scope, StudentService, $timeout) {
    var usersCtrl = this

    usersCtrl.vm = {
      success: false,
      error: false,
      pending: false
    }

    $scope.headerSources = headerSources;
    StudentService.getCurrent()
      .then(function (student) {
        usersCtrl.vm.student = student;
      })

    usersCtrl.save = function (student) {
      usersCtrl.vm.pending = true
      student.$save()
        .then(function () {
          usersCtrl.vm.success = true
          $scope.userForm.$setPristine()
          $scope.userForm.$setUntouched()
          $timeout(function () {
            usersCtrl.vm.success = false
          }, 3000)
        })
        .catch(function () {
          usersCtrl.vm.error = true
        })
        .finally(function () {
          usersCtrl.vm.pending = false
        })
    }
  }

  module
    .controller('UserProfileController', UserProfileController)
    .controller('UserActivityController', UserActivityController)
    .controller('UserConfigurationController', UserConfigurationController)
})(angular.module('jg.marlininternacional.users'));