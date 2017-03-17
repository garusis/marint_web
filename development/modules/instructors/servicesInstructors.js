"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
(function (module) {
  InstructorService.$inject = ["Instructor", "Relbui", "$q", "$http", "ROUTES", "originsManager", "NewsService"];
  function InstructorService (Instructor, Relbui, $q, $http, ROUTES, originsManager, NewsService) {

    this.login = function ($user) {
      return Instructor.login($user).$promise
    }

    this.getCurrent = function () {
      return Instructor.getCurrent().$promise
        .then(processUser)
    }

    this.logout = function () {
      return Instructor.logout().$promise
    }

    function processUser (instructor) {
      if (!instructor.__is_process__) {
        instructor.__is_process__ = true
        instructor.courses = new Relbui.HasMany(
          originsManager.getOrigin() + "/" + ROUTES.INSTRUCTORS.__BASE__ + "/" + instructor.id + "/" + ROUTES.INSTRUCTORS.IMAGE
        )
        instructor.comments = new Relbui.HasMany(
          originsManager.getOrigin() + "/" + ROUTES.INSTRUCTORS.__BASE__ + "/" + instructor.id + "/" + ROUTES.INSTRUCTORS.COMMENTS.__BASE__
        )
        instructor.image = new Relbui.HasOne(
          originsManager.getOrigin() + "/" + ROUTES.INSTRUCTORS.__BASE__ + "/" + instructor.id + "/" + ROUTES.INSTRUCTORS.COMMENTS.__BASE__
        )
        instructor.image.get()
      }
      return instructor
    }



  }

  module.service("InstructorService", InstructorService)
})(angular.module("jg.marlininternacional.instructors"));


