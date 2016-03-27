/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module
        .run(['$rootScope', '$FB', '$localStorage', '$timeout', 'overlay', function ($rootScope, $FB, $localStorage, $timeout, overlay) {
            $rootScope.multilanguageEnabled = false;

            $rootScope.slug = function (data) {
                return _.deburr(data).replace(/\W/g, " ").replace(/\s+/g, '_').substr(0, 40);
            };

            $FB.init('867010070088909');

            $rootScope.$on('jg.overlay::addedOverlay', function (event, dataOverlay) {
                if (dataOverlay.id === 'login' && !$localStorage.noFirstTime) {
                    overlay.requireOverlay('login');
                    $localStorage.noFirstTime = true;
                }
            });
        }]);
})(angular.module('jg.marlininternacional'));
