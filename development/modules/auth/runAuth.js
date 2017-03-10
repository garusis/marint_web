/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  module
    .run(['$rootScope', '$state', 'LoopBackAuth', 'StudentService', 'authmodule',
      function ($rootScope, $state, Auth, User, AuthModule) {
        $rootScope.$on('jg.marlininternacional::router::default', function () {
          if (User.isAuthenticated()) {
            $state.go("user.activity", {redirect: true}, {reload: true});
          } else {
            $state.go('index', {redirect: true}, {reload: true});
          }
        });

        $rootScope.$on('jg.marlininternacional::users::successLogin', function () {
          $rootScope.dataAuth = Auth;
          User.getCurrent()
            .then(function (user) {
              $rootScope.dataUser = user
              if(user)
              AuthModule.showModalChangePassword();
            });
          $rootScope.$emit('jg.marlininternacional::router::default');
        });

        $rootScope.$on('jg.marlininternacional::users::logout', function () {
          User.logout();
          delete $rootScope.dataAuth;
          delete $rootScope.dataUser;
          $rootScope.$emit('jg.marlininternacional::router::default');
        });

        if (Auth.accessTokenId) {
          $rootScope.$emit('jg.marlininternacional::users::successLogin');
        }
      }]);
})(angular.module('jg.marlininternacional.auth'));
