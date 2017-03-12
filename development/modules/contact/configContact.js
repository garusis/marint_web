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
          name: 'contact',
          url: '/contacto',
          templateUrl: 'modules/contact/templates/contact.html',
          controller: 'ContactController',
          controllerAs: 'contactCtrl'
        });
    }]);
})(angular.module('jg.marlininternacional'));
