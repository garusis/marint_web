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
                  controllerAs: 'usersCtrl'
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
                  controllerAs: 'usersCtrl'
                }
              }
            }
          ]
        });
    }]);
})(angular.module('jg.marlininternacional.users', ["ui.router.stateHelper","jg.marlininternacional.constants"]));
