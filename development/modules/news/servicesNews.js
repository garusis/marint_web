"use strict"
/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  service.$inject = ['Publication', '$http', 'ROUTES', 'originsManager'];
  function service (Publication, $http, ROUTES, originsManager) {
    var newService = this
    this.baseUri = originsManager.getOrigin() + '/' + ROUTES.PUBLICATIONS.__BASE__

    function processPublication (publication) {
      publication.comments = new CommentRelation(publication)
      return publication
    }

    this.loadPublication = function (options) {
      return Publication.findOne(options).$promise
        .then(processPublication)
    }

    this.loadPublications = function (options) {
      return Publication.find(options).$promise
        .then(function (publications) {
          _.forEach(publications, processPublication)
          return publications
        })
    }

    function CommentRelation (publication) {
      this.basePath = originsManager.getOrigin() +
        "/" + ROUTES.PUBLICATIONS.__BASE__ + "/" + publication.id +
        "/" + ROUTES.PUBLICATIONS.COMMENTS;

    }
    CommentRelation.prototype = new Array();

    CommentRelation.prototype.__addToCache__ = function (comment) {
      this.push(comment)
    }

    CommentRelation.prototype.get = function (filter) {
      if (!filter) {
        filter = {}
      }
      if (!filter.include) {
        filter.include = []
      }

      var relation = this
      return $http.get(this.basePath, {params: {filter: filter}})
        .then(function (response) {
          _.forEach(response.data, relation.__addToCache__.bind(relation))
          return response.data
        })
    }

    this.loadRecentNews = function () {
      return this.loadPublications({
        filter: {
          where: {
            isPublished: true
          },
          order: "publishedAt DESC",
          limit: 10,
          include: ['instructor', 'image']
        }
      });
    }

    this.publish = function (publication) {
      var ep = this.baseUri + "/" + publication.id + '/' + ROUTES.PUBLICATIONS.COMMENTS;
      return $http.post(ep, publication.comment)
    }

  }

  module.service('NewsService', service)
})(angular.module('jg.marlininternacional.news'));


