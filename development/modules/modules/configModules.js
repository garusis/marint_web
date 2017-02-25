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
            name: 'courses.show.modules',
            abstract: true,
            url: '/modulos',
            template: '<div> asdasdasdasdasdasdasd</div>',
            children: [
              {
                name: 'show',
                url: '/{moduleTitle}-:moduleId',
                views: {
                  '@': {
                    templateUrl: 'modules/modules/templates/show.html',
                    controller: 'ShowModuleController',
                    controllerAs: 'showMCtrl'
                  }
                }

              }
            ]
          });
      }]);
})(angular.module('jg.marlininternacional.courses.modules', ['ui.router', 'ui.router.stateHelper']));
