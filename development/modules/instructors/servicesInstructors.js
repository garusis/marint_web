"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
(function (module) {
  InstructorService.$inject = ["Instructor", "Relbui", "$q", "$http", "ROUTES", "originsManager", "RestUtils"];
  function InstructorService (Instructor, Relbui, $q, $http, ROUTES, originsManager, RestUtils) {

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

        var pathToResource = originsManager.getOrigin() + "/" + ROUTES.INSTRUCTORS.__BASE__ + "/" + instructor.id

        instructor.courses = instructor.coursesUser = new Relbui.HasMany(
          pathToResource + "/" + ROUTES.INSTRUCTORS.COURSES
        )
        instructor.commentsUser = new Relbui.HasMany(
          pathToResource + "/" + ROUTES.INSTRUCTORS.COMMENTS.__BASE__,
          {instanceCtor: CommentUser}
        )
        instructor.image = new Relbui.HasOne(pathToResource + "/" + ROUTES.INSTRUCTORS.IMAGE)
        instructor.image.get()
      }
      return instructor
    }

    function CommentUser (comment, basePath) {
      this.__proto__ = comment
      var ctor, include

      if (this.publication_type == "Publication") {
        basePath = originsManager.getOrigin() + "/" + ROUTES.PUBLICATIONS.__BASE__
        ctor = Publication
        include = {relation: "instructor"}
      } else {
        basePath = originsManager.getOrigin() + "/" + ROUTES.VIDEOS.__BASE__
        ctor = ModuleVideo
        include = {
          relation: "module",
          scope: {
            include: "course"
          }
        }
      }

      basePath += "/" + comment.publication_id
      this.publication = new Relbui.HasOne(basePath, {instanceCtor: ctor})

      this.publication.get = function (filter) {
        filter = RestUtils.addInclude(filter, include)
        this.__proto__.get.call(this, filter)
      }
    }

    function Publication (publication) {
      this.__proto__ = publication
    }

    function ModuleVideo (moduleVideo) {
      this.__proto__ = moduleVideo
    }

  }

  module.service("InstructorService", InstructorService)
})(angular.module("jg.marlininternacional.instructors"));


