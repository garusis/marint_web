/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  module.filter('cleanStringSpaces', function () {
    return function (input) {
      return input.replace(/\s/g, ' ');
    };
  });
})(angular.module('jg.marlininternacional.utilities'));
