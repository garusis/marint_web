/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module
        .run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on('jg.marlininternacional::router::default', function () {
                $state.go('index');
            });
        }]);
})(angular.module('jg.marlininternacional.auth'));
