"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  StudentService.$inject = ['Student', "LoopBackAuth", "$q", "$http", "ROUTES", "originsManager"];
  function StudentService (Student, LoopBackAuth, $q, $http, ROUTES, originsManager) {

    this.isAuthenticated = function () {
      return !!LoopBackAuth.accessTokenId
    }

    function processStudent (student) {
      if (!student.__is_process__) {
        student.__is_process__ = true
        student.coursesStudent = new CourseStudentRelation(student)
        student.commentStudent = new CommentStudentRelation(student);
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

    function CommentStudentRelation (student) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.STUDENTS.__BASE__ +
        "/" + student.id +
        "/" + ROUTES.STUDENTS.COMMENTS;

    }

    CommentStudentRelation.prototype = new Array();
    CommentStudentRelation.prototype.getComments = function () {
      return $http.get(this.basePath)
        .then(function (response) {
          response.data.forEach(function (comment) {

            comment.publication = {
              active: false,
              isPublicationLoaded: false
            };
            comment.getPublication = function () {
              if (!comment.publication.isPublicationLoaded) {
                var path = originsManager.getOrigin() +
                  "/" + ROUTES.PUBLICATIONS.__BASE__ +
                  "/" + comment.publication_id;
                $http.get(path)
                  .error(function (error) {
                    if (error && error.error.status == 404) {
                      comment.publication.isPublicationLoaded = true;
                    }
                  })
                  .then(function (pub) {
                    comment.publication = pub.data;
                    comment.publication.active = true;
                    comment.publication.isPublicationLoaded = true;
                  })
              }
            }
          })
          return response;
        })
    }

    CommentStudentRelation.prototype.getPublication = function (comment) {
      var relation = this
      var filter = {
        where: {}
      }
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          return relation.__process__(response.data[0])
        })
    }

    function CourseStudentRelation (student) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.STUDENTS.__BASE__ +
        "/" + student.id +
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

    CourseStudentRelation.prototype.get = function (filter) {
      if (!filter) {
        filter = {}
      }
      if (!filter.include) {
        filter.include = [{
          relation: "course",
          scope: {
            include: "instructor"
          }
        }]
      }
      return $http.get(this.basePath, {params: {filter: filter}});
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


