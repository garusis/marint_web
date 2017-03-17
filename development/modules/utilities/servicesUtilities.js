"use strict"
/**
 * Created by garusis on 14/03/17.
 */


/**
 * This module makes it easier for you to create resource's relations.
 */
;
(function (module) {

  HasOneRelation.prototype = new Array()
  function HasManyRelation ($http) {
    this.$http = $http
  }

  /**
   * @param {HasOneRelation} relation
   * @param {String} basePath
   * @param {Object} settings
   * @param {Function} [settings.instanceCtor] Object constructor that receives each created or loaded element through the
   *                    this relation. The new Object will be stored in the collection.
   * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
   *                    This functions is called once for each element.
   */
  HasManyRelation.build = function (relation, basePath, settings) {
    relation.basePath = basePath
    relation.__settings__ = settings
  }

  HasManyRelation.prototype.__addToCache__ = function (instance) {
    if (this.__settings__.instanceCtor) {
      instance = new this.__settings__.instanceCtor(instance)
    }
    if (this.__settings__.afterLoad) {
      this.__settings__.afterLoad(instance)
    }
    this.push(instance)
  }

  HasManyRelation.prototype.get = function (filter) {
    var relation = this

    return this.$http.get(this.basePath, {params: {filter: filter}})
      .then(function (response) {
        relation.length = 0
        response.data.forEach(function (elem) {
          relation.__addToCache__(elem)
        })
        return relation
      })
  }

  function HasOneRelation ($http, basePath, settings) {
    this.$http = $http
    HasOneRelation.build(this, basePath, settings)
  }

  /**
   * @param {HasOneRelation} relation
   * @param {String} basePath
   * @param {Object} settings
   * @param {Function} [settings.instanceCtor] Object constructor that receives each created or loaded element through the
   *                    this relation. The new Object will be stored in the collection.
   * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
   *                    This functions is called once for each element.
   */
  HasOneRelation.build = function (relation, basePath, settings) {
    relation.basePath = basePath
    relation.__settings__ = settings
  }

  HasOneRelation.prototype.__load__ = function (instance) {
    if (this.__settings__.instanceCtor) {
      instance = new this.__settings__.instanceCtor(instance)
    }
    this.__proto__.__proto__.__proto__ = instance
    if (this.__settings__.afterLoad) {
      this.__settings__.afterLoad(this)
    }
  }

  HasOneRelation.prototype.get = function (filter) {
    var relation = this

    return this.$http.get(this.basePath, {params: {filter: filter}})
      .then(function (response) {
        relation.__load__(response.data)
        return relation
      })
  }

  function RelbuiProvider () {

    this.$get = ["$http", function ($http) {

      /**
       *
       * @param {String} basePath
       * @param {Object} settings
       * @param {Function} [settings.instanceCtor] Object constructor that receives each created or loaded element through
       *                    this relation. The new Object will be stored in the collection.
       * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
       *                    This functions is called once for each element.
       */
      function HasMany (basePath, settings) {
        HasManyRelation.build(this, basePath, settings)
      }
      HasMany.prototype = new HasManyRelation($http)

      /**
       *
       * @param {String} basePath
       * @param {Object} settings
       * @param {Function} [settings.instanceCtor] Object constructor that receives the created or loaded element through
       *                    this relation.                     .
       * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
       *                    This functions is called once for each element.
       */
      function HasOne (basePath, settings) {
        this.__proto__ = new HasOneRelation($http, basePath, settings)
      }

      /**
       * @class Relbui
       */
      return {
        HasMany: HasMany,
        HasOne: HasOne
      }
    }]

  }

  module.provider("Relbui", RelbuiProvider)

})(angular.module("jg.relbui", []))