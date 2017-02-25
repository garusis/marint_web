/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  module
    .config(['stateHelperProvider', function (stateHelperProvider) {
      stateHelperProvider
        .state({
          name: 'instructors',
          url: '/instructores',
          templateUrl: 'modules/instructors/templates/list.html',
          controller: 'ListInstructorsController',
          children: [
            {
              name: 'show',
              url: '/{name}-:id',
              params: {instructor: null},
              views: {
                '@': {
                  templateUrl: 'modules/instructors/templates/show.html',
                  controller: 'ShowInstructorsController',
                }
              }
            }
          ]
        });
    }]);
})(angular.module('jg.marlininternacional.instructors', ['ui.router', 'ui.router.stateHelper']));
