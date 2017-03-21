"use strict"
/**
 * Created by garusis on 24/02/17.
 */
;
(function (module) {
  module.constant("ROUTES", {
    COURSES: {
      __BASE__: "courses",
      MODULES: {
        __BASE__: "modules",
        VIDEOS: "videos"
      }
    },
    PUBLICATIONS: {
      __BASE__: "publications",
      COMMENTS: "comments",
      COUNT: "count"
    },
    STUDENTS: {
      __BASE__: "students",
      COMMENTS: {
        __BASE__: "comments",
        PUBLICATION: "publication"
      },
      COURSES_STUDENT: {
        __BASE__: "courses",
        MODULES: "modules"
      },
      IMAGE: "image"
    },
    INSTRUCTORS: {
      __BASE__: "instructors",
      COMMENTS: {
        __BASE__: "comments",
        PUBLICATION: "publication"
      },
      COURSES: "courses",
      IMAGE: "image"
    },
    COMMENTS: "comments",
    UPLOAD: {
      ROOT: "files",
      ICONS: "files/icons",
      IMAGES: "files/images"
    },
    VIDEOS: {
      __BASE__: "videos",
      COMMENTS: "comments"
    },
    IMAGES: {
      __BASE__: "images",
      PROFILE: "profile-image"
    }
  });

  module.factory("Constants", ["AppConstant", "$rootScope", "$q", "$timeout", function (AppConstant, $rootScope, $q, $timeout) {
    var constants

    return {
      load: function () {
        if (constants) {
          return $q(function (resolve) {
            $timeout(function () {
              resolve(constants)
            })
          })
        }
        return AppConstant.getPublic()
          .$promise
          .then(function (con) {
            constants = _.keyBy(con, "name")
            $rootScope.APP_CONSTANTS = constants
            return constants
          })
      },
      get: function (name) {
        return this.load()
          .then(function (constants) {
            return constants[name]
          })
      }
    }
  }]);
})(angular.module("jg.marlininternacional.constants", []));