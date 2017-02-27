/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  service.$inject = ['Publication'];
  function service (Publication) {

    this.loadPublication = function (options) {
      return Publication.findOne(options)
    }

    this.loadPublications = function (options) {
      return Publication.find(options)
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

  }

  module.service('NewsService', service)
})(angular.module('jg.marlininternacional.news'));


