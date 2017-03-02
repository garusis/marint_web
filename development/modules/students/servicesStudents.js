"use strict"
  /**
   * Created by Constantino Celis Peñaranda on 04/06/2016.
   * @author Constantino Celis Peñaranda
   * @email celisconstantino01@gmail.com
   * @version 0.0.1
   */
  ;
!(function (module) {
  StudentService.$inject = ['Student',"LoopBackAuth","ngDialog","$q","$http","ROUTES","originsManager"];
  function StudentService(Student,LoopBackAuth,ngDialog,$q,$http,ROUTES,originsManager) {

    this.isAuthenticated = function () {
      return !!LoopBackAuth.accessTokenId
    }

    function processStudent(student) {
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

    function CourseStudentRelation(student) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.STUDENTS.__BASE__ + "/" + student.id +
        "/" + ROUTES.STUDENTS.COURSES_STUDENT.__BASE__
    }

    CourseStudentRelation.prototype = new Array()

    CourseStudentRelation.prototype.__addToCache__ = function (module) {
      this.push(module)
    }

    CourseStudentRelation.prototype.__process__ = function (courseStudent) {
      courseStudent.modules = new ModuleRelation(courseStudent,this)
      return courseStudent
    }

    CourseStudentRelation.prototype.getById = function (courseId) {
      var relation = this
      var filter = {
        where: {
          course_id: courseId
        }
      }
      return $http.get(this.basePath,{params: {filter: filter}})
        .then(function (response) {
          return relation.__process__(response.data[0])
        })
    }

    ModuleRelation.prototype = new Array()
    function ModuleRelation(courseStudent,courseStudentRelation) {
      this.basePath = courseStudentRelation.basePath + "/" + courseStudent.id + "/" + ROUTES.STUDENTS.COURSES_STUDENT.MODULES
    }

    ModuleRelation.prototype.__addToCache__ = function (module) {
      this.push(this.__process__(module))
    }

    ModuleRelation.prototype.__process__ = function (module) {
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

      var ep="https://mibackend.herokuapp.com/api/students/53/courses/109/modules";
      $http.get(ep)
        .then(function (response) {
          console.log(ep,response)
        })
      filter.include.push("videos")
      return $http.get(this.basePath,{params: {filter: filter}})
        .then(function (response) {
          console.log(response)
          relation.length = 0
          response.data.forEach(relation.__addToCache__.bind(relation))
          return relation
        })
    }

  }

  module.service('StudentService',StudentService)
})(angular.module('jg.marlininternacional.students',[]));


