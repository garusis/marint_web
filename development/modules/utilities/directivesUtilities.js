"use strict";
/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;!(function (module) {
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
                controller: ["$scope", "$element", function ($scope, $element) {
                    var owl;
                    this.initOwl = function () {
                        if (owl) {
                            owlCarousel.destroy();
                        }
                        $element.owlCarousel($scope.owl);
                        owl = $element.data('owlCarousel');
                    };
                }],
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
        }])
        .directive('accordion', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs, owlCtrl) {

                    function close_accordion_section() {
                        $(element).find('.accordion .accordion-section-title').removeClass('active');
                        $(element).find('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                    }

                    $(element).find('.accordion-section-title').on("click", function (e) {
                        // Grab current anchor value
                        var currentAttrValue = $(this).attr('href');

                        if ($(e.target).is('.active')) {
                            close_accordion_section();
                        } else {
                            close_accordion_section();

                            // Add active class to section title
                            $(element).addClass('active');
                            // Open up the hidden content panel
                            $(element).find('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                        }
                        e.preventDefault();
                    });
                }
            }
        }])
        .directive('videoPlayer', [function () {
            return {
                restrict: 'A',
                scope: {
                    vpSrc: "@"
                },
                link: function (scope, element, attrs, owlCtrl) {
                    var id = element.attr("id")
                    if (!id) {
                        id = "video-player-" + Date.now()
                        element.attr("id", id)
                    }
                    scope.$watch("vpSrc", function () {
                        if (scope.vpSrc) {
                            element.empty()
                            element.append('<source src="' + scope.vpSrc + '" type="video/mp4">')
                            videojs("#" + id, {
                                plugins: {
                                    vjsdownload: {
                                        beforeElement: 'playbackRateMenuButton',
                                        textControl: 'Descargar',
                                        name: 'downloadButton'
                                    }
                                }
                            });
                            document.querySelector("#" + id).style = "width: 873px;height: 480px;"
                        }
                    })
                }
            }
        }])
        .directive('preserveInRole', ['User', function (User) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {

                    if (!User.hasRole(attrs.preserveInRole)) {
                        $(element).remove();
                    }
                }
            }
        }]);

})(angular.module('jg.marlininternacional.utilities'))

;!(function (module) {
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
            defaultBreakpoints: "768=small,992=medium,1200=large,1600=xlarge"
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
                sources: '=',
                backgroundSettings: '=?',
                srcFormat: '@?'
            },
            link: function (scope, element, attrs) {
                var breakpoints = scope.config || scope.breakpoints || responsiveImages.getDefaultBreakpoints();

                var queries = breakpoints.split(',').map(function (query) {
                    var q = query.split('=');
                    return {maxViewport: Number(q[0]), source: q[1]};
                });

                if ("undefined" === typeof scope.srcFormat) {
                    scope.srcFormat = "$source"
                }

                var makeImagesResponsive = function () {
                    var sources = scope.sources;
                    if (!sources)
                        return

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
                    scope.$source = src
                    src = scope.$eval(scope.srcFormat)

                    if ("undefined" === typeof attrs.asBackgroundImage) {
                        if (element.attr('src') !== src) {
                            element.attr('src', src);
                        }
                    } else {
                        if (element.css('background-image') !== "url(" + src + ")") {
                            element.css('background-image', "url(" + src + ")");
                        }
                    }

                    //console.log(src, queries)
                };

                scope.$watch(function () {
                    return JSON.stringify(scope.sources || {})
                }, function (newVal) {
                    if (newVal) {
                        makeImagesResponsive();
                    }
                });

                scope.$watchGroup(['srcFormat'], function (newVal) {
                    if (newVal) {
                        makeImagesResponsive();
                    }
                });
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
            //console.log("resize")
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
})(angular.module('jg.responsiveImages', []))

;!(function (module) {
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
        this.$get = function ($document, $rootScope, $timeout) {
            var registeredOverlays = {};
            var body = angular.element($document[0].body);
            var div = angular.element('<div></div>');
            var overlaysActive = 0;

            var addTooltip = function (element, settings) {
                if (!settings.overlayTooltip) {
                    return;
                }

                var offset = element.offset();
                var $canvas = element.data('jg::overlay::canvas');
                var tooltipContainer = angular.element('<div class="jg-overlay-tooltip"></div>');
                var tooltipText = angular.element('<div class="jg-overlay-tooltip-text">' + settings.overlayTooltip + '</div>');
                var overlayLine1 = angular.element('<div></div>');
                var overlayLine2 = angular.element('<div></div>');

                tooltipContainer.append(overlayLine1).append(overlayLine2).append(tooltipText);
                tooltipContainer.css({
                    position: 'absolute',
                    top: offset.top,
                    zIndex: settings.zIndex * 2,
                    opacity: 0,
                    transition: 'all .1s'
                });
                overlayLine1.css({background: '#FFF', position: 'absolute'});
                overlayLine2.css({background: '#FFF', position: 'absolute'});
                tooltipText.css({
                    color: '#FFF',
                    fontWeight: 'bold',
                    position: 'absolute',
                    width: 200,
                    textAlign: 'center'
                });
                body.prepend(tooltipContainer);

                element.data('jg::overlay::tooltip', tooltipContainer);

                switch (settings.overlayTooltipPosition) {
                    case 'left': {
                        tooltipContainer.css({left: offset.left});
                        overlayLine1.css({height: $canvas.height(), width: '1px'});
                        overlayLine2.css({height: '1px', width: '100px', left: -100, top: $canvas.height() / 2});
                        tooltipText.css({left: -300, top: ($canvas.height() / 2) - (tooltipText.height() / 2)});
                        break;
                    }
                }

                setTimeout(function () {
                    tooltipContainer.css({opacity: 1});
                });

            };

            var overlayElement = function (element, settings) {
                var $canvas;
                element.addClass(settings.overlayClass);
                if (overlaysActive === 0) {
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
                        transition: 'all .1s'
                    });
                    body.prepend(div);
                    setTimeout(function () {
                        div.css({opacity: .7});
                    });
                }
                overlaysActive++;

                html2canvas(element[0], {
                    onrendered: function (canvas) {
                        var elementOffset = element.offset();
                        $canvas = $(canvas);

                        if (settings.overlayHoverDissmiss) {
                            $canvas.on('mouseenter', function () {
                                dismissOverlay(element);
                            });
                        }

                        element.data('jg::overlay::canvas', $canvas);
                        element.data('jg::overlay::settings', settings);

                        $canvas.css({
                            zIndex: settings.zIndex * 2,
                            position: 'absolute',
                            opacity: 0,
                            transition: 'all .1s',
                            top: elementOffset.top,
                            left: elementOffset.left,
                            cursor: 'pointer'
                        });
                        setTimeout(function () {
                            $canvas.css({opacity: 1});
                        });
                        body.prepend($canvas);
                        div.on('click', function () {
                            dismissOverlay(element);
                        });
                        addTooltip(element, settings);
                    }
                });
            };

            var dismissOverlay = function (element) {
                overlaysActive--;
                var $canvas = element.data('jg::overlay::canvas');
                var settings = element.data('jg::overlay::settings');
                var tooltipContainer = element.data('jg::overlay::tooltip');
                element.removeData('jg::overlay::canvas');
                element.removeData('jg::overlay::settings');
                if (tooltipContainer) {
                    element.removeData('jg::overlay::tooltip');
                }

                div.css({opacity: 0});
                $canvas && $canvas.css({opacity: 0});
                tooltipContainer && tooltipContainer.css({opacity: 0});
                settings && element.removeClass(settings.overlayClass);
                setTimeout(function () {
                    if (overlaysActive === 0) {
                        div.remove();
                    }
                    $canvas && $canvas.remove();
                    tooltipContainer && tooltipContainer.remove();
                }, 200);
            };

            return {
                addOverlay: function (id, element, settings) {
                    var overlay = registeredOverlays[id] = {element: element, settings: settings};
                    $timeout(function () {
                        $rootScope.$emit('jg.overlay::addedOverlay', {id: id});
                    });
                    return overlay;
                },
                removeOverlay: function (id) {
                    this.dismissOverlay(id);
                    delete registeredOverlays[id];
                },
                requireOverlay: function (idOrElement, settings) {
                    if ('string' === typeof idOrElement) {
                        var overlay = registeredOverlays[idOrElement];
                        if (overlay) {
                            overlayElement(overlay.element, overlay.settings);
                        }
                    } else {
                        overlayElement(idOrElement, settings);
                    }
                },
                dismissOverlay: function (idOrElement) {
                    if ('string' === typeof idOrElement) {
                        var overlay = registeredOverlays[idOrElement];
                        if (overlay) {
                            dismissOverlay(overlay.element);
                        }
                    } else {
                        dismissOverlay(idOrElement);
                    }
                }
            };
        };
        this.$get.$inject = ['$document', '$rootScope', '$timeout'];
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
                    hover: false,
                    overlayClass: 'jg-overlay'
                };

                var settings = scope.settings = angular.extend({}, scope.settings || {}, defSettings);
                settings.overlayTooltip = attrs.overlayTooltip;
                settings.overlayTooltipPosition = attrs.overlayTooltipPosition || 'bottom';
                settings.overlayHoverDissmiss = attrs.overlayHoverDissmiss;
                for (var settName  in settings) {
                    if (settName != 'zIndex' && settName != 'hover' && !isNaN(settings[settName])) {
                        settings[settName] = settings[settName] + "px";
                    }
                }
                overlay.addOverlay(attrs.overlay, element, settings);

                /*
                 if (attrs.overlayHoverDissmiss) {
                 element.on('mouseenter', function () {
                 overlay.requireOverlay(element, settings);
                 });
                 element.on('mouseenter', function () {
                 overlay.dismissOverlay(element);
                 });
                 }*/

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
})(angular.module('jg.overlay', []))

