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
})(angular.module('jg.marlininternacional.utilities', ['com.alphonsegs.paginator']));
