"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  service.$inject = ['Course', "ngDialog", "$q", "$http", "ROUTES", "originsManager"];
  function service (Course, ngDialog, $q, $http, ROUTES, originsManager) {

    function setImages (courses) {
      if (Array.isArray(courses)) {
        _.forEach(courses, function (course, i) {
          i = i + 1
          course.images = {
            _150x150: "assets/images/cursos/cursos/150x150/" + i + ".jpg",
            _370x240: "assets/images/cursos/cursos/370x240/" + i + ".jpg",
            _770x410: "assets/images/cursos/cursos/770x410/" + i + ".jpg"
          }
        })
      } else {
        courses.images = {
          _150x150: "assets/images/cursos/cursos/150x150/1.jpg",
          _370x240: "assets/images/cursos/cursos/370x240/1.jpg",
          _770x410: "assets/images/cursos/cursos/770x410/1.jpg"
        }
      }

      return courses;
    }

    this.loadCourse = function (instance, filter) {
      var promise = instance ? $q.resolve(instance) : Course.findOne(filter).$promise
      return promise
        .then(function (data) {
          data = setImages(data);
          data.modules = new ModuleRelation(data)
          return data;
        })
    }

    function ModuleRelation (course) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.COURSES.__BASE__ + "/" + course.id +
        "/" + ROUTES.COURSES.MODULES
    }

    ModuleRelation.prototype = new Array()

    ModuleRelation.prototype.__addToCache__ = function (module) {
      this.push(module)
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

    this.loadCourses = function (options, callback, error) {
      Course.find(options).$promise.then(function (data) {
        data = setImages(data);
        callback(data);
      })
    }

    this.showModalVideo = function (video) {
      var controller = function (s, e) {
        s.x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        s.callbackvideo = function () {
          var aux = document.getElementById("commentsVideoContainer");
          aux.scrollTop = aux.scrollHeight;
        }
        s.isStoped = true;
        s.isFullScreen = false;
        s.commentsVisible = false;
        s.pause = function () {
          s.isStoped = !s.isStoped;
        }
        s.expand = function () {
          s.isFullScreen = !s.isFullScreen;
        }

        s.showComments = function () {
          s.commentsVisible = !s.commentsVisible
        }
        s.callback = function () {
          console.log(document.getElementById("modulevideo"))
          $('#modulevideo').mediaelementplayer({
            // Configuration
            success: function (media) {
              var isNative = media.rendererName.match(/html5|native/);
              var isYoutube = media.rendererName.match(/youtube/);
            }
          });
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


