/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module
        .run(['$rootScope', function ($rootScope) {
            $rootScope.multilanguageEnabled = false;

            $rootScope.slug = function (data) {
                return _.deburr(data).replace(/\W/g, " ").replace(/\s+/g, '_').substr(0, 40);
            };
        }]);
})(angular.module('jg.marlininternacional'));
