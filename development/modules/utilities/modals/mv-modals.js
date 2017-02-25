/**
 * Created by Alejandro Molina Vergel Febrero 2016
 * @author Alejandro Molina Vergel
 * @email alejandro_mover@hotmail.com
 * @version 0.0.1
 */
;
!(function (module) {

  function provider () {
    this.$get = function ($rootScope) {
      this.modalsCount = 0;
      this.showModal = function (options) {
        var atts = "";
        for (var i in options) {
          atts += (" " + i + "=" + "\"" + options[i] + "\"");
        }
        var html = "<mv-modal id=\"mdmodal_" + this.modalsCount + "\" " + atts + " ></mv-modal>"

      }
      return this;
    }
    this.$get.$inject = ["$rootScope"];
  }

  function link (scope, element, attrs, controller, transcludeFn, $compile, $http) {

  }

  directive.$inject = ["$compile", "$http"]
  function directive ($compile, $http) {
    return {
      restrict: 'E',
      priority: 5000,
      terminal: true,
      scope: {
        urlTemplate: "="
      },
      link: {
        pre: function (scope, element, attrs, controller, transcludeFn) {
          link(scope, element, attrs, controller, transcludeFn, $compile, $http);
        }
      }
    }
  }

  module.provider("mvModal", provider)
  module.directive("mvModal", directive);
})(angular.module('com.alphonsegs.paginator', []));
