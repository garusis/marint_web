"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  StudentService.$inject = ['Student', "LoopBackAuth", "ngDialog", "$q", "$http", "ROUTES", "originsManager"];
  function StudentService (Student, LoopBackAuth, ngDialog, $q, $http, ROUTES, originsManager) {

    this.isAuthenticated = function () {
      return !!LoopBackAuth.accessTokenId
    }

    function processStudent (student) {
      if (!student.__is_process__) {
        student.__is_process__ = true
        student.coursesStudent = new CourseStudentRelation(student)
      }
      return student
    }

    this.getCurrent = function (force) {
      if (!LoopBackAuth.currentUserData || force) {
        return Student.getCurrent().$promise
          .then(processStudent)
      }
      return $q.resolve(processStudent(LoopBackAuth.currentUserData))
    }

    this.logout = function () {
      LoopBackAuth.clearUser();
      LoopBackAuth.clearStorage();
      return Student.logout()
    }

    function CourseStudentRelation (student) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.STUDENTS.__BASE__ + "/" + student.id +
        "/" + ROUTES.STUDENTS.COURSES_STUDENT.__BASE__
    }

    CourseStudentRelation.prototype = new Array()

    CourseStudentRelation.prototype.__addToCache__ = function (module) {
      this.push(module)
    }

    CourseStudentRelation.prototype.__process__ = function (courseStudent) {
      courseStudent.modules = new ModuleRelation(courseStudent, this)
      return courseStudent
    }

    CourseStudentRelation.prototype.getById = function (courseId) {
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

    ModuleRelation.prototype = new Array()
    function ModuleRelation (courseStudent, courseStudentRelation) {
      this.basePath = courseStudentRelation.basePath + "/" + courseStudent.id + "/" + ROUTES.STUDENTS.COURSES_STUDENT.MODULES
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

  module.service('StudentService', StudentService)
})(angular.module('jg.marlininternacional.students', []));


