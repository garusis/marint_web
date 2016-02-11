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
