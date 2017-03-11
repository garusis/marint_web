/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

  var headerSources = {
    "original": "assets/images/publicaciones/banner.jpg",
    "thumb_small": "assets/images/publicaciones/banner.jpg",
    "thumb_medium": "assets/images/publicaciones/banner.jpg",
    "thumb_large": "assets/images/publicaciones/banner.jpg",
    "small": "assets/images/publicaciones/banner_small.jpg",
    "medium": "assets/images/publicaciones/banner_medium.jpg",
    "large": "assets/images/publicaciones/banner_large.jpg",
    "xlarge": "assets/images/publicaciones/banner.jpg"
  };
  var newsCarouselConfig = {
    enabled: true,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 5000,
    speed: 300,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    pauseOnHover: true
  };
  var ListPublicationController = function ($scope, NewsService, $state) {
    $scope.headerSources = headerSources;
    $scope.newsCarouselConfig = newsCarouselConfig;

    $scope.optorderby = "";
    $scope.loading = true;
    $scope.loadingRecentNews = true;
    $scope.asc = false;
    $scope.submitRequest = {};
    $scope.togleAsc = function () {
      $scope.asc = !$scope.asc;
    }

    $scope.loadnews = function () {
      var order = "publishedAt "
      if ($scope.optorderby.length > 0) {
        order = $scope.optorderby
      }
      order += ($scope.asc ? " ASC" : " DESC")

      NewsService
        .loadPublications({
          filter: {
            where: {isPublished: true},
            order: order,
            include: ['instructor', "image"]
          }
        })
        .then(function (data) {
          $scope.news = data;
          $scope.loading = false;
        })

    }

    $scope.loadRecentNews = function () {
      NewsService
        .loadRecentNews()
        .then(function (data) {
          $scope.recentNews = data;
          $scope.loadingRecentNews = false;
        })
    }

    $scope.showNew = function (_new) {
      var aux = {
        title: _new.title,
        newId: _new.newId,
        new: _new
      }
      $state.go("news.show", aux)
    }

    $scope.loadnews();
    $scope.loadRecentNews()

  };
  ListPublicationController.$inject = ['$scope', 'NewsService', "$state"];

  var ShowPublicationController = function ($scope, $stateParams, $location, NewsService, $state, StudentService, $timeout) {
    $scope.headerSources = headerSources;
    $scope.location = $location.absUrl();
    $scope.loadingRecentNews = true;
    $scope.loadingPublishComment = false;
    $scope.newsCarouselConfig = newsCarouselConfig;
    $scope.userIsAuthenticated = StudentService.isAuthenticated();

    $scope.$on('jg.marlininternacional::users::successLogin', function (data) {
      $scope.userIsAuthenticated = true;
    })

    if (!$stateParams.new) {
      NewsService
        .loadPublication({
          filter: {
            where: {isPublished: true, id: $stateParams.newId},
            include: ['instructor', 'comments', 'image']
          }
        })
        .then(function (data) {
          $scope.new = data;
        })

    } else {
      $scope.new = $stateParams.new
    }

    $scope.comment = {}

    $scope.loadRecentNews = function () {
      NewsService
        .loadRecentNews()
        .then(function (data) {
          $scope.recentNews = data;
          $scope.loadingRecentNews = false;
        })
    }

    $scope.publishComment = function (comment) {
      $scope.commentStatus = null;
      var publication = {
        id: $scope.new.id,
        comment: comment
      }

      if (!$scope.userIsAuthenticated && (!comment.publisherName)) {
        setCommentStatusRequest(-1, 'Por favor escribe tu nombre. Si eres estudiante inicia sesión.')
        return;
      }

      setLoading(true);
      NewsService
        .publish(publication)
        .then(function (data) {
          $scope.comment = {
            publisherName: '',
            content: ''
          }
          setCommentStatusRequest(1, 'Se ha publicado exitósamente.')
          addCommentToArrayInPublish(data.data)
          setLoading(false)
        }, function (error) {
          setCommentStatusRequest(-1, 'Ha ocurrido un error. Inténtalo más tarde.')
          setLoading(false)
        });

    }
    function setLoading (status) {
      $scope.loadingPublishComment = status;
    }

    function addCommentToArrayInPublish (comment) {

      $scope.new.comments.push(comment);
    }

    function setCommentStatusRequest (status, text) {
      $scope.commentStatus = {
        status: status,
        text: text
      };
      $timeout(2000, function () {
        flushCommentStatusRequest();
      })
    }

    function flushCommentStatusRequest () {
      $scope.commentStatus = null;
    }

    $scope.loadRecentNews()

  };
  ShowPublicationController.$inject = ['$scope', '$stateParams', '$location', 'NewsService', '$state', 'StudentService', '$timeout'];

  module
    .controller('ListPublicationController', ListPublicationController)
    .controller('ShowPublicationController', ShowPublicationController);
})(angular.module('jg.marlininternacional.news'));