'use strict';
/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;!(function (module) {
  module
    .run(['$rootScope', "$state", "LoopBackAuth", '$FB', "User", '$localStorage', '$timeout', 'overlay',
      "Constants", "authmodule", "ngMeta",
      function ($rootScope, $state, Auth, $FB, User, $localStorage, $timeout, overlay, Constants, AuthModule, ngMeta) {

        $rootScope.multilanguageEnabled = false;
        $rootScope.slug = function (data) {
          return _.deburr(data).replace(/\W/g, " ").replace(/\s+/g, '_').substr(0, 40);
        };

        $FB.init("undefined");
        ngMeta.init()

        $rootScope.$on('jg.overlay::addedOverlay', function (event, dataOverlay) {
          if (dataOverlay.id === 'login' && !$localStorage.noFirstTime) {
            overlay.requireOverlay('login');
            $localStorage.noFirstTime = true;
          }
        });
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
          ngMeta.setTag('type', 'website')
          if (toState.name == 'index' || toState.name == 'user.activity') {
            if (!toParams.redirect) {
              event.preventDefault()
              $rootScope.$emit('jg.marlininternacional::router::default');
            }
          }
        })
        $rootScope.$on('$stateChangeSuccess', function () {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          ngMeta.setTag('url', location.href)
          $timeout(function () {
            window.prerenderReady = true;
          }, 2000)
        });

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
              if (user.firstPassword) {
                AuthModule.showModalChangePassword();
              }
              user.image.get()
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

        Constants.load()
      }]);
})(angular.module('jg.marlininternacional'));
