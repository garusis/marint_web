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
        include: [
          {
            relation: "instructor",
            scope: {
              include: "image"
            }
          }
        ]
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
    $scope.courseName = false; //variable para mostrar el nombre del curso
    $scope.courseDescription = false; //variable para mostrar la descripción del curso
    $scope.coursePrice = false; //variable para mostrar el precio del curso

    $scope.showVideo = function (video) {
      CourseService.showModalVideo(video)
    }

      //Este método se usa para editar los detalles del curso, como el título, la descripción y el precio
      // El parámetro field se usa para saber en qué elemento de la vista se hizo clic y así poder
      // editar dicho campo
      $scope.editCourse = function (field) {

        if(field==="name") //si hizo click en el nombre del curso
          $scope.courseName = true;
        else if(field==="description") // si hizo click en la descripcion del curso
          $scope.courseDescription = true;
        else $scope.coursePrice = true; //hizo click en el precio del curso
      }


      $scope.loadCourse = function () {
      var promises = []
      promises[0] = CourseService
        .loadCourse($stateParams.course, {
          where: {isPublished: true, id: $stateParams.courseId},
          include: [{
            relation: "instructor",
            scope: {
              include: "image"
            }
          }]
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
          .then(function (loggedUser) {
            return loggedUser.coursesUser.getById($stateParams.courseId)
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

    CourseContactRequestController.$inject = ["$scope", "CourseService", "Contact"]
    function CourseContactRequestController ($scope, CourseService, Contact) {
        var contactCtrl = this;

        contactCtrl.vm = {
            data: {},
            courses: [],
            success: false,
            error: false
        }

        CourseService.loadCourses()
            .then(function (courses) {
                contactCtrl.vm.courses = courses
            })

        contactCtrl.submit = function (data, course) {
            var sendData = _.clone(data)
            if (course) {
                sendData.subject = "Solicitud de información sobre el curso " + course.name
                sendData.body = sendData.body || ("Solicito información sobre el curso " + course.name)
            }
            Contact.create(sendData)
                .$promise
                .then(function () {
                    contactCtrl.vm.data.toName = ""
                    contactCtrl.vm.data.to = ""
                    contactCtrl.vm.data.body = ""
                    contactCtrl.vm.selectedCourse = null
                    contactCtrl.vm.success = true
                    contactCtrl.vm.error = false
                    $scope.contactForm.$setPristine()
                    $scope.contactForm.$setUntouched()
                })
                .catch(function () {
                    contactCtrl.vm.success = false
                    contactCtrl.vm.error = true
                })
        }

    }


  module.controller('ListCourseController', ListCourseController)
      .controller('CourseContactRequestController', CourseContactRequestController)
      .controller('ShowCourseController', ShowCourseController);
})(angular.module('jg.marlininternacional.courses'));
