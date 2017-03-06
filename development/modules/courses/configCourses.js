"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  module
    .config(['stateHelperProvider', function (stateHelperProvider) {
      stateHelperProvider
        .state({
          name: 'courses',
          url: '/cursos',
          templateUrl: 'modules/courses/templates/list.html',
          controller: 'ListCourseController',
          controllerAs: 'listCCtrl',
          params: {course: null},
          children: [
            {
              name: 'show',
              url: '/{title}-:courseId?module&video',
              views: {
                '@': {
                  templateUrl: 'modules/courses/templates/show.html',
                  controller: 'ShowCourseController',
                  controllerAs: 'showCCtrl'
                }
              }
            }
          ]
        });
    }]);
})(angular.module('jg.marlininternacional.courses', ['ui.router', 'ui.router.stateHelper']));
