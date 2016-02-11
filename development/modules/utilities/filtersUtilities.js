/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    const limitWordsFilter = function () {
        return function (input, limitTo, elipsis) {
            limitTo = limitTo || 10;
            input = input.split(" ");
            if (input.length > limitTo) {
                input = input.slice(0, limitTo);
                if (elipsis) {
                    input[input.length - 1] = input[input.length - 1] + "...";
                }
            }
            return input.join(" ");
        };
    };
    limitWordsFilter.$inject = [];


    module
        .filter('limitWords', limitWordsFilter);
})(angular.module('jg.marlininternacional.utilities'));
