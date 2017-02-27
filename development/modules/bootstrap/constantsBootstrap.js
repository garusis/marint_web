/**
 * Created by garusis on 24/02/17.
 */
!(function (module) {
  module.constant('ROUTES',{
    COURSES: {
      __BASE__: 'courses',
      MODULES: 'modules'
    },
    PUBLICATIONS: {
      __BASE__: 'publications',
      COMMENTS: 'comments',
      COUNT: 'count'
    },
    STUDENTS: {
      __BASE__: 'students',
      COMMENTS: 'comments',
      COURSES_STUDENT: {
        __BASE__: "courses",
        MODULES: "modules"
      }
    },
    UPLOAD: {
      ROOT: 'files',
      ICONS: 'files/icons',
      IMAGES: 'files/images'
    }
  });

})(angular.module('jg.marlininternacional'));