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
                    name: 'news',
                    url: '/noticias',
                    templateUrl: 'modules/news/templates/list.html',
                    controller: 'ListPublicationController',
                    controllerAs: 'listPCtrl',
                    params: {new: null},
                    children: [
                        {
                            name: 'show',
                            url: '/{title}-:newId',
                            views: {
                                '@': {
                                    templateUrl: 'modules/news/templates/show.html',
                                    controller: 'ShowPublicationController',
                                    controllerAs: 'showPCtrl'
                                }
                            }
                        }
                    ]
                });
        }]);
})(angular.module('jg.marlininternacional.news', ['ui.router', 'ui.router.stateHelper']));
