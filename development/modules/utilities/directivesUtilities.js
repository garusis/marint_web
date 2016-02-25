/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    module
        .directive('revolution', [function () {
            return {
                restrict: 'A',
                scope: {
                    revolution: "=?"
                },
                link: function (scope, element, attrs) {
                    if (!scope.revolution) {
                        scope.revolution = {};
                    }
                    element.revolution(scope.revolution);
                }
            };
        }])
        .directive('owl', [function () {
            return {
                restrict: 'A',
                transclude: false,
                scope: {
                    owl: '=?'
                },
                controller: function ($scope, $element) {
                    var owl;
                    this.initOwl = function () {
                        if (owl) {
                            owlCarousel.destroy();
                        }
                        $element.owlCarousel($scope.owl);
                        owl = $element.data('owlCarousel');
                    };
                },
                link: function (scope, element, attrs) {
                    element.addClass("owl-carousel");
                    if (!scope.owl) {
                        scope.owl = {};
                    }
                }
            };
        }])
        .directive('owlItem', [function () {
            return {
                restrict: 'A',
                priority: -1,
                require: '^owl',
                link: function (scope, element, attrs, owlCtrl) {
                    element.addClass("owl-item").addClass("item");
                    if (scope.$last) {
                        owlCtrl.initOwl();
                    }
                }
            };
        }]);
})(angular.module('jg.marlininternacional.utilities'));


(function (module) {
    /*
     // @name: JG Responsive images
     // @version: 0.0.1
     // @description: Angular plugin for easy responsive images manager, based on kvendrik/responsive-images.js (https://github.com/kvendrik/responsive-images.js)
     //
     // Copyright 2016-2017 Jarvi Games, http://jarvigames.com
     // Licensed under the MIT license
     */
    var responsiveImagesProvider = function () {
        var configs = {
            thumbnailKey: 'thumb_',
            viewport: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            isRetina: window.devicePixelRatio && window.devicePixelRatio >= 1.2,
            defaultBreakpoints: "768=small,992=medium,1200=large"
        };

        var $provider = this;
        this.config = function (nConfigs) {
            configs = angular.extend({}, configs, nConfigs);
            return configs;
        };

        this.$get = function ($window, $document) {
            return {
                isRetina: function () {
                    return configs.isRetina;
                },
                getViewport: function () {
                    return configs.viewport;
                },
                getThumbnailKey: function () {
                    return configs.thumbnailKey;
                },
                updateViewport: function () {
                    configs.viewport = $window.innerWidth || $document[0].documentElement.clientWidth || $document[0].body.clientWidth;
                },
                getDefaultBreakpoints: function () {
                    return configs.defaultBreakpoints;
                }
            };
        };
        this.$get.$inject = ['$window', '$document'];
    };

    var responsiveImageDirective = function (responsiveImages) {
        return {
            restrict: 'A',
            scope: {
                config: '@responsiveImage',
                breakpoints: '@',
                sources: '='
            },
            link: function (scope, element, attrs) {
                var breakpoints = scope.config || scope.breakpoints || responsiveImages.getDefaultBreakpoints();

                var queries = breakpoints.split(',').map(function (query) {
                    var q = query.split('=');
                    return {maxViewport: Number(q[0]), source: q[1]};
                });

                var makeImagesResponsive = function () {
                    var sources = scope.sources;
                    var lastValidSource = queries[queries.length - 1].source;
                    for (var i = 0, j = queries.length - 1, query; i <= j; j--) {
                        query = queries[j];
                        if (responsiveImages.getViewport() > query.maxViewport) {
                            break;
                        }
                        lastValidSource = query.source;
                    }
                    var src;
                    if ("undefined" !== typeof attrs.isThumbnail) {
                        src = sources[responsiveImages.getThumbnailKey() + lastValidSource];
                    } else {
                        src = sources[lastValidSource];
                    }
                    if (element.attr('src') !== src) {
                        element.attr('src', src);
                    }
                };

                makeImagesResponsive();
                scope.$on('jg.responsiveImages::resize', function () {
                    makeImagesResponsive();
                });
            }
        };
    };
    responsiveImageDirective.$inject = ['responsiveImages'];

    var $config = function (responsiveImagesProvider) {
        responsiveImagesProvider.config();
    };
    $config.$inject = ['responsiveImagesProvider'];

    var $run = function ($window, $rootScope, responsiveImages) {
        var notifyResize = function () {
            responsiveImages.updateViewport();
            $rootScope.$broadcast('jg.responsiveImages::resize');
        };
        var resizeEvent = function () {
            $rootScope.$apply(function () {
                notifyResize();
            });
        };

        notifyResize();
        var $w = angular.element($window);
        $w.unbind('resize', resizeEvent);
        $w.bind('resize', resizeEvent);
    };
    $run.$inject = ['$window', '$rootScope', 'responsiveImages'];

    module
        .provider('responsiveImages', responsiveImagesProvider)
        .directive('responsiveImage', responsiveImageDirective)
        .config($config)
        .run($run);
})(angular.module('jg.responsiveImages', []));

(function (module) {
    /*
     // @name: JG Overlay
     // @version: 0.0.1
     // @description: Angular plugin for easy
     //
     // Copyright 2016-2017 Jarvi Games, http://jarvigames.com
     // Licensed under the MIT license
     */

    var overlayProvider = function () {
        var $provider = this;
        this.$get = function ($document) {
            var registeredOverlays = {};
            var body = angular.element($document[0].body);
            var div = angular.element('<div></div>');
            var overlayElement = function (element, settings) {
                div.css({
                    position: 'fixed',
                    top: settings.top,
                    left: settings.left,
                    width: settings.width,
                    height: settings.height,
                    zIndex: settings.zIndex,
                    display: 'block',
                    background: '#000',
                    opacity: 0,
                    transition: 'all .5s'
                });
                body.prepend(div);
                element.css({
                    zIndex: settings.zIndex*2
                });
                setTimeout(function () {
                    div.css({opacity: .6});
                })
            };

            var dissmissOverlay = function (element) {

            };

            return {
                addOverlay: function (id, element, settings) {
                    return registeredOverlays[id] = {element: element, settings: settings};
                },
                removeOverlay: function (id) {
                    this.dismissOverlay(id);
                    delete registeredOverlays[id];
                },
                requireOverlay: function (idOrElement, settings) {
                    if ('string' === typeof idOrElement) {
                        var overlay = registeredOverlays[id];
                        if (overlay) {
                            overlayElement(overlay.element, overlay.settings);
                        }
                    } else {
                        overlayElement(idOrElement, settings);
                    }
                },
                dismissOverlay: function (idOrElement) {
                    if ('string' === typeof idOrElement) {
                        var overlay = registeredOverlays[id];
                        if (overlay) {
                            dissmissOverlay(overlay.element);
                        }
                    } else {
                        dissmissOverlay(idOrElement);
                    }
                }
            };
        };
        this.$get.$inject = ['$document'];
    };

    var overlayDirective = function (overlay) {

        return {
            restrict: 'A',
            scope: {
                settings: '=?'
            },
            link: function (scope, element, attrs) {
                var defSettings = {
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1000000,
                    hover: true
                };

                var settings = scope.settings = angular.extend({}, scope.settings || {}, defSettings);
                for (var settName  in settings) {
                    if (settName != 'zIndex' && settName != 'hover' && !isNaN(settings[settName])) {
                        settings[settName] = settings[settName] + "px";
                    }
                }
                overlay.addOverlay(attrs.overlay, element, settings);

                if (settings.hover) {
                    element.on('mouseenter', function () {
                        overlay.requireOverlay(element, settings);
                    });
                    element.on('mouseleave', function () {
                        overlay.requireOverlay(element, settings);
                    });
                }

                scope.$on('$destroy', function () {
                    overlay.removeOverlay(attrs.overlay);
                });
            }
        };
    };
    overlayDirective.$inject = ['overlay'];

    module
        .provider('overlay', overlayProvider)
        .directive('overlay', overlayDirective);
})(angular.module('jg.overlay', []));