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
          name: 'user',
          url: '/usuario',
          templateUrl: 'modules/users/templates/perfil.html',
          controller: 'UserProfileController',
          controllerAs: 'upCtrl',
          children: [
            {
              name: 'activity',
              url: '/actividad',
              views: {
                '@': {
                  templateUrl: 'modules/users/templates/activity.html',
                  controller: 'UserActivityController',
                  controllerAs: 'maestrosCtrl'
                }
              },
              params:{
                redirect: false
              }
            },
            {
              name: 'account',
              url: '/configuracion',
              views: {
                '@': {
                  templateUrl: 'modules/users/templates/account.html',
                  controller: 'UserConfigurationController',
                  controllerAs: 'maestrosCtrl'
                }
              }
            }
          ]
        });
    }]);
})(angular.module('jg.marlininternacional.users', ['ui.router', 'ui.router.stateHelper']));
