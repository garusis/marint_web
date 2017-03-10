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
  var ListInstructorsController = function ($scope, Instructors) {
    $scope.headerSources = headerSources;
    $scope.instructors = Instructors.find({filter: {include: ["image"]}})
  };
  ListInstructorsController.$inject = ['$scope', "Instructor"];

  var ShowInstructorController = function ($scope, $stateParams, Instructors, CourseService) {
    var instCtrl = this;

    instCtrl.vm = {}
    $scope.headerSources = headerSources;
    instCtrl.vm.instructor = $scope.instructor = $stateParams.instructor;

    function loadCourses () {
      CourseService.loadCourses({
        filter: {
          where: {instructorId: $scope.instructor.id},
          include: 'instructor'
        }
      }).then(function (data) {
        $scope.courses = data;
      })
    }

    function init () {
      if (!$scope.instructor) {
        instCtrl.vm.instructor = $scope.instructor = Instructors
          .findOne({
            filter: {
              where: {
                id: $stateParams.id
              },
              include: "image"
            }
          });

        $scope.instructor.$promise
          .then(function (data) {
            loadCourses();
          })
      } else {
        loadCourses();
      }
    }

    init()

  };
  ShowInstructorController.$inject = ['$scope', '$stateParams', "Instructor", "CourseService"];

  module
    .controller('ListInstructorsController', ListInstructorsController)
    .controller('ShowInstructorsController', ShowInstructorController);
})(angular.module('jg.marlininternacional.instructors'));