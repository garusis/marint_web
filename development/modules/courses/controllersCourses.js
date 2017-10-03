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

  ListCourseController.$inject = ['$scope', 'Course', "$state", "CourseService","User"];
  function ListCourseController ($scope, Course, $state, CourseService,User) {

    $scope.optorderby = null;
    $scope.asc = true;
    $scope.submitRequest = {};
    $scope.togleAsc = function () {
      $scope.asc = !$scope.asc;
    }

      $scope.crearCurso = function () {
          CourseService.agregarCursoModal();
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
      order += ($scope.asc ? "ASC" : "DESC");
      /*
       * La variable $scope.queryCourses se usa para guardar dos tipos de consultas:
       * 1. La primera consulta trae todos los cursos publicados y sin publicar,
       * ésta consulta se realiza unicamente cuando el usuario está registrado como Instructor
       * 2. La segunda consulta trae unicamente los cursos que están publicados, esta se usa
       * cuando no hay un usuario registrado, es decir no se ha iniciado sesión como Instructor
       *
       * Nota: después del if, se usa $scope.queryCourses.then() para completar el proceso de
       * la promesa
       */

      $scope.queryCourses = "";

          if (User.hasRole("Instructor")) { //El usuario inició sesión como Instructor
              $scope.queryCourses = CourseService.loadCourses({
                  order: order,
                  include: [
                      {
                          relation: "instructor",
                          scope: {
                              include: "image"
                          }
                      }
                  ]
              });
          }
          else{ //No se ha iniciado sesión
              $scope.queryCourses = CourseService.loadCourses({
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
              });

          }
        // Dependiendo de la consulta completa la promesa
        $scope.queryCourses.then(function (data) {
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
    '$scope', "$q", '$stateParams', '$location', 'CourseService', "User","ngDialog"
  ];
  function ShowCourseController ($scope, $q, $stateParams, $location, CourseService, User, ngDialog) {
    $scope.headerSources = headerSources;
    $scope.location = $location.absUrl();
    $scope.modulos = [];
    $scope.loading = true;
    $scope.hola = true;
    $scope.courseName = false; //variable para mostrar el nombre del curso
    $scope.courseDescription = false; //variable para mostrar la descripción del curso
    $scope.coursePrice = false; //variable para mostrar el precio del curso
    $scope.buttons = false; //variable para mostrar los botones de guardar y

      $scope.showVideo = function (video) {
      CourseService.showModalVideo(video)
    }

      $scope.vm = {
          data: {},
          success: false,
          error: false
      }

      $scope.showModalAddModule = function () {
          ngDialog.open({
              template: 'modules/courses/templates/modals/addModuleCourse.html',
              className: 'ngdialog-theme-default addModuleCourse',
              controller: ShowCourseController
          })
      }

      //Método para enviar los datos del formulario para crear un modulo del curso
      $scope.crearModuloCurso = function (data) {
          var sendData = _.clone(data);
          User.getCurrent()
              .then(function (loggedUser) {
                  return $scope.course.modules.post({position:$scope.course.modules.length+1, description:sendData.description, instructor_id:loggedUser.id});
              })
              .then(function (module) {
                  ngDialog.open({
                      template: 'modules/courses/templates/modals/sucessAddModule.html',
                      className: 'ngdialog-theme-default editCourse',
                      controller: ShowCourseController
                  })
              })
              .catch(function (err) {
                  ngDialog.open({
                      template: 'modules/courses/templates/modals/errorModal.html',
                      className: 'ngdialog-theme-default editCourse',
                      controller: ShowCourseController
                  })
              })
      }



      //Este método se usa para editar los detalles del curso, como el título, la descripción y el precio
      // El parámetro field se usa para saber en qué elemento de la vista se hizo clic y así poder
      // El parámetro role se usa para saber el rol del usuario y así poder controlar la edición del curso
      // La edición solo puede ser realizada por un usuario con rol de Instructor
      // editar dicho campo
      $scope.editCourse = function (field, role) {

          // Valida que el usuario tenga el rol especificado en el llamado de la función editCourse
          if (User.hasRole(role)) {

              if(field==="name") //si hizo click en el nombre del curso
                  $scope.courseName = true;
              else if(field==="description") // si hizo click en la descripcion del curso
                  $scope.courseDescription = true;
              else $scope.coursePrice = true; //hizo click en el precio del curso

              // cuando le de click en cualquiera de los 3 campos entonces muestra los botones
              $scope.buttons = true;
              $scope.previousName = $scope.course.name; //variable que guarda el nombre anterior que tenia el curso
              $scope.previousDescription = $scope.course.description; //variable que guarda la descripcion anterior que tenia el curso
              $scope.previousPrice = $scope.course.price; //variable que guarda la descripcion anterior que tenia el curso
          }



      }

      //Método para enviar los datos del formulario para editar el curso
      $scope.submit = function (data) {
          var sendData = _.clone(data);
          console.log(sendData);
          User.getCurrent()
              .then(function (loggedUser) {

                  return loggedUser.coursesUser.put(sendData.id,sendData)
              })
              .then(function (course) {
                  ngDialog.open({
                      template: 'modules/courses/templates/modals/sucessModal.html',
                      className: 'ngdialog-theme-default editCourse',
                      controller: ShowCourseController
                  })
                  $scope.courseName = false;
                  $scope.courseDescription = false;
                  $scope.coursePrice = false;
                  $scope.buttons = false;

              })
              .catch(function (err) {
                  ngDialog.open({
                      template: 'modules/courses/templates/modals/errorModal.html',
                      className: 'ngdialog-theme-default editCourse',
                      controller: ShowCourseController
                  })
                  $scope.courseName = false;
                  $scope.courseDescription = false;
                  $scope.coursePrice = false;
                  $scope.buttons = false;
              })



      }
      $scope.closeModal = function () {
          ngDialog.close();
      }

      $scope.closeModalModule = function () {
          ngDialog.close();
          location.reload();
      }

      $scope.cancelEdit = function () {
          $scope.courseName = false;
          $scope.courseDescription = false;
          $scope.coursePrice = false;
          $scope.buttons = false;
          $scope.course.name = $scope.previousName; //se restaura el valor anterior del nombre del curso
          $scope.course.description = $scope.previousDescription; //se restaura el valor anterior de la descripcion del curso
          $scope.course.price = $scope.previousPrice; //se restaura el valor anterior del precio del curso


      }


      $scope.loadCourse = function () {
      var promises = [];
      /*
     * Se realizan dos condiciones:
     * 1. En el if: La primera consulta trae el curso sin importar si está publicado o no,
     * ésta consulta se realiza unicamente cuando el usuario está registrado como Instructor
     * 2. En el else: La segunda consulta trae el curso y valida que esté publicado, esta se usa
     * cuando no hay un usuario registrado, es decir no se ha iniciado sesión como Instructor
     *
     * Nota: Dependiendo de la condición será el valor que tome promises[0]
     */

          if (User.hasRole("Instructor")) { //El usuario inició sesión como Instructor
              promises[0] = CourseService
                  .loadCourse($stateParams.course, {
                      where: {id: $stateParams.courseId},
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
          }
          else{ //El usuario no ha iniciado sesión
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
          }

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
