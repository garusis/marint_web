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
    function StudentService(Student, LoopBackAuth, ngDialog, $q, $http, ROUTES, originsManager) {

        this.isAuthenticated = function () {
            return !!LoopBackAuth.accessTokenId
        }

        this.getCurrent = function (force) {
            if (!LoopBackAuth.currentUserData || force) {
                return Student.getCurrent()
                    .then(function (student) {
                        student.coursesStudent = new CourseStudentRelation(student)
                    })
            }
            return $q.resolve(LoopBackAuth.currentUserData)
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
                    return relation.__process__(response.data)
                })
        }
    }

    module.service('StudentService', StudentService)
})(angular.module('jg.marlininternacional.students', []));


