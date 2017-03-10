// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Push
 * @header lbServices.Push
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Push` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Push",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/push/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Push#send
             * @methodOf lbServices.Push
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `registrationId` – `{string=}` -
             *
             *  - `notification` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Push` object.)
             * </em>
             */
            "send": {
              url: urlBase + "/push/send-notification",
              method: "POST",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Push#modelName
        * @propertyOf lbServices.Push
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Push`.
        */
        R.modelName = "Push";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.AdminAccount
 * @header lbServices.AdminAccount
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AdminAccount` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "AdminAccount",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/admin-accounts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__findById__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__destroyById__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__updateById__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use AdminAccount.credentials.findById() instead.
            "prototype$__findById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.credentials.destroyById() instead.
            "prototype$__destroyById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use AdminAccount.credentials.updateById() instead.
            "prototype$__updateById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/credentials/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__findById__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__destroyById__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__updateById__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use AdminAccount.image() instead.
            "prototype$__get__image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.image.create() instead.
            "prototype$__create__image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.image.update() instead.
            "prototype$__update__image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use AdminAccount.image.destroy() instead.
            "prototype$__destroy__image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__get__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Queries accessTokens of AdminAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/admin-accounts/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__create__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/admin-accounts/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__delete__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/admin-accounts/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__count__accessTokens
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Counts accessTokens of AdminAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/admin-accounts/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.credentials() instead.
            "prototype$__get__credentials": {
              isArray: true,
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.credentials.create() instead.
            "prototype$__create__credentials": {
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.credentials.destroyAll() instead.
            "prototype$__delete__credentials": {
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use AdminAccount.credentials.count() instead.
            "prototype$__count__credentials": {
              url: urlBase + "/admin-accounts/:id/credentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__get__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Queries comments of AdminAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/admin-accounts/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__create__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/admin-accounts/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__delete__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/admin-accounts/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$__count__comments
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Counts comments of AdminAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/admin-accounts/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#create
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/admin-accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#createMany
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/admin-accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#patchOrCreate
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/admin-accounts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#replaceOrCreate
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/admin-accounts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#upsertWithWhere
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/admin-accounts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#exists
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/admin-accounts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#findById
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/admin-accounts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#replaceById
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/admin-accounts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#find
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/admin-accounts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#findOne
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/admin-accounts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#updateAll
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/admin-accounts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#deleteById
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/admin-accounts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#count
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/admin-accounts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$patchAttributes
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/admin-accounts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#createChangeStream
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/admin-accounts/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#login
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/admin-accounts/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#logout
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/admin-accounts/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#confirm
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/admin-accounts/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#resetPassword
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/admin-accounts/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#getCurrent
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/admin-accounts" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#upsert
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#updateOrCreate
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#patchOrCreateWithWhere
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#update
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#destroyById
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#removeById
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#prototype$updateAttributes
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AdminAccount` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.AdminAccount#getCachedCurrent
         * @methodOf lbServices.AdminAccount
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.AdminAccount#login} or
         * {@link lbServices.AdminAccount#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A AdminAccount instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.AdminAccount#isAuthenticated
         * @methodOf lbServices.AdminAccount
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.AdminAccount#getCurrentId
         * @methodOf lbServices.AdminAccount
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.AdminAccount#modelName
        * @propertyOf lbServices.AdminAccount
        * @description
        * The name of the model represented by this $resource,
        * i.e. `AdminAccount`.
        */
        R.modelName = "AdminAccount";

    /**
     * @ngdoc object
     * @name lbServices.AdminAccount.credentials
     * @header lbServices.AdminAccount.credentials
     * @object
     * @description
     *
     * The object `AdminAccount.credentials` groups methods
     * manipulating `AccountCredential` instances related to `AdminAccount`.
     *
     * Call {@link lbServices.AdminAccount#credentials AdminAccount.credentials()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#credentials
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Queries credentials of AdminAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::get::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#count
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Counts credentials of AdminAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.credentials.count = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::count::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#create
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.create = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::create::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#createMany
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::createMany::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#destroyAll
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Deletes all credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::delete::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#destroyById
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Delete a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::destroyById::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#findById
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Find a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::findById::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.credentials#updateById
             * @methodOf lbServices.AdminAccount.credentials
             *
             * @description
             *
             * Update a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::updateById::AdminAccount::credentials"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.AdminAccount.image
     * @header lbServices.AdminAccount.image
     * @object
     * @description
     *
     * The object `AdminAccount.image` groups methods
     * manipulating `Image` instances related to `AdminAccount`.
     *
     * Call {@link lbServices.AdminAccount#image AdminAccount.image()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.AdminAccount#image
             * @methodOf lbServices.AdminAccount
             *
             * @description
             *
             * Fetches hasOne relation image.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::AdminAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.image#create
             * @methodOf lbServices.AdminAccount.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::AdminAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.image#createMany
             * @methodOf lbServices.AdminAccount.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::AdminAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.image#destroy
             * @methodOf lbServices.AdminAccount.image
             *
             * @description
             *
             * Deletes image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.image.destroy = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroy::AdminAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.AdminAccount.image#update
             * @methodOf lbServices.AdminAccount.image
             *
             * @description
             *
             * Update image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AdminAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.update = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::update::AdminAccount::image"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CronAccount
 * @header lbServices.CronAccount
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CronAccount` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CronAccount",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/cron-accounts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__findById__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__destroyById__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__updateById__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CronAccount.credentials.findById() instead.
            "prototype$__findById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.credentials.destroyById() instead.
            "prototype$__destroyById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CronAccount.credentials.updateById() instead.
            "prototype$__updateById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/credentials/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__findById__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__destroyById__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__updateById__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CronAccount.image() instead.
            "prototype$__get__image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.image.create() instead.
            "prototype$__create__image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "POST",
            },

            // INTERNAL. Use CronAccount.image.update() instead.
            "prototype$__update__image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use CronAccount.image.destroy() instead.
            "prototype$__destroy__image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__get__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Queries accessTokens of CronAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/cron-accounts/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__create__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/cron-accounts/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__delete__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/cron-accounts/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__count__accessTokens
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Counts accessTokens of CronAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/cron-accounts/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.credentials() instead.
            "prototype$__get__credentials": {
              isArray: true,
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.credentials.create() instead.
            "prototype$__create__credentials": {
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use CronAccount.credentials.destroyAll() instead.
            "prototype$__delete__credentials": {
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use CronAccount.credentials.count() instead.
            "prototype$__count__credentials": {
              url: urlBase + "/cron-accounts/:id/credentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__get__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Queries comments of CronAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/cron-accounts/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__create__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/cron-accounts/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__delete__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/cron-accounts/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$__count__comments
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Counts comments of CronAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/cron-accounts/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#create
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/cron-accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#createMany
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/cron-accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#patchOrCreate
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/cron-accounts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#replaceOrCreate
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/cron-accounts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#upsertWithWhere
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/cron-accounts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#exists
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/cron-accounts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#findById
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/cron-accounts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#replaceById
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/cron-accounts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#find
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/cron-accounts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#findOne
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/cron-accounts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#updateAll
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/cron-accounts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#deleteById
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/cron-accounts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#count
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/cron-accounts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$patchAttributes
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/cron-accounts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#createChangeStream
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/cron-accounts/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#login
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/cron-accounts/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#logout
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/cron-accounts/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#confirm
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/cron-accounts/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#resetPassword
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/cron-accounts/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#getCurrent
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/cron-accounts" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CronAccount#upsert
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#updateOrCreate
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#patchOrCreateWithWhere
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#update
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#destroyById
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#removeById
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CronAccount#prototype$updateAttributes
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CronAccount` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.CronAccount#getCachedCurrent
         * @methodOf lbServices.CronAccount
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.CronAccount#login} or
         * {@link lbServices.CronAccount#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A CronAccount instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.CronAccount#isAuthenticated
         * @methodOf lbServices.CronAccount
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.CronAccount#getCurrentId
         * @methodOf lbServices.CronAccount
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.CronAccount#modelName
        * @propertyOf lbServices.CronAccount
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CronAccount`.
        */
        R.modelName = "CronAccount";

    /**
     * @ngdoc object
     * @name lbServices.CronAccount.credentials
     * @header lbServices.CronAccount.credentials
     * @object
     * @description
     *
     * The object `CronAccount.credentials` groups methods
     * manipulating `AccountCredential` instances related to `CronAccount`.
     *
     * Call {@link lbServices.CronAccount#credentials CronAccount.credentials()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.CronAccount#credentials
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Queries credentials of CronAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::get::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#count
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Counts credentials of CronAccount.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.credentials.count = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::count::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#create
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.create = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::create::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#createMany
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::createMany::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#destroyAll
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Deletes all credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::delete::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#destroyById
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Delete a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::destroyById::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#findById
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Find a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::findById::CronAccount::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.credentials#updateById
             * @methodOf lbServices.CronAccount.credentials
             *
             * @description
             *
             * Update a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::updateById::CronAccount::credentials"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.CronAccount.image
     * @header lbServices.CronAccount.image
     * @object
     * @description
     *
     * The object `CronAccount.image` groups methods
     * manipulating `Image` instances related to `CronAccount`.
     *
     * Call {@link lbServices.CronAccount#image CronAccount.image()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.CronAccount#image
             * @methodOf lbServices.CronAccount
             *
             * @description
             *
             * Fetches hasOne relation image.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::CronAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.image#create
             * @methodOf lbServices.CronAccount.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::CronAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.image#createMany
             * @methodOf lbServices.CronAccount.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::CronAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.image#destroy
             * @methodOf lbServices.CronAccount.image
             *
             * @description
             *
             * Deletes image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.image.destroy = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroy::CronAccount::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CronAccount.image#update
             * @methodOf lbServices.CronAccount.image
             *
             * @description
             *
             * Update image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CronAccount id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.update = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::update::CronAccount::image"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.AccountCredential
 * @header lbServices.AccountCredential
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccountCredential` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "AccountCredential",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/AccountCredentials/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use AccountCredential.provider() instead.
            "prototype$__get__provider": {
              url: urlBase + "/AccountCredentials/:id/provider",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#create
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/AccountCredentials",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#createMany
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/AccountCredentials",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#patchOrCreate
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/AccountCredentials",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#replaceOrCreate
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/AccountCredentials/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#upsertWithWhere
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/AccountCredentials/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#exists
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/AccountCredentials/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#findById
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/AccountCredentials/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#replaceById
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/AccountCredentials/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#find
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/AccountCredentials",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#findOne
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/AccountCredentials/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#updateAll
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/AccountCredentials/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#deleteById
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/AccountCredentials/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#count
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/AccountCredentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#prototype$patchAttributes
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AccountCredential id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/AccountCredentials/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#createChangeStream
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/AccountCredentials/change-stream",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.credentials.findById() instead.
            "::findById::AdminAccount::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.credentials.destroyById() instead.
            "::destroyById::AdminAccount::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use AdminAccount.credentials.updateById() instead.
            "::updateById::AdminAccount::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/admin-accounts/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use AdminAccount.credentials() instead.
            "::get::AdminAccount::credentials": {
              isArray: true,
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.credentials.create() instead.
            "::create::AdminAccount::credentials": {
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.credentials.createMany() instead.
            "::createMany::AdminAccount::credentials": {
              isArray: true,
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.credentials.destroyAll() instead.
            "::delete::AdminAccount::credentials": {
              url: urlBase + "/admin-accounts/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use AdminAccount.credentials.count() instead.
            "::count::AdminAccount::credentials": {
              url: urlBase + "/admin-accounts/:id/credentials/count",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.credentials.findById() instead.
            "::findById::CronAccount::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.credentials.destroyById() instead.
            "::destroyById::CronAccount::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CronAccount.credentials.updateById() instead.
            "::updateById::CronAccount::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cron-accounts/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CronAccount.credentials() instead.
            "::get::CronAccount::credentials": {
              isArray: true,
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.credentials.create() instead.
            "::create::CronAccount::credentials": {
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use CronAccount.credentials.createMany() instead.
            "::createMany::CronAccount::credentials": {
              isArray: true,
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use CronAccount.credentials.destroyAll() instead.
            "::delete::CronAccount::credentials": {
              url: urlBase + "/cron-accounts/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use CronAccount.credentials.count() instead.
            "::count::CronAccount::credentials": {
              url: urlBase + "/cron-accounts/:id/credentials/count",
              method: "GET",
            },

            // INTERNAL. Use CredentialProvider.credentials.findById() instead.
            "::findById::CredentialProvider::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/credential-providers/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use CredentialProvider.credentials.destroyById() instead.
            "::destroyById::CredentialProvider::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/credential-providers/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CredentialProvider.credentials.updateById() instead.
            "::updateById::CredentialProvider::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/credential-providers/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CredentialProvider.credentials() instead.
            "::get::CredentialProvider::credentials": {
              isArray: true,
              url: urlBase + "/credential-providers/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use CredentialProvider.credentials.create() instead.
            "::create::CredentialProvider::credentials": {
              url: urlBase + "/credential-providers/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use CredentialProvider.credentials.createMany() instead.
            "::createMany::CredentialProvider::credentials": {
              isArray: true,
              url: urlBase + "/credential-providers/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use CredentialProvider.credentials.destroyAll() instead.
            "::delete::CredentialProvider::credentials": {
              url: urlBase + "/credential-providers/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use CredentialProvider.credentials.count() instead.
            "::count::CredentialProvider::credentials": {
              url: urlBase + "/credential-providers/:id/credentials/count",
              method: "GET",
            },

            // INTERNAL. Use Student.credentials.findById() instead.
            "::findById::Student::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use Student.credentials.destroyById() instead.
            "::destroyById::Student::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Student.credentials.updateById() instead.
            "::updateById::Student::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Student.credentials() instead.
            "::get::Student::credentials": {
              isArray: true,
              url: urlBase + "/students/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use Student.credentials.create() instead.
            "::create::Student::credentials": {
              url: urlBase + "/students/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use Student.credentials.createMany() instead.
            "::createMany::Student::credentials": {
              isArray: true,
              url: urlBase + "/students/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use Student.credentials.destroyAll() instead.
            "::delete::Student::credentials": {
              url: urlBase + "/students/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use Student.credentials.count() instead.
            "::count::Student::credentials": {
              url: urlBase + "/students/:id/credentials/count",
              method: "GET",
            },

            // INTERNAL. Use Instructor.credentials.findById() instead.
            "::findById::Instructor::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use Instructor.credentials.destroyById() instead.
            "::destroyById::Instructor::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.credentials.updateById() instead.
            "::updateById::Instructor::credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.credentials() instead.
            "::get::Instructor::credentials": {
              isArray: true,
              url: urlBase + "/instructors/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use Instructor.credentials.create() instead.
            "::create::Instructor::credentials": {
              url: urlBase + "/instructors/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use Instructor.credentials.createMany() instead.
            "::createMany::Instructor::credentials": {
              isArray: true,
              url: urlBase + "/instructors/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use Instructor.credentials.destroyAll() instead.
            "::delete::Instructor::credentials": {
              url: urlBase + "/instructors/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.credentials.count() instead.
            "::count::Instructor::credentials": {
              url: urlBase + "/instructors/:id/credentials/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#upsert
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#updateOrCreate
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#patchOrCreateWithWhere
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#update
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#destroyById
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#removeById
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#prototype$updateAttributes
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AccountCredential id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.AccountCredential#modelName
        * @propertyOf lbServices.AccountCredential
        * @description
        * The name of the model represented by this $resource,
        * i.e. `AccountCredential`.
        */
        R.modelName = "AccountCredential";


            /**
             * @ngdoc method
             * @name lbServices.AccountCredential#provider
             * @methodOf lbServices.AccountCredential
             *
             * @description
             *
             * Fetches belongsTo relation provider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AccountCredential id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R.provider = function() {
          var TargetResource = $injector.get("CredentialProvider");
          var action = TargetResource["::get::AccountCredential::provider"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CredentialProvider
 * @header lbServices.CredentialProvider
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CredentialProvider` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CredentialProvider",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/credential-providers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use CredentialProvider.credentials.findById() instead.
            "prototype$__findById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/credential-providers/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use CredentialProvider.credentials.destroyById() instead.
            "prototype$__destroyById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/credential-providers/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CredentialProvider.credentials.updateById() instead.
            "prototype$__updateById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/credential-providers/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CredentialProvider.credentials() instead.
            "prototype$__get__credentials": {
              isArray: true,
              url: urlBase + "/credential-providers/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use CredentialProvider.credentials.create() instead.
            "prototype$__create__credentials": {
              url: urlBase + "/credential-providers/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use CredentialProvider.credentials.destroyAll() instead.
            "prototype$__delete__credentials": {
              url: urlBase + "/credential-providers/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use CredentialProvider.credentials.count() instead.
            "prototype$__count__credentials": {
              url: urlBase + "/credential-providers/:id/credentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#create
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/credential-providers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#createMany
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/credential-providers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#patchOrCreate
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/credential-providers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#replaceOrCreate
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/credential-providers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#upsertWithWhere
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/credential-providers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#exists
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/credential-providers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#findById
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/credential-providers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#replaceById
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/credential-providers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#find
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/credential-providers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#findOne
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/credential-providers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#updateAll
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/credential-providers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#deleteById
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/credential-providers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#count
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/credential-providers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#prototype$patchAttributes
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/credential-providers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#createChangeStream
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/credential-providers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use AccountCredential.provider() instead.
            "::get::AccountCredential::provider": {
              url: urlBase + "/AccountCredentials/:id/provider",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#upsert
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#updateOrCreate
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#patchOrCreateWithWhere
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#update
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#destroyById
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#removeById
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#prototype$updateAttributes
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CredentialProvider` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.CredentialProvider#modelName
        * @propertyOf lbServices.CredentialProvider
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CredentialProvider`.
        */
        R.modelName = "CredentialProvider";

    /**
     * @ngdoc object
     * @name lbServices.CredentialProvider.credentials
     * @header lbServices.CredentialProvider.credentials
     * @object
     * @description
     *
     * The object `CredentialProvider.credentials` groups methods
     * manipulating `AccountCredential` instances related to `CredentialProvider`.
     *
     * Call {@link lbServices.CredentialProvider#credentials CredentialProvider.credentials()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider#credentials
             * @methodOf lbServices.CredentialProvider
             *
             * @description
             *
             * Queries credentials of CredentialProvider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::get::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#count
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Counts credentials of CredentialProvider.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.credentials.count = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::count::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#create
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.create = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::create::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#createMany
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::createMany::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#destroyAll
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Deletes all credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::delete::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#destroyById
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Delete a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::destroyById::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#findById
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Find a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::findById::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CredentialProvider.credentials#updateById
             * @methodOf lbServices.CredentialProvider.credentials
             *
             * @description
             *
             * Update a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - CredentialProvider id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::updateById::CredentialProvider::credentials"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.AppConstant
 * @header lbServices.AppConstant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AppConstant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "AppConstant",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/appconstants/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#create
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/appconstants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#createMany
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/appconstants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#patchOrCreate
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/appconstants",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#replaceOrCreate
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/appconstants/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#upsertWithWhere
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/appconstants/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#exists
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/appconstants/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#findById
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/appconstants/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#replaceById
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/appconstants/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#find
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/appconstants",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#findOne
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/appconstants/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#updateAll
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/appconstants/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#deleteById
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/appconstants/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#count
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/appconstants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#prototype$patchAttributes
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AppConstant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/appconstants/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#createChangeStream
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/appconstants/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#getPublic
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
            "getPublic": {
              isArray: true,
              url: urlBase + "/appconstants/getPublic",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.AppConstant#upsert
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#updateOrCreate
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#patchOrCreateWithWhere
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#update
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#destroyById
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#removeById
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.AppConstant#prototype$updateAttributes
             * @methodOf lbServices.AppConstant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - AppConstant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AppConstant` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.AppConstant#modelName
        * @propertyOf lbServices.AppConstant
        * @description
        * The name of the model represented by this $resource,
        * i.e. `AppConstant`.
        */
        R.modelName = "AppConstant";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Student
 * @header lbServices.Student
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Student` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Student",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/students/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__findById__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__updateById__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Student.credentials.findById() instead.
            "prototype$__findById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use Student.credentials.destroyById() instead.
            "prototype$__destroyById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Student.credentials.updateById() instead.
            "prototype$__updateById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/credentials/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Student.gender() instead.
            "prototype$__get__gender": {
              url: urlBase + "/students/:id/gender",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__findById__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__destroyById__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__updateById__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Student.image() instead.
            "prototype$__get__image": {
              url: urlBase + "/students/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Student.image.create() instead.
            "prototype$__create__image": {
              url: urlBase + "/students/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Student.image.update() instead.
            "prototype$__update__image": {
              url: urlBase + "/students/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Student.image.destroy() instead.
            "prototype$__destroy__image": {
              url: urlBase + "/students/:id/image",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__findById__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Find a related item by id for courses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for courses
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__findById__courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/courses/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__destroyById__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Delete a related item by id for courses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for courses
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/courses/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__updateById__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update a related item by id for courses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `fk` – `{*}` - Foreign key for courses
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__updateById__courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/students/:id/courses/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__get__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Queries accessTokens of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/students/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__create__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/students/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__delete__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/students/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__count__accessTokens
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Counts accessTokens of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/students/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Student.credentials() instead.
            "prototype$__get__credentials": {
              isArray: true,
              url: urlBase + "/students/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use Student.credentials.create() instead.
            "prototype$__create__credentials": {
              url: urlBase + "/students/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use Student.credentials.destroyAll() instead.
            "prototype$__delete__credentials": {
              url: urlBase + "/students/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use Student.credentials.count() instead.
            "prototype$__count__credentials": {
              url: urlBase + "/students/:id/credentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__get__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Queries comments of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/students/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__create__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/students/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__delete__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/students/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__count__comments
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Counts comments of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/students/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__get__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Queries courses of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__get__courses": {
              isArray: true,
              url: urlBase + "/students/:id/courses",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__create__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Creates a new instance in courses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$__create__courses": {
              url: urlBase + "/students/:id/courses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__delete__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Deletes all courses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__courses": {
              url: urlBase + "/students/:id/courses",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$__count__courses
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Counts courses of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__courses": {
              url: urlBase + "/students/:id/courses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#create
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/students",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#createMany
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/students",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#patchOrCreate
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/students",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#replaceOrCreate
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/students/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#upsertWithWhere
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/students/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#exists
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/students/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#findById
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/students/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#replaceById
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/students/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#find
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/students",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#findOne
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/students/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#updateAll
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/students/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#deleteById
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/students/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#count
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/students/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$patchAttributes
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/students/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#createChangeStream
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/students/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#login
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/students/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#logout
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/students/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#confirm
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/students/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#resetPassword
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/students/reset",
              method: "POST",
            },

            // INTERNAL. Use Course.students.findById() instead.
            "::findById::Course::students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/:fk",
              method: "GET",
            },

            // INTERNAL. Use Course.students.destroyById() instead.
            "::destroyById::Course::students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Course.students.updateById() instead.
            "::updateById::Course::students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Course.students.link() instead.
            "::link::Course::students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Course.students.unlink() instead.
            "::unlink::Course::students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Course.students.exists() instead.
            "::exists::Course::students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Course.students() instead.
            "::get::Course::students": {
              isArray: true,
              url: urlBase + "/courses/:id/students",
              method: "GET",
            },

            // INTERNAL. Use Course.students.create() instead.
            "::create::Course::students": {
              url: urlBase + "/courses/:id/students",
              method: "POST",
            },

            // INTERNAL. Use Course.students.createMany() instead.
            "::createMany::Course::students": {
              isArray: true,
              url: urlBase + "/courses/:id/students",
              method: "POST",
            },

            // INTERNAL. Use Course.students.destroyAll() instead.
            "::delete::Course::students": {
              url: urlBase + "/courses/:id/students",
              method: "DELETE",
            },

            // INTERNAL. Use Course.students.count() instead.
            "::count::Course::students": {
              url: urlBase + "/courses/:id/students/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Student#getCurrent
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/students" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Student#upsert
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Student#updateOrCreate
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Student#patchOrCreateWithWhere
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Student#update
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Student#destroyById
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Student#removeById
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Student#prototype$updateAttributes
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Student#getCachedCurrent
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Student#login} or
         * {@link lbServices.Student#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Student instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Student#isAuthenticated
         * @methodOf lbServices.Student
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Student#getCurrentId
         * @methodOf lbServices.Student
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Student#modelName
        * @propertyOf lbServices.Student
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Student`.
        */
        R.modelName = "Student";

    /**
     * @ngdoc object
     * @name lbServices.Student.credentials
     * @header lbServices.Student.credentials
     * @object
     * @description
     *
     * The object `Student.credentials` groups methods
     * manipulating `AccountCredential` instances related to `Student`.
     *
     * Call {@link lbServices.Student#credentials Student.credentials()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Student#credentials
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Queries credentials of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::get::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#count
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Counts credentials of Student.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.credentials.count = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::count::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#create
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.create = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::create::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#createMany
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::createMany::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#destroyAll
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Deletes all credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::delete::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#destroyById
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Delete a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::destroyById::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#findById
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Find a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::findById::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.credentials#updateById
             * @methodOf lbServices.Student.credentials
             *
             * @description
             *
             * Update a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::updateById::Student::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student#gender
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Fetches belongsTo relation gender.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R.gender = function() {
          var TargetResource = $injector.get("Gender");
          var action = TargetResource["::get::Student::gender"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Student.image
     * @header lbServices.Student.image
     * @object
     * @description
     *
     * The object `Student.image` groups methods
     * manipulating `Image` instances related to `Student`.
     *
     * Call {@link lbServices.Student#image Student.image()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Student#image
             * @methodOf lbServices.Student
             *
             * @description
             *
             * Fetches hasOne relation image.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::Student::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.image#create
             * @methodOf lbServices.Student.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::Student::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.image#createMany
             * @methodOf lbServices.Student.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::Student::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.image#destroy
             * @methodOf lbServices.Student.image
             *
             * @description
             *
             * Deletes image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.image.destroy = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroy::Student::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Student.image#update
             * @methodOf lbServices.Student.image
             *
             * @description
             *
             * Update image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Student id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.update = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::update::Student::image"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Gender
 * @header lbServices.Gender
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Gender` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Gender",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/genders/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Gender#create
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/genders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#createMany
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/genders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#patchOrCreate
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/genders",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#replaceOrCreate
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/genders/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#upsertWithWhere
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/genders/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#exists
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/genders/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#findById
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/genders/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#replaceById
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/genders/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#find
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/genders",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#findOne
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/genders/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#updateAll
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/genders/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#deleteById
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/genders/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#count
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/genders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#prototype$patchAttributes
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Gender id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/genders/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Gender#createChangeStream
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/genders/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Student.gender() instead.
            "::get::Student::gender": {
              url: urlBase + "/students/:id/gender",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Gender#upsert
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Gender#updateOrCreate
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Gender#patchOrCreateWithWhere
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Gender#update
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Gender#destroyById
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Gender#removeById
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Gender#prototype$updateAttributes
             * @methodOf lbServices.Gender
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Gender id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gender` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Gender#modelName
        * @propertyOf lbServices.Gender
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Gender`.
        */
        R.modelName = "Gender";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Course
 * @header lbServices.Course
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Course` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Course",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/courses/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__findById__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Find a related item by id for modules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for modules
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "prototype$__findById__modules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/modules/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__destroyById__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Delete a related item by id for modules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for modules
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__modules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/modules/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__updateById__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Update a related item by id for modules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `fk` – `{*}` - Foreign key for modules
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "prototype$__updateById__modules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/modules/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Course.image() instead.
            "prototype$__get__image": {
              url: urlBase + "/courses/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Course.image.create() instead.
            "prototype$__create__image": {
              url: urlBase + "/courses/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Course.image.update() instead.
            "prototype$__update__image": {
              url: urlBase + "/courses/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Course.image.destroy() instead.
            "prototype$__destroy__image": {
              url: urlBase + "/courses/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use Course.instructor() instead.
            "prototype$__get__instructor": {
              url: urlBase + "/courses/:id/instructor",
              method: "GET",
            },

            // INTERNAL. Use Course.students.findById() instead.
            "prototype$__findById__students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/:fk",
              method: "GET",
            },

            // INTERNAL. Use Course.students.destroyById() instead.
            "prototype$__destroyById__students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Course.students.updateById() instead.
            "prototype$__updateById__students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Course.students.link() instead.
            "prototype$__link__students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Course.students.unlink() instead.
            "prototype$__unlink__students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Course.students.exists() instead.
            "prototype$__exists__students": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/courses/:id/students/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__get__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Queries modules of Course.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "prototype$__get__modules": {
              isArray: true,
              url: urlBase + "/courses/:id/modules",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__create__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Creates a new instance in modules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "prototype$__create__modules": {
              url: urlBase + "/courses/:id/modules",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__delete__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Deletes all modules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__modules": {
              url: urlBase + "/courses/:id/modules",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$__count__modules
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Counts modules of Course.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__modules": {
              url: urlBase + "/courses/:id/modules/count",
              method: "GET",
            },

            // INTERNAL. Use Course.students() instead.
            "prototype$__get__students": {
              isArray: true,
              url: urlBase + "/courses/:id/students",
              method: "GET",
            },

            // INTERNAL. Use Course.students.create() instead.
            "prototype$__create__students": {
              url: urlBase + "/courses/:id/students",
              method: "POST",
            },

            // INTERNAL. Use Course.students.destroyAll() instead.
            "prototype$__delete__students": {
              url: urlBase + "/courses/:id/students",
              method: "DELETE",
            },

            // INTERNAL. Use Course.students.count() instead.
            "prototype$__count__students": {
              url: urlBase + "/courses/:id/students/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#create
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/courses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#createMany
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/courses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#patchOrCreate
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/courses",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#replaceOrCreate
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/courses/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#upsertWithWhere
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/courses/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#exists
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/courses/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#findById
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/courses/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#replaceById
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/courses/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#find
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/courses",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#findOne
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/courses/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#updateAll
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/courses/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#deleteById
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/courses/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#count
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/courses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$patchAttributes
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/courses/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Course#createChangeStream
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/courses/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Instructor.courses.findById() instead.
            "::findById::Instructor::courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Instructor.courses.destroyById() instead.
            "::destroyById::Instructor::courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courses/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.courses.updateById() instead.
            "::updateById::Instructor::courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courses/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.courses() instead.
            "::get::Instructor::courses": {
              isArray: true,
              url: urlBase + "/instructors/:id/courses",
              method: "GET",
            },

            // INTERNAL. Use Instructor.courses.create() instead.
            "::create::Instructor::courses": {
              url: urlBase + "/instructors/:id/courses",
              method: "POST",
            },

            // INTERNAL. Use Instructor.courses.createMany() instead.
            "::createMany::Instructor::courses": {
              isArray: true,
              url: urlBase + "/instructors/:id/courses",
              method: "POST",
            },

            // INTERNAL. Use Instructor.courses.destroyAll() instead.
            "::delete::Instructor::courses": {
              url: urlBase + "/instructors/:id/courses",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.courses.count() instead.
            "::count::Instructor::courses": {
              url: urlBase + "/instructors/:id/courses/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Course#upsert
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Course#updateOrCreate
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Course#patchOrCreateWithWhere
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Course#update
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Course#destroyById
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Course#removeById
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Course#prototype$updateAttributes
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Course#modelName
        * @propertyOf lbServices.Course
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Course`.
        */
        R.modelName = "Course";

    /**
     * @ngdoc object
     * @name lbServices.Course.image
     * @header lbServices.Course.image
     * @object
     * @description
     *
     * The object `Course.image` groups methods
     * manipulating `Image` instances related to `Course`.
     *
     * Call {@link lbServices.Course#image Course.image()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Course#image
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Fetches hasOne relation image.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::Course::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.image#create
             * @methodOf lbServices.Course.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::Course::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.image#createMany
             * @methodOf lbServices.Course.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::Course::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.image#destroy
             * @methodOf lbServices.Course.image
             *
             * @description
             *
             * Deletes image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.image.destroy = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroy::Course::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.image#update
             * @methodOf lbServices.Course.image
             *
             * @description
             *
             * Update image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.update = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::update::Course::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course#instructor
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Fetches belongsTo relation instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R.instructor = function() {
          var TargetResource = $injector.get("Instructor");
          var action = TargetResource["::get::Course::instructor"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.students
     * @header lbServices.Course.students
     * @object
     * @description
     *
     * The object `Course.students` groups methods
     * manipulating `Student` instances related to `Course`.
     *
     * Call {@link lbServices.Course#students Course.students()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Course#students
             * @methodOf lbServices.Course
             *
             * @description
             *
             * Queries students of Course.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#count
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Counts students of Course.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.students.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#create
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Creates a new instance in students of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#createMany
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Creates a new instance in students of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#destroyAll
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Deletes all students of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.students.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#destroyById
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Delete a related item by id for students.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for students
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.students.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#exists
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Check the existence of students relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for students
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students.exists = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::exists::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#findById
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Find a related item by id for students.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for students
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#link
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Add a related item by id for students.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `fk` – `{*}` - Foreign key for students
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students.link = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::link::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#unlink
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Remove the students relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for students
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.students.unlink = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::unlink::Course::students"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Course.students#updateById
             * @methodOf lbServices.Course.students
             *
             * @description
             *
             * Update a related item by id for students.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Course id
             *
             *  - `fk` – `{*}` - Foreign key for students
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Student` object.)
             * </em>
             */
        R.students.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::Course::students"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Image
 * @header lbServices.Image
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Image` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Image",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/images/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Image#create
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/images",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#createMany
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/images",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#patchOrCreate
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/images",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#replaceOrCreate
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/images/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#upsertWithWhere
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/images/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#exists
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/images/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#findById
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/images/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#replaceById
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/images/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#find
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/images",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#findOne
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/images/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#updateAll
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/images/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#deleteById
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/images/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#count
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/images/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#prototype$patchAttributes
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Image id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/images/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#createChangeStream
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/images/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Image#uploadProfileImage
             * @methodOf lbServices.Image
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
            "uploadProfileImage": {
              url: urlBase + "/images/profile-image",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.image() instead.
            "::get::AdminAccount::image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "GET",
            },

            // INTERNAL. Use AdminAccount.image.create() instead.
            "::create::AdminAccount::image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.image.createMany() instead.
            "::createMany::AdminAccount::image": {
              isArray: true,
              url: urlBase + "/admin-accounts/:id/image",
              method: "POST",
            },

            // INTERNAL. Use AdminAccount.image.update() instead.
            "::update::AdminAccount::image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use AdminAccount.image.destroy() instead.
            "::destroy::AdminAccount::image": {
              url: urlBase + "/admin-accounts/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use CronAccount.image() instead.
            "::get::CronAccount::image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "GET",
            },

            // INTERNAL. Use CronAccount.image.create() instead.
            "::create::CronAccount::image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "POST",
            },

            // INTERNAL. Use CronAccount.image.createMany() instead.
            "::createMany::CronAccount::image": {
              isArray: true,
              url: urlBase + "/cron-accounts/:id/image",
              method: "POST",
            },

            // INTERNAL. Use CronAccount.image.update() instead.
            "::update::CronAccount::image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use CronAccount.image.destroy() instead.
            "::destroy::CronAccount::image": {
              url: urlBase + "/cron-accounts/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use Student.image() instead.
            "::get::Student::image": {
              url: urlBase + "/students/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Student.image.create() instead.
            "::create::Student::image": {
              url: urlBase + "/students/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Student.image.createMany() instead.
            "::createMany::Student::image": {
              isArray: true,
              url: urlBase + "/students/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Student.image.update() instead.
            "::update::Student::image": {
              url: urlBase + "/students/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Student.image.destroy() instead.
            "::destroy::Student::image": {
              url: urlBase + "/students/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use Course.image() instead.
            "::get::Course::image": {
              url: urlBase + "/courses/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Course.image.create() instead.
            "::create::Course::image": {
              url: urlBase + "/courses/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Course.image.createMany() instead.
            "::createMany::Course::image": {
              isArray: true,
              url: urlBase + "/courses/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Course.image.update() instead.
            "::update::Course::image": {
              url: urlBase + "/courses/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Course.image.destroy() instead.
            "::destroy::Course::image": {
              url: urlBase + "/courses/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.image() instead.
            "::get::Instructor::image": {
              url: urlBase + "/instructors/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Instructor.image.create() instead.
            "::create::Instructor::image": {
              url: urlBase + "/instructors/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Instructor.image.createMany() instead.
            "::createMany::Instructor::image": {
              isArray: true,
              url: urlBase + "/instructors/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Instructor.image.update() instead.
            "::update::Instructor::image": {
              url: urlBase + "/instructors/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.image.destroy() instead.
            "::destroy::Instructor::image": {
              url: urlBase + "/instructors/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use Publication.image() instead.
            "::get::Publication::image": {
              url: urlBase + "/publications/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Publication.image.create() instead.
            "::create::Publication::image": {
              url: urlBase + "/publications/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Publication.image.createMany() instead.
            "::createMany::Publication::image": {
              isArray: true,
              url: urlBase + "/publications/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Publication.image.update() instead.
            "::update::Publication::image": {
              url: urlBase + "/publications/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Publication.image.destroy() instead.
            "::destroy::Publication::image": {
              url: urlBase + "/publications/:id/image",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Image#upsert
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Image#updateOrCreate
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Image#patchOrCreateWithWhere
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Image#update
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Image#destroyById
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Image#removeById
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Image#prototype$updateAttributes
             * @methodOf lbServices.Image
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Image id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Image#modelName
        * @propertyOf lbServices.Image
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Image`.
        */
        R.modelName = "Image";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Instructor
 * @header lbServices.Instructor
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Instructor` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Instructor",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/instructors/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__findById__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__updateById__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.credentials.findById() instead.
            "prototype$__findById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/credentials/:fk",
              method: "GET",
            },

            // INTERNAL. Use Instructor.credentials.destroyById() instead.
            "prototype$__destroyById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/credentials/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.credentials.updateById() instead.
            "prototype$__updateById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/credentials/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__findById__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__destroyById__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__updateById__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.image() instead.
            "prototype$__get__image": {
              url: urlBase + "/instructors/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Instructor.image.create() instead.
            "prototype$__create__image": {
              url: urlBase + "/instructors/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Instructor.image.update() instead.
            "prototype$__update__image": {
              url: urlBase + "/instructors/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.image.destroy() instead.
            "prototype$__destroy__image": {
              url: urlBase + "/instructors/:id/image",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.courses.findById() instead.
            "prototype$__findById__courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Instructor.courses.destroyById() instead.
            "prototype$__destroyById__courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courses/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.courses.updateById() instead.
            "prototype$__updateById__courses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courses/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__findById__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Find a related item by id for courseModules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for courseModules
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__findById__courseModules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courseModules/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__destroyById__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Delete a related item by id for courseModules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for courseModules
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__courseModules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courseModules/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__updateById__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update a related item by id for courseModules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `fk` – `{*}` - Foreign key for courseModules
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__updateById__courseModules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/courseModules/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.videos.findById() instead.
            "prototype$__findById__videos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/videos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Instructor.videos.destroyById() instead.
            "prototype$__destroyById__videos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/videos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.videos.updateById() instead.
            "prototype$__updateById__videos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/videos/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__get__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Queries accessTokens of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/instructors/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__create__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/instructors/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__delete__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/instructors/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__count__accessTokens
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Counts accessTokens of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/instructors/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Instructor.credentials() instead.
            "prototype$__get__credentials": {
              isArray: true,
              url: urlBase + "/instructors/:id/credentials",
              method: "GET",
            },

            // INTERNAL. Use Instructor.credentials.create() instead.
            "prototype$__create__credentials": {
              url: urlBase + "/instructors/:id/credentials",
              method: "POST",
            },

            // INTERNAL. Use Instructor.credentials.destroyAll() instead.
            "prototype$__delete__credentials": {
              url: urlBase + "/instructors/:id/credentials",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.credentials.count() instead.
            "prototype$__count__credentials": {
              url: urlBase + "/instructors/:id/credentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__get__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Queries comments of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/instructors/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__create__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/instructors/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__delete__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/instructors/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__count__comments
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Counts comments of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/instructors/:id/comments/count",
              method: "GET",
            },

            // INTERNAL. Use Instructor.courses() instead.
            "prototype$__get__courses": {
              isArray: true,
              url: urlBase + "/instructors/:id/courses",
              method: "GET",
            },

            // INTERNAL. Use Instructor.courses.create() instead.
            "prototype$__create__courses": {
              url: urlBase + "/instructors/:id/courses",
              method: "POST",
            },

            // INTERNAL. Use Instructor.courses.destroyAll() instead.
            "prototype$__delete__courses": {
              url: urlBase + "/instructors/:id/courses",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.courses.count() instead.
            "prototype$__count__courses": {
              url: urlBase + "/instructors/:id/courses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__get__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Queries courseModules of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__get__courseModules": {
              isArray: true,
              url: urlBase + "/instructors/:id/courseModules",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__create__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Creates a new instance in courseModules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$__create__courseModules": {
              url: urlBase + "/instructors/:id/courseModules",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__delete__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Deletes all courseModules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__courseModules": {
              url: urlBase + "/instructors/:id/courseModules",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$__count__courseModules
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Counts courseModules of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__courseModules": {
              url: urlBase + "/instructors/:id/courseModules/count",
              method: "GET",
            },

            // INTERNAL. Use Instructor.videos() instead.
            "prototype$__get__videos": {
              isArray: true,
              url: urlBase + "/instructors/:id/videos",
              method: "GET",
            },

            // INTERNAL. Use Instructor.videos.create() instead.
            "prototype$__create__videos": {
              url: urlBase + "/instructors/:id/videos",
              method: "POST",
            },

            // INTERNAL. Use Instructor.videos.destroyAll() instead.
            "prototype$__delete__videos": {
              url: urlBase + "/instructors/:id/videos",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.videos.count() instead.
            "prototype$__count__videos": {
              url: urlBase + "/instructors/:id/videos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#create
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/instructors",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#createMany
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/instructors",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#patchOrCreate
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/instructors",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#replaceOrCreate
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/instructors/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#upsertWithWhere
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/instructors/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#exists
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/instructors/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#findById
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/instructors/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#replaceById
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/instructors/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#find
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/instructors",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#findOne
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/instructors/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#updateAll
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/instructors/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#deleteById
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/instructors/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#count
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/instructors/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$patchAttributes
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/instructors/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#createChangeStream
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/instructors/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#login
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/instructors/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#logout
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/instructors/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#confirm
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/instructors/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#resetPassword
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/instructors/reset",
              method: "POST",
            },

            // INTERNAL. Use Course.instructor() instead.
            "::get::Course::instructor": {
              url: urlBase + "/courses/:id/instructor",
              method: "GET",
            },

            // INTERNAL. Use ModuleVideo.instructor() instead.
            "::get::ModuleVideo::instructor": {
              url: urlBase + "/videos/:id/instructor",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Instructor#getCurrent
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/instructors" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Instructor#upsert
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Instructor#updateOrCreate
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Instructor#patchOrCreateWithWhere
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Instructor#update
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Instructor#destroyById
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Instructor#removeById
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Instructor#prototype$updateAttributes
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Instructor#getCachedCurrent
         * @methodOf lbServices.Instructor
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Instructor#login} or
         * {@link lbServices.Instructor#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Instructor instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Instructor#isAuthenticated
         * @methodOf lbServices.Instructor
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Instructor#getCurrentId
         * @methodOf lbServices.Instructor
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Instructor#modelName
        * @propertyOf lbServices.Instructor
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Instructor`.
        */
        R.modelName = "Instructor";

    /**
     * @ngdoc object
     * @name lbServices.Instructor.credentials
     * @header lbServices.Instructor.credentials
     * @object
     * @description
     *
     * The object `Instructor.credentials` groups methods
     * manipulating `AccountCredential` instances related to `Instructor`.
     *
     * Call {@link lbServices.Instructor#credentials Instructor.credentials()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Instructor#credentials
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Queries credentials of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::get::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#count
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Counts credentials of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.credentials.count = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::count::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#create
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.create = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::create::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#createMany
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::createMany::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#destroyAll
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Deletes all credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::delete::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#destroyById
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Delete a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::destroyById::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#findById
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Find a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::findById::Instructor::credentials"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.credentials#updateById
             * @methodOf lbServices.Instructor.credentials
             *
             * @description
             *
             * Update a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `AccountCredential` object.)
             * </em>
             */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("AccountCredential");
          var action = TargetResource["::updateById::Instructor::credentials"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Instructor.image
     * @header lbServices.Instructor.image
     * @object
     * @description
     *
     * The object `Instructor.image` groups methods
     * manipulating `Image` instances related to `Instructor`.
     *
     * Call {@link lbServices.Instructor#image Instructor.image()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Instructor#image
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Fetches hasOne relation image.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::Instructor::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.image#create
             * @methodOf lbServices.Instructor.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::Instructor::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.image#createMany
             * @methodOf lbServices.Instructor.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::Instructor::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.image#destroy
             * @methodOf lbServices.Instructor.image
             *
             * @description
             *
             * Deletes image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.image.destroy = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroy::Instructor::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.image#update
             * @methodOf lbServices.Instructor.image
             *
             * @description
             *
             * Update image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.update = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::update::Instructor::image"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Instructor.courses
     * @header lbServices.Instructor.courses
     * @object
     * @description
     *
     * The object `Instructor.courses` groups methods
     * manipulating `Course` instances related to `Instructor`.
     *
     * Call {@link lbServices.Instructor#courses Instructor.courses()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Instructor#courses
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Queries courses of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R.courses = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#count
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Counts courses of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.courses.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#create
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Creates a new instance in courses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R.courses.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#createMany
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Creates a new instance in courses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R.courses.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#destroyAll
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Deletes all courses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.courses.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#destroyById
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Delete a related item by id for courses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for courses
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.courses.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#findById
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Find a related item by id for courses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for courses
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R.courses.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::Instructor::courses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.courses#updateById
             * @methodOf lbServices.Instructor.courses
             *
             * @description
             *
             * Update a related item by id for courses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `fk` – `{*}` - Foreign key for courses
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Course` object.)
             * </em>
             */
        R.courses.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::Instructor::courses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Instructor.videos
     * @header lbServices.Instructor.videos
     * @object
     * @description
     *
     * The object `Instructor.videos` groups methods
     * manipulating `ModuleVideo` instances related to `Instructor`.
     *
     * Call {@link lbServices.Instructor#videos Instructor.videos()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Instructor#videos
             * @methodOf lbServices.Instructor
             *
             * @description
             *
             * Queries videos of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R.videos = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::get::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#count
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Counts videos of Instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.videos.count = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::count::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#create
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Creates a new instance in videos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R.videos.create = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::create::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#createMany
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Creates a new instance in videos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R.videos.createMany = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::createMany::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#destroyAll
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Deletes all videos of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.videos.destroyAll = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::delete::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#destroyById
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Delete a related item by id for videos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for videos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.videos.destroyById = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::destroyById::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#findById
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Find a related item by id for videos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for videos
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R.videos.findById = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::findById::Instructor::videos"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Instructor.videos#updateById
             * @methodOf lbServices.Instructor.videos
             *
             * @description
             *
             * Update a related item by id for videos.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Instructor id
             *
             *  - `fk` – `{*}` - Foreign key for videos
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R.videos.updateById = function() {
          var TargetResource = $injector.get("ModuleVideo");
          var action = TargetResource["::updateById::Instructor::videos"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Publication
 * @header lbServices.Publication
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Publication` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Publication",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/publications/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__findById__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/publications/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__destroyById__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/publications/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__updateById__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/publications/:id/comments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Publication.image() instead.
            "prototype$__get__image": {
              url: urlBase + "/publications/:id/image",
              method: "GET",
            },

            // INTERNAL. Use Publication.image.create() instead.
            "prototype$__create__image": {
              url: urlBase + "/publications/:id/image",
              method: "POST",
            },

            // INTERNAL. Use Publication.image.update() instead.
            "prototype$__update__image": {
              url: urlBase + "/publications/:id/image",
              method: "PUT",
            },

            // INTERNAL. Use Publication.image.destroy() instead.
            "prototype$__destroy__image": {
              url: urlBase + "/publications/:id/image",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__get__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Queries comments of Publication.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/publications/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__create__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/publications/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__delete__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/publications/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$__count__comments
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Counts comments of Publication.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/publications/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#create
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/publications",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#createMany
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/publications",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#patchOrCreate
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/publications",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#replaceOrCreate
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/publications/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#upsertWithWhere
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/publications/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#exists
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/publications/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#findById
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/publications/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#replaceById
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/publications/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#find
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/publications",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#findOne
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/publications/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#updateAll
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/publications/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#deleteById
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/publications/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#count
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/publications/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$patchAttributes
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/publications/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Publication#createChangeStream
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/publications/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Publication#upsert
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Publication#updateOrCreate
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Publication#patchOrCreateWithWhere
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Publication#update
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Publication#destroyById
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Publication#removeById
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Publication#prototype$updateAttributes
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Publication` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Publication#modelName
        * @propertyOf lbServices.Publication
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Publication`.
        */
        R.modelName = "Publication";

    /**
     * @ngdoc object
     * @name lbServices.Publication.image
     * @header lbServices.Publication.image
     * @object
     * @description
     *
     * The object `Publication.image` groups methods
     * manipulating `Image` instances related to `Publication`.
     *
     * Call {@link lbServices.Publication#image Publication.image()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Publication#image
             * @methodOf lbServices.Publication
             *
             * @description
             *
             * Fetches hasOne relation image.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::Publication::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Publication.image#create
             * @methodOf lbServices.Publication.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.create = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::create::Publication::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Publication.image#createMany
             * @methodOf lbServices.Publication.image
             *
             * @description
             *
             * Creates a new instance in image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.createMany = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::createMany::Publication::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Publication.image#destroy
             * @methodOf lbServices.Publication.image
             *
             * @description
             *
             * Deletes image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.image.destroy = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::destroy::Publication::image"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Publication.image#update
             * @methodOf lbServices.Publication.image
             *
             * @description
             *
             * Update image of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Publication id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Image` object.)
             * </em>
             */
        R.image.update = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::update::Publication::image"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Testimony
 * @header lbServices.Testimony
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Testimony` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Testimony",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/testimonies/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Testimony#create
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/testimonies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#createMany
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/testimonies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#patchOrCreate
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/testimonies",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#replaceOrCreate
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/testimonies/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#upsertWithWhere
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/testimonies/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#exists
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/testimonies/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#findById
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/testimonies/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#replaceById
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/testimonies/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#find
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/testimonies",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#findOne
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/testimonies/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#updateAll
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/testimonies/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#deleteById
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/testimonies/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#count
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/testimonies/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#prototype$patchAttributes
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Testimony id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/testimonies/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Testimony#createChangeStream
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/testimonies/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Testimony#upsert
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Testimony#updateOrCreate
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Testimony#patchOrCreateWithWhere
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Testimony#update
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Testimony#destroyById
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Testimony#removeById
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Testimony#prototype$updateAttributes
             * @methodOf lbServices.Testimony
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Testimony id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Testimony` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Testimony#modelName
        * @propertyOf lbServices.Testimony
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Testimony`.
        */
        R.modelName = "Testimony";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ModuleVideo
 * @header lbServices.ModuleVideo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ModuleVideo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ModuleVideo",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/videos/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__get__module
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Fetches belongsTo relation module.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "prototype$__get__module": {
              url: urlBase + "/videos/:id/module",
              method: "GET",
            },

            // INTERNAL. Use ModuleVideo.instructor() instead.
            "prototype$__get__instructor": {
              url: urlBase + "/videos/:id/instructor",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__findById__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Find a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "prototype$__findById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/videos/:id/comments/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__destroyById__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Delete a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/videos/:id/comments/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__updateById__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Update a related item by id for comments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `fk` – `{*}` - Foreign key for comments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "prototype$__updateById__comments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/videos/:id/comments/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__get__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Queries comments of ModuleVideo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "prototype$__get__comments": {
              isArray: true,
              url: urlBase + "/videos/:id/comments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__create__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Creates a new instance in comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "prototype$__create__comments": {
              url: urlBase + "/videos/:id/comments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__delete__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Deletes all comments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__comments": {
              url: urlBase + "/videos/:id/comments",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$__count__comments
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Counts comments of ModuleVideo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__comments": {
              url: urlBase + "/videos/:id/comments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#create
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/videos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#createMany
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/videos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#patchOrCreate
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/videos",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#replaceOrCreate
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/videos/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#upsertWithWhere
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/videos/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#exists
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/videos/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#findById
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/videos/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#replaceById
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/videos/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#find
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/videos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#findOne
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/videos/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#updateAll
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/videos/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#deleteById
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/videos/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#count
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/videos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$patchAttributes
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/videos/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#createChangeStream
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/videos/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Instructor.videos.findById() instead.
            "::findById::Instructor::videos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/videos/:fk",
              method: "GET",
            },

            // INTERNAL. Use Instructor.videos.destroyById() instead.
            "::destroyById::Instructor::videos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/videos/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.videos.updateById() instead.
            "::updateById::Instructor::videos": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/instructors/:id/videos/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Instructor.videos() instead.
            "::get::Instructor::videos": {
              isArray: true,
              url: urlBase + "/instructors/:id/videos",
              method: "GET",
            },

            // INTERNAL. Use Instructor.videos.create() instead.
            "::create::Instructor::videos": {
              url: urlBase + "/instructors/:id/videos",
              method: "POST",
            },

            // INTERNAL. Use Instructor.videos.createMany() instead.
            "::createMany::Instructor::videos": {
              isArray: true,
              url: urlBase + "/instructors/:id/videos",
              method: "POST",
            },

            // INTERNAL. Use Instructor.videos.destroyAll() instead.
            "::delete::Instructor::videos": {
              url: urlBase + "/instructors/:id/videos",
              method: "DELETE",
            },

            // INTERNAL. Use Instructor.videos.count() instead.
            "::count::Instructor::videos": {
              url: urlBase + "/instructors/:id/videos/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#upsert
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#updateOrCreate
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#patchOrCreateWithWhere
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#update
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#destroyById
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#removeById
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#prototype$updateAttributes
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ModuleVideo` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ModuleVideo#modelName
        * @propertyOf lbServices.ModuleVideo
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ModuleVideo`.
        */
        R.modelName = "ModuleVideo";


            /**
             * @ngdoc method
             * @name lbServices.ModuleVideo#instructor
             * @methodOf lbServices.ModuleVideo
             *
             * @description
             *
             * Fetches belongsTo relation instructor.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ModuleVideo id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Instructor` object.)
             * </em>
             */
        R.instructor = function() {
          var TargetResource = $injector.get("Instructor");
          var action = TargetResource["::get::ModuleVideo::instructor"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Contact
 * @header lbServices.Contact
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contact` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Contact",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/contacts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Contact#create
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/contacts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#createMany
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/contacts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#patchOrCreate
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/contacts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#replaceOrCreate
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/contacts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#upsertWithWhere
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/contacts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#exists
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/contacts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#findById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/contacts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#replaceById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/contacts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#find
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/contacts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#findOne
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/contacts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#updateAll
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/contacts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#deleteById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/contacts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#count
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/contacts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$patchAttributes
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Contact id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/contacts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Contact#createChangeStream
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/contacts/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Contact#upsert
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#updateOrCreate
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#patchOrCreateWithWhere
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#update
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#destroyById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#removeById
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Contact#prototype$updateAttributes
             * @methodOf lbServices.Contact
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Contact id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Contact` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Contact#modelName
        * @propertyOf lbServices.Contact
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Contact`.
        */
        R.modelName = "Contact";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
