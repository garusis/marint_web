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
  function getCurrent(StudentService)
  {
    return StudentService.getCurrent();
  }

  UserProfileController.$inject = ["$scope"]
  function UserProfileController($scope) {
    $scope.headerSources = headerSources;
  }

  UserActivityController.$inject = ["$scope",'StudentService',"CourseService"]
  function UserActivityController($scope,StudentService,CourseService) {
    $scope.headerSources = headerSources;
    getCurrent(StudentService)
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

  UserConfigurationController.$inject = ["$scope"]
  function UserConfigurationController($scope) {
    $scope.headerSources = headerSources;
  }

  module
    .controller('UserProfileController',UserProfileController)
    .controller('UserActivityController',UserActivityController)
    .controller('UserConfigurationController',UserConfigurationController)
})(angular.module('jg.marlininternacional.users'));