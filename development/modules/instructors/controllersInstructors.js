
/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

  var headerSources = {
    "original": "assets/images/instructores/banner.jpg",
    "thumb_small": "assets/images/instructores/banner.jpg",
    "thumb_medium": "assets/images/instructores/banner.jpg",
    "thumb_large": "assets/images/instructores/banner.jpg",
    "small": "assets/images/instructores/banner_small.jpg",
    "medium": "assets/images/instructores/banner_medium.jpg",
    "large": "assets/images/instructores/banner_large.jpg",
    "xlarge": "assets/images/instructores/banner.jpg"
  };
  var ListInstructorsController = function ($scope,Instructors) {
    $scope.headerSources = headerSources;
    Instructors.find({})
      .$promise
      .then(function (data) {
        $scope.instructors = data;
        console.log(data)
      })
  };
  ListInstructorsController.$inject = ['$scope',"Instructor"];

  var ShowInstructorController = function ($scope,$stateParams,Instructors,CourseService) {
    $scope.headerSources = headerSources;
    console.log($stateParams)
    $scope.instructor = $stateParams.instructor;

    function loadCourses() {
      CourseService.loadCourses({
        filter: {
          where: {instructorId: $scope.instructor.id},
          include: 'instructor'
        }

      }).then(function (data) {
        $scope.courses = data;
      })
    }

    function init() {
      if (!$scope.instructor) {
        Instructors.find({
          where: {
            id: $stateParams.id
          }
        }).$promise.then(function (data) {
          $scope.instructor = data;
          loadCourses();
        })
      } else {
        loadCourses();
      }
    }

    init()

  };
  ShowInstructorController.$inject = ['$scope','$stateParams',"Instructor","CourseService"];

  module
    .controller('ListInstructorsController',ListInstructorsController)
    .controller('ShowInstructorsController',ShowInstructorController);
})(angular.module('jg.marlininternacional.instructors'));