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
                    originsManagerProvider.setOrigin("base", "https://mibackend.herokuapp.com");
                    originsManagerProvider.setOrigin("origin", originsManagerProvider.getOrigin("base") + "/api");
                }])
            .config(['LoopBackResourceProvider', 'originsManagerProvider', function (LoopBackResourceProvider, originsManagerProvider) {
                    // Use a custom auth header instead of the default 'Authorization'
                    //LoopBackResourceProvider.setAuthHeader('X-Access-Token');

                    // Change the URL where to access the LoopBack REST API server
                    LoopBackResourceProvider.setUrlBase(originsManagerProvider.getOrigin());
                }]);
})(angular.module('jg.marlininternacional', [
    'lbServices', 'ui.router', 'ui.router.stateHelper', 'ngStorage', 'slickCarousel', 'angular.filter', 'ngSanitize',
    'djds4rce.angular-socialshare',
    'jg.originsManager', 'jg.responsiveImages', 'jg.marlininternacional.auth', 'jg.marlininternacional.utilities',
    'jg.marlininternacional.news','jg.marlininternacional.instructors', 'jg.marlininternacional.contact','jg.marlininternacional.users', 'jg.overlay', 'jg.marlininternacional.courses', 'jg.marlininternacional.courses.modules', 'com.alphonsegs.paginator', 'com.alphonsegs.mvonload','ngDialog'

]));
