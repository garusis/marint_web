"use strict"
/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module.config(['paginatorProvider', function (paginatorProvider) {
            paginatorProvider.setConfig({
                lengthDefault: 10,
                labelBefore: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                labelNext: '<i class="fa fa-angle-right" aria-hidden="true"></i> ',
                labelFirst: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
                labelLast: '<i class="fa fa-angle-double-right" aria-hidden="true"></i> '
            })
        }])

    module
        .provider('AppAuth', ['$httpProvider', '$localStorageProvider', function ($httpProvider, $localStorageProvider) {
            var token;
            var _options = {
                headerToken: 'Authorization',
                tokenLocalstorageKey: 'auth.token'
            };

            this.config = function (options) {
                _options = angular.extend(_options, options);
                AppAuth.updateToken()
            };

            var AppAuth = {};

            this.$get = [function () {
                return AppAuth;
            }];

            AppAuth.updateToken = function () {
                token = $localStorageProvider.get(_options.tokenLocalstorageKey) || null
            }

            AppAuth.isAuthenticated = function () {
                return !!token;
            };

            AppAuth.assingHeaders = function (obj) {
                if (token) {
                    obj[_options.headerToken] = token;
                }
                return obj;
            };

            $httpProvider.interceptors.push([function () {
                return {
                    request: function (config) {
                        AppAuth.assingHeaders(config.headers);
                        return config;
                    }
                }
            }]);

        }]);
})(angular.module('jg.marlininternacional.utilities', ['com.alphonsegs.paginator']));
