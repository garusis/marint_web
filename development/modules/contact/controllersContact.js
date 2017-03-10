"use strict"
/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  var headerSources = {
    "original": "assets/images/contactenos/banner.jpg",
    "thumb_small": "assets/images/contactenos/banner.jpg",
    "thumb_medium": "assets/images/contactenos/banner.jpg",
    "thumb_large": "assets/images/contactenos/banner.jpg",
    "small": "assets/images/contactenos/banner_small.jpg",
    "medium": "assets/images/contactenos/banner_medium.jpg",
    "large": "assets/images/contactenos/banner_large.jpg",
    "xlarge": "assets/images/contactenos/banner.jpg"
  };

  contactController.$inject = ["$scope"]
  function contactController ($scope) {
    $scope.headerSources = headerSources;
    $scope.mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions)
  }

  CourseInfoRequestController.$inject = ["$scope","CourseService", "Contact"]
  function CourseInfoRequestController($scope, CourseService, Contact){
    var contactCtrl = this;

    contactCtrl.vm = {
      data:{},
      courses:[],
      success: false,
      error: false
    }

    CourseService.loadCourses()
      .then(function (courses) {
        contactCtrl.vm.courses = courses
      })

    contactCtrl.submit = function (data) {
      var sendData = _.clone(data)
      delete sendData.course
      sendData.subject = "Solicitud de información sobre el curso "+data.course.name
      sendData.body = "Solicito informacion sobre el curso "+data.course.name
      Contact.create(sendData)
        .$promise
        .then(function () {
          contactCtrl.vm.data.toName = ""
          contactCtrl.vm.data.to = ""
          contactCtrl.vm.data.course = ""
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

  maestrosController.$inject = ["$scope"]
  function maestrosController ($scope) {
    $scope.headerSources = headerSources;
  }

  module.controller('ContactController', contactController)
    .controller('CourseInfoRequestController', CourseInfoRequestController)
    .controller('MaestrosController', maestrosController)
})(angular.module('jg.marlininternacional.contact'));