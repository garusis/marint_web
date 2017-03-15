"use strict"
/**
 * Created by garusis on 14/03/17.
 */


/**
 * This module makes it easier for you to create resource's relations.
 */
;
(function (module) {

  function RelbuiProvider () {


    this.$get = ["$http", function ($http) {

      function HasMany () {
      }

      return {
        HasMany : HasMany
      }

    }]


  }

  module.provider("Relbui", RelbuiProvider)

})(angular.module("jg.relbui", []))