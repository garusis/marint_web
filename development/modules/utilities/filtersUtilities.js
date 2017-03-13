/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  module
    .filter('cleanStringSpaces', function () {
      return function (input) {
        return input && input.replace(/\s/g, ' ');
      };
    })
    .filter('concatOrigin', [
      "originsManager",
      function (originsManager) {
        return function (input, origin) {
          if (!input) {
            input = ""
          }
          if (input[0] !== "/") {
            input = "/" + input
          }
          return originsManager.getOrigin(origin) + input;
        };
      }
    ]);
})(angular.module('jg.marlininternacional.utilities'));
