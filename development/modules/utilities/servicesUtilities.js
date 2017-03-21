"use strict"
/**
 * Created by garusis on 14/03/17.
 */


/**
 * This module makes it easier for you to create resource's relations.
 */
;
(function (module) {

  HasManyRelation.prototype = new Array()
  function HasManyRelation ($http) {
    this.$http = $http
  }

  /**
   * @param {HasManyRelation} relation
   * @param {String} basePath
   * @param {Object} settings
   * @param {Boolean} [settings.isPolymorphic] Flag that indicates if the objects in this collection are
   *                    instances of diferents classes.
   * @param {String} [settings.discriminator] Field in the instance that indicates which instanceCtor entry use as constructor.
   * @param {Function|Object} [settings.instanceCtor] Object constructor(s) that receives each created or loaded element through the
   *                    this relation. If  The new Object will be stored in the collection.
   * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
   *                    This functions is called once for each element.
   * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
   *                    This functions is called once for each element.
   */
  HasManyRelation.build = function (relation, basePath, settings) {
    relation.basePath = basePath
    relation.__settings__ = settings || {}
    relation.__resolved__ = false
  }

  HasManyRelation.prototype.__process__ = function (instance) {
    if (this.__settings__.instanceCtor) {
      var instanceCtor = this.__settings__.instanceCtor
      if (this.__settings__.isPolymorphic) {
        instanceCtor = instanceCtor[instance[this.__settings__.discriminator]]
      }
      instance = new instanceCtor(instance, this.basePath)
    }
    if (this.__settings__.afterLoad) {
      this.__settings__.afterLoad(instance)
    }
    return instance
  }

  HasManyRelation.prototype.__addToCache__ = function (instance) {
    this.push(this.__process__(instance))
  }

  HasManyRelation.prototype.get = function (filter) {
    var relation = this
    relation.__resolved__ = false

    return this.$http.get(this.basePath, {params: {filter: filter}})
      .then(function (response) {
        relation.length = 0
        response.data.forEach(function (elem) {
          relation.__addToCache__(elem)
        })
        relation.__resolved__ = true
        return relation
      })
  }

  HasManyRelation.prototype.getById = function (id, filter) {
    var relation = this

    return this.$http.get(this.basePath + "/" + id, {params: {filter: filter}})
      .then(function (response) {
        return relation.__process__(response.data)
      })
  }

  HasManyRelation.prototype.post = function (data) {
    var relation = this
    return this.$http.post(this.basePath, data)
      .then(function (response) {
        return relation.__addToCache__(response.data)
      })
  }

  function HasOneRelation ($http, basePath, settings) {
    this.__proto__ = _.assign({}, HasOneRelation.prototype)

    this.$http = $http
    HasOneRelation.build(this, basePath, settings)
  }

  /**
   * @param {HasOneRelation} relation
   * @param {String} basePath
   * @param {Object} [settings]
   * @param {Boolean} [settings.isPolymorphic] Flag that indicates if the objects in this collection are
   *                    instances of diferents classes.
   * @param {String} [settings.discriminator] Field in the instance that indicates which instanceCtor entry use as constructor.
   * @param {Function} [settings.instanceCtor] Object constructor that receives each created or loaded element through the
   *                    this relation. The new Object will be stored in the collection.
   * @param {Function} [settings.afterLoad] function called before a new object in the array is created or loaded.
   *                    This functions is called once for each element.
   */
  HasOneRelation.build = function (relation, basePath, settings) {
    relation.basePath = basePath
    relation.__settings__ = settings || {}
    relation.__resolved__ = false
  }

  HasOneRelation.prototype.__load__ = function (instance) {
    if (this.__settings__.instanceCtor) {
      var instanceCtor = this.__settings__.instanceCtor
      if (this.__settings__.isPolymorphic) {
        instanceCtor = instanceCtor[instance[this.__settings__.discriminator]]
      }
      instance = new instanceCtor(instance, this.basePath)
    }
    this.__proto__.__proto__.__proto__ = instance
    if (this.__settings__.afterLoad) {
      this.__settings__.afterLoad(this)
    }
    this.__resolved__ = true
  }

  HasOneRelation.prototype.get = function (filter) {
    var relation = this
    relation.__resolved__ = false

    return this.$http.get(this.basePath, {params: {filter: filter}})
      .then(function (response) {
        relation.__load__(response.data)
        return relation
      })
  }

  HasOneRelation.prototype.post = function (data) {
    var relation = this
    relation.__resolved__ = false
    return this.$http.post(this.basePath, data)
      .then(function (response) {
        return relation.__load__(response.data)
      })
  }

  HasOneRelation.prototype.put = function (data) {
    var relation = this
    relation.__resolved__ = false
    return this.$http.put(this.basePath, data)
      .then(function (response) {
        return relation.__load__(response.data)
      })
  }

  function RelbuiProvider () {

    this.$get = ["$http", function ($http) {

      /**
       *
       * @param {String} basePath
       * @param {Object} [settings]
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
       * @param {Object} [settings]
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

;
(function (module) {

  module.factory("RestUtils", function () {
    return {
      addInclude: addInclude
    }
  })

  function addInclude (filter, toInclude) {
    if (!filter) {
      filter = {}
    }
    if (!filter.include) {
      filter.include = []
    }
    if (!_.isArrayLike(filter.include)) {
      filter.include = [filter.include]
    }

    if (_.isArray(toInclude)) {
      filter.include = _.union(filter.include, toInclude)
    } else {
      filter.include.push(toInclude)
    }

    return filter
  }

})(angular.module('jg.marlininternacional.utilities'))