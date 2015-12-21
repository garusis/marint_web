/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module
        .config(['$localStorageProvider', function ($localStorageProvider) {
            $localStorageProvider.setKeyPrefix('jg.marlininternacional.');
        }])
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(true)
        }])
        .config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider
                .otherwise(function ($injector, $location) {
                    $injector
                        .invoke(['$rootScope', function ($rootScope) {
                            $rootScope.$emit("jg.marlininternacional::router::default");
                        }]);
                });
        }])
        .config(["originsManagerProvider", "$localStorageProvider", function (originsManagerProvider, $localStorageProvider) {
            originsManagerProvider.config();
            originsManagerProvider.setOrigin("base", originsManagerProvider.getOrigin());
            originsManagerProvider.setOrigin("origin", originsManagerProvider.getOrigin("base") + "/api");
        }])
        .config(['jgSimpleQueriesProvider', 'originsManagerProvider', function (jgSimpleQueriesProvider, originsManagerProvider) {
            jgSimpleQueriesProvider.config({base_url: originsManagerProvider.getOrigin()});
        }]);
})(angular.module('jg.marlininternacional', [
    'ui.router', 'ui.router.stateHelper', 'ngStorage', 'jg.originsManager', 'jgQueries',
    'jg.marlininternacional.auth', 'jg.marlininternacional.utilities'
]));
