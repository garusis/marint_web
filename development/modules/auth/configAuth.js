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
          name: 'index',
          url: '/',
          templateUrl: 'modules/auth/templates/index.html',
          controller: 'IndexPublicController',
          controllerAs: 'authIPCtrl',
          params: {
            redirect: false
          }
        })
        .state({
          name: 'logout',
          url: '/logout',
          controller: 'LogoutController'
        });
    }]);
})(angular.module('jg.marlininternacional.auth', ["ui.router.stateHelper","jg.marlininternacional.constants"]));
