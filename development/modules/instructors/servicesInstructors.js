"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
(function (module) {
  InstructorService.$inject = ['Instructor', "$q", "$http", "ROUTES", "originsManager", "NewsService"];
  function InstructorService (Instructor, $q, $http, ROUTES, originsManager, NewsService) {

    this.login = function ($user) {
      return Instructor.login($user).$promise
    }

    this.getCurrent = function (force) {
      return Instructor.getCurrent().$promise
        .then(processUser)
    }

    this.logout = function () {
      return Instructor.logout().$promise
    }

    function processUser (instructor) {
      if (!instructor.__is_process__) {
        instructor.__is_process__ = true
        instructor.coursesInstructor = new CourseInstructorRelation(instructor)
        instructor.commentInstructor = new CommentInstructorRelation(instructor)
        instructor.image = new ImageInstructorRelation(instructor)
        instructor.image.get()
      }
      return instructor
    }

    function ImageInstructorRelation (instructor) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.INSTRUCTORS.__BASE__ +
        "/" + instructor.id +
        "/" + ROUTES.INSTRUCTORS.IMAGE;
    }

    ImageInstructorRelation.prototype = new Object();

    ImageInstructorRelation.prototype.get = function () {
      var relation = this
      return $http.get(this.basePath)
        .then(function (response) {
          _.assign(relation, response.data)
          return relation
        })
    }

    function CommentInstructorRelation (instructor) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.INSTRUCTORS.__BASE__ +
        "/" + instructor.id +
        "/" + ROUTES.INSTRUCTORS.COMMENTS.__BASE__;

    }

    CommentInstructorRelation.prototype = new Array();

    CommentInstructorRelation.prototype.__process__ = function (comment) {
      comment.publication = new PublicationCommentRelation(comment, this)
      return comment
    }

    CommentInstructorRelation.prototype.__addToCache__ = function (comment) {
      this.push(this.__process__(comment))
    }

    CommentInstructorRelation.prototype.get = function (filter) {
      if (!filter) {
        filter = {}
      }
      if (!filter.include) {
        filter.include = []
      }

      var relation = this
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          _.forEach(response.data, relation.__addToCache__.bind(relation))
          return response.data
        })
    }

    function PublicationCommentRelation (comment, commentInstructorRelation) {
      this.publication_type = comment.publication_type

      if (this.publication_type == "Publication") {
        this.basePath = originsManager.getOrigin() + "/" + ROUTES.PUBLICATIONS.__BASE__
      } else {
        this.basePath = originsManager.getOrigin() + "/" + ROUTES.VIDEOS.__BASE__
      }
      this.basePath += "/" + comment.publication_id
    }

    PublicationCommentRelation.prototype = new Object()

    PublicationCommentRelation.prototype.load = function (filter) {
      if (!filter) {
        filter = {}
      }
      if (!filter.include) {
        filter.include = []
      }

      var relation = this;
      var promise
      if (this.publication_type == "Publication") {
        promise = this.loadAsPublication(filter)
      } else {
        promise = this.loadAsVideo(filter)
      }
      promise
        .then(function (response) {
          _.assign(relation, response.data)
          return response.data
        })
        .catch(function (response) {
          if (response.status == 404) {
            relation.id = null
          }
          throw response
        })
      return promise
    }

    PublicationCommentRelation.prototype.loadAsPublication = function (filter) {
      filter.include.push({relation: "instructor"})
      return $http.get(this.basePath, {params: {filter: filter}})
    }

    PublicationCommentRelation.prototype.loadAsVideo = function (filter) {
      filter.include.push({
        relation: "module",
        scope: {
          include: "course"
        }
      })
      return $http.get(this.basePath, {params: {filter: filter}})
    }

    function CourseInstructorRelation (instructor) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.INSTRUCTORS.__BASE__ +
        "/" + instructor.id +
        "/" + ROUTES.INSTRUCTORS.COURSES_INSTRUCTOR.__BASE__
    }

    CourseInstructorRelation.prototype = new Array()

    CourseInstructorRelation.prototype.__addToCache__ = function (module) {
      this.push(this.__process__(module))
    }

    CourseInstructorRelation.prototype.__process__ = function (courseInstructor) {
      courseInstructor.modules = new ModuleRelation(courseInstructor, this)
      return courseInstructor
    }

    CourseInstructorRelation.prototype.getById = function (courseId) {
      var relation = this
      var filter = {
        where: {
          course_id: courseId
        }
      }
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          return relation.__process__(response.data[0])
        })
    }

    CourseInstructorRelation.prototype.get = function (filter) {
      var relation = this
      if (!filter) {
        filter = {}
      }
      if (!filter.include) {
        filter.include = [
          {
            relation: "course",
            scope: {
              include: ["instructor", "image"]
            }
          }
        ]
      }
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          relation.length = 0
          _.forEach(response.data, function (course) {
            relation.__addToCache__(course)
          })
        });
    }

    ModuleRelation.prototype = new Array()
    function ModuleRelation (courseInstructor, courseInstructorRelation) {
      this.basePath = courseInstructorRelation.basePath + "/" + courseInstructor.id + "/" + ROUTES.INSTRUCTORS.COURSES_INSTRUCTOR.MODULES
    }

    ModuleRelation.prototype.__addToCache__ = function (module) {
      this.push(this.__process__(module))
    }

    ModuleRelation.prototype.__process__ = function (module) {
      var videos = module.videos;
      var videoRelation = new VideoRelation(module, this)
      videos.forEach(videoRelation.__addToCache__.bind(videoRelation))
      module.videos = videoRelation
      return module
    }

    ModuleRelation.prototype.get = function (filter) {
      var relation = this
      if (!filter) {
        filter = {}
      }
      if (!filter.include) {
        filter.include = []
      }

      filter.include.push("videos")
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          relation.length = 0
          response.data.forEach(relation.__addToCache__.bind(relation))
          return relation
        })
    }

    function VideoRelation (module, moduleRelation) {
      this.basePath = originsManager.getOrigin() + "/" + ROUTES.VIDEOS.__BASE__
    }

    VideoRelation.prototype = new Array()

    VideoRelation.prototype.__process__ = function (video) {
      video.comments = new CommentRelation(video, this)
      return video
    }

    VideoRelation.prototype.__addToCache__ = function (video) {
      this.push(this.__process__(video))
    }

    VideoRelation.prototype.get = function (filter) {
      var relation = this
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          relation.length = 0
          response.data.forEach(relation.__addToCache__.bind(relation))
          return relation
        })
    }

    function CommentRelation (video, videoRelation) {
      this.basePath = videoRelation.basePath + "/" + video.id + "/" + ROUTES.VIDEOS.COMMENTS
    }

    CommentRelation.prototype = new Array()

    CommentRelation.prototype.__process__ = function (video) {
      return video
    }

    CommentRelation.prototype.__addToCache__ = function (video) {
      this.push(this.__process__(video))
    }

    CommentRelation.prototype.get = function (filter) {
      var relation = this
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          relation.length = 0
          response.data.forEach(relation.__addToCache__.bind(relation))
          return relation
        })
    }

    CommentRelation.prototype.create = function (data) {
      var relation = this
      return $http.post(this.basePath, data)
        .then(function (response) {
          relation.__addToCache__(response.data)
          return data
        })
    }

  }

  module.service('InstructorService', InstructorService)
})(angular.module('jg.marlininternacional.instructors'));


