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
                scope: {
                    owl: "=?"
                },
                link: function (scope, element, attrs) {
                    if (!scope.owl) {
                        scope.owl= {};
                    }
                    element.owlCarousel(scope.owl);

                    element.find(".next").click(function(){
                        owl.trigger('owl.next');
                    });
                    element.find(".prev").click(function(){
                        owl.trigger('owl.prev');
                    });
                }
            };
        }]);
})(angular.module('jg.marlininternacional.utilities', []));
