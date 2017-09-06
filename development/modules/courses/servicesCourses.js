"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    service.$inject = ['Course', "ngDialog", "$q", "$http", "ROUTES", "originsManager", "$timeout","$state"];

    function service(Course, ngDialog, $q, $http, ROUTES, originsManager, $timeout,$state) {
        var __instance__ = this;

        this.loadCourses = function (filter) {
            if (!filter) {
                filter = {}
            }
            if (!filter.include) {
                filter.include = []
            } else if (_.isString(filter.include)) {
                filter.include = [filter.include]
            }
            filter.include.push("image")
            return Course.find({filter: filter})
                .$promise
                .then(function (data) {
                    _.forEach(data, function (course) {
                        course.modules = new ModuleRelation(course)
                    })
                    return data;
                })
        }

        this.loadCourse = function (instance, filter) {
            if (!filter) {
                filter = {}
            }
            if (!filter.include) {
                filter.include = []
            }
            filter.include.push("image")
            var promise = instance ? $q.resolve(instance) : Course.findOne({filter: filter}).$promise

            return promise
                .then(function (data) {
                    data.modules = new ModuleRelation(data)
                    return data;
                })
        }

        function ModuleRelation(course) {
            this.basePath = originsManager.getOrigin() +
                "/" + ROUTES.COURSES.__BASE__ + "/" + course.id +
                "/" + ROUTES.COURSES.MODULES.__BASE__
        }

        ModuleRelation.prototype = new Array()

        ModuleRelation.prototype.__process__ = function (module) {
            return module
        }

        ModuleRelation.prototype.__addToCache__ = function (module) {
            this.push(this.__process__(module))
        }

        ModuleRelation.prototype.get = function (filter) {
            var relation = this
            return $http.get(this.basePath, {params: {filter: filter}})
                .then(function (response) {
                    relation.length = 0
                    response.data.forEach(relation.__addToCache__.bind(relation))
                    return relation
                })
        }


        this.agregarCursoModal = function () {
            var controller = function ($scope, e, User) {

                $scope.vm = {
                    data: {},
                    success: false,
                    error: false
                }

                $scope.submit = function (data) {
                    var sendData = _.clone(data)
                    User.getCurrent()
                        .then(function (loggedUser) {
                            return loggedUser.coursesUser.post(sendData)
                        })
                        .then(function (course) {
                            //redirect to new course page
                            $state.go("courses.show",{course:course,title:course.name,courseId:course.id});
                            //courses.show({title: $paginator_item.name, courseId: $paginator_item.id, course: $paginator_item})
                        })
                        .catch(function (err) {
                          console.log(err);
                        })



                }
            }
            controller.$inject = ["$scope", "$element","User"]

            ngDialog.open({
                template: 'modules/courses/templates/modals/crearCurso.html',
                className: 'ngdialog-theme-default crearCurso',
                controller: controller
            })
        }


/*
              this.agregarCursoModal = function() {
                  ngDialog.open({template: 'modules/courses/templates/modals/crearCurso.html',
                      className: 'ngdialog-theme-default crearCurso'
                      //scope: $scope //Pass the scope object if you need to access in the template
                  })

              };
*/

        this.showModalVideo = function (video) {
            var controller = function ($scope, e) {
                $scope.video = video;
                $scope.video.comments.get()
                    .then(function () {
                        $scope.callbackvideo()
                    });

                $scope.x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                $scope.callbackvideo = function () {
                    $timeout(function () {
                        var aux = document.getElementById("commentsVideoContainer");
                        aux.scrollTop = aux.scrollHeight;
                    })
                }
                $scope.isStoped = true;
                $scope.isFullScreen = false;
                $scope.commentsVisible = false;
                $scope.pause = function () {
                    $scope.isStoped = !$scope.isStoped;
                }
                $scope.expand = function () {
                    $scope.isFullScreen = !$scope.isFullScreen;
                }

                $scope.showComments = function () {
                    $scope.commentsVisible = !$scope.commentsVisible
                }

                $scope.currentComment = {}

                $scope.sendComment = function (comment) {
                    $scope.currentComment = {}
                    video.comments.post(comment)
                        .then(function () {
                            $scope.callbackvideo()
                        })
                        .catch(function () {
                            $scope.currentComment = comment
                        })
                }

            }
            controller.$inject = ["$scope", "$element"]

            ngDialog.open({
                template: 'modules/courses/templates/modals/video.html',
                className: 'ngdialog-theme-default videoModal',
                controller: controller
            })
        }

    }

    module.service('CourseService', service)
})(angular.module('jg.marlininternacional.courses'));


