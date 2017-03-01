/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  service.$inject = ['Publication','$http','ROUTES','originsManager','StudentService'];
  function service(Publication,$http,ROUTES,originsManager,StudentService) {

    this.baseUri =  originsManager.getOrigin() + '/' + ROUTES.PUBLICATIONS.__BASE__ + "/";

    this.loadPublication = function (options) {
      return Publication.findOne(options).$promise
    }

    this.loadPublications = function (options) {
      return Publication.find(options).$promise
    }

    this.loadRecentNews = function () {
      return this.loadPublications({
        filter: {
          where: {
            isPublished: true
          },
          order: "publishedAt DESC",
          limit: 10,
          include: ['instructor','image']
        }
      });
    }

    this.publish = function (publication) {
      var ep=this.baseUri+publication.id+'/'+ROUTES.PUBLICATIONS.COMMENTS;
      return $http.post(ep,publication.comment)
    }

  }

  module.service('NewsService',service)
})(angular.module('jg.marlininternacional.news'));


