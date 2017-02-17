/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    service.$inject = ['PublicPublication'];
    function service(PublicPublication) {

        function setImages(publications) {
            if (Array.isArray(publications))
            {
                for (var p in publications) {
                    publications[p].images = {
                        _150x150: "http://placehold.it/150x150",
                        _370x220: "http://placehold.it/370x220",
                        _770x410: "http://placehold.it/770x410",
                    }
                    if (p < 20)
                    {
                        var index = parseInt(p) + 1;
                        publications[p].images = {
                            _150x150: "assets/images/publicaciones/posts/150x150/" + (index) + ".jpg",
                            _370x220: "assets/images/publicaciones/posts/370x220/" + (index) + ".jpg",
                            _770x410: "assets/images/publicaciones/posts/770x410/" + (index) + ".jpg",
                        }
                    }
                }
            } else
            {
                publications.images = {
                    _150x150: "http://placehold.it/150x150",
                    _370x220: "http://placehold.it/370x220",
                    _770x410: "http://placehold.it/770x410",
                }
            }

            return publications;
        }
        this.loadPublication = function (options, callback, error)
        {
            PublicPublication.findOne(options).$promise.then(function (data) {
                data = setImages(data)
                callback(data);
            })
        }

        this.loadPublications = function (options, callback, error) {
            PublicPublication.find(options).$promise.then(function (data) {
                data = setImages(data);
                callback(data);
            })
        }

        this.loadRecentNews = function (callback, error)
        {
            this.loadPublications({
                filter: {
                    where: {
                        isPublished: true
                    },
                    order: "publishedAt DESC",
                    limit: 10,
                    include: ['instructor']
                }
            }, callback, error);
        }

    }
    module.service('NewsService', service)
})(angular.module('jg.marlininternacional.news'));


