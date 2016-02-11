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
                    templateUrl: 'modules/auth/templates/public/index.html',
                    controller: 'IndexPublicController',
                    controllerAs: 'authIPCtrl'
                });
        }]);
})(angular.module('jg.marlininternacional.auth', ['ui.router', 'ui.router.stateHelper']));
