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
          pathToResource + "/" + ROUTES.INSTRUCTORS.COURSES,
          {instanceCtor: Course}
        )
        instructor.coursesUser.get = function (filter) {
          filter = RestUtils.addInclude(filter, ["instructor", "image"])
          return this.__proto__.get.call(this, filter)
        }

        instructor.commentsUser = new Relbui.HasMany(
          pathToResource + "/" + ROUTES.INSTRUCTORS.COMMENTS.__BASE__,
          {instanceCtor: CommentUser}
        )
        instructor.image = new Relbui.HasOne(pathToResource + "/" + ROUTES.INSTRUCTORS.IMAGE)
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
      this.publication.publication_type = this.publication_type

      this.publication.get = function (filter) {
        filter = RestUtils.addInclude(filter, include)
        return this.__proto__.get.call(this, filter)
      }
    }

    function Publication (publication) {
      this.__proto__ = publication
    }

    function Course (course) {
      this.__proto__ = course
      this.basePath = originsManager.getOrigin() + "/" + ROUTES.COURSES.__BASE__ + "/" + this.id

      this.modules = new Relbui.HasMany(
        this.basePath + "/" + ROUTES.COURSES.MODULES.__BASE__
      )

      this.modules.get = function (filter) {
        var relation = this
        filter = RestUtils.addInclude(filter, ["videos"])
        return this.__proto__.get.call(this, filter)
          .then(function (modules) {
            _.forEach(modules, function (module) {
              var videos = module.videos;
              module.videos = new Relbui.HasMany(
                relation.basePath + "/" + module.id + "/" + ROUTES.COURSES.MODULES.VIDEOS,
                {instanceCtor: ModuleVideo}
              )
              _.forEach(videos, function (video) {
                module.videos.__addToCache__(video)
              })
            })
            return modules
          })
      }
    }

    function ModuleVideo (moduleVideo) {
      this.__proto__ = moduleVideo
      this.basePath = originsManager.getOrigin() + "/" + ROUTES.VIDEOS.__BASE__ + "/" + moduleVideo.id

      this.comments = new Relbui.HasMany(
        this.basePath + "/" + ROUTES.VIDEOS.COMMENTS
      )
    }

  }

  module.service("InstructorService", InstructorService)
})(angular.module("jg.marlininternacional.instructors"));


