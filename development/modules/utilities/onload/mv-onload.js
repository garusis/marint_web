/**
 * Created by Alejandro Molina Vergel Febrero 2017
 * @author Alejandro Molina Vergel
 * @email alejandro_mover@hotmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    function compile($compile, element, attrs) {
        var compiled = $compile(element, null, 5000);
        return function (scope) {
            compiled(scope);
        }
    }
    function pre(scope, element, attrs, controller, transcludeFn, $compile) {
        
        console.log("pre")
        compile($compile, element, attrs)(scope)
        scope._mvoloadstatus=true
    }
    function post(scope, element, attrs, controller, transcludeFn) {
        console.log("pos")
        console.log(scope,attrs)
        if (typeof scope[attrs.mvonload] === "function") {
            console.log("is a function")
            scope.$watch("_mvoloadstatus",function(){
                if(scope._mvoloadstatus)
                {
                    scope[attrs.mvonload]()
                }
            })
        }
    }
    directive.$inject = ["$compile"]
    function directive($compile) {
        return  {
            restrict: 'A',
            priority: 5000,
            terminal: true,
            scope: false,
            link: {
                pre: function (scope, element, attrs, controller, transcludeFn) {
                    pre(scope, element, attrs, controller, transcludeFn,$compile);
                },
                post: function (scope, element, attrs, controller, transcludeFn) {
                    post(scope, element, attrs, controller, transcludeFn);
                }
            }
        }
    }
    module.directive("mvonload", directive);
})(angular.module('com.alphonsegs.mvonload', []));
