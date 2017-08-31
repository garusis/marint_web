/**
 * Created by Marcos J. Alvarez on 19/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
  module
    .config(["$localStorageProvider", function ($localStorageProvider) {
      $localStorageProvider.setKeyPrefix("jg.marlininternacional.");
    }])
    .config(["$locationProvider", function ($locationProvider) {
      $locationProvider.html5Mode(true)
    }])
    .config(["$urlRouterProvider", function ($urlRouterProvider) {
      $urlRouterProvider
        .otherwise(function ($injector, $location) {
          $injector
            .invoke(["$rootScope", function ($rootScope) {
              $rootScope.$emit("jg.marlininternacional::router::default");
            }]);
        });
    }])
    .config(["originsManagerProvider", "$localStorageProvider", function (originsManagerProvider, $localStorageProvider) {
      originsManagerProvider.config();
      originsManagerProvider.setOrigin("base","https://miapi-dev.herokuapp.com");
      //originsManagerProvider.setOrigin("base", "http://localhost:3000");
      originsManagerProvider.setOrigin("origin", originsManagerProvider.getOrigin("base") + "/api");
      originsManagerProvider.setOrigin("bucket", "https://s3-sa-east-1.amazonaws.com/marlininternacional");
    }])
    .config(["AppAuthProvider", function (AppAuthProvider) {
      AppAuthProvider.config({tokenLocalstorageKey: "accessTokenId"})
    }])
    .config(["LoopBackResourceProvider", "originsManagerProvider", function (LoopBackResourceProvider, originsManagerProvider) {
      // Use a custom auth header instead of the default "Authorization"
      //LoopBackResourceProvider.setAuthHeader("X-Access-Token");

      // Change the URL where to access the LoopBack REST API server
      LoopBackResourceProvider.setUrlBase(originsManagerProvider.getOrigin());
    }])
    .config(["vcRecaptchaServiceProvider", function (vcRecaptchaServiceProvider) {
      vcRecaptchaServiceProvider.setTheme("light")
      vcRecaptchaServiceProvider.setSize("normal")
      vcRecaptchaServiceProvider.setType("image")
      vcRecaptchaServiceProvider.setLang("es")
    }])
    .config(["ngMetaProvider", function (ngMetaProvider) {

      ngMetaProvider.useTitleSuffix(true);
      ngMetaProvider.setDefaultTitle("Marlin Coach Intl.");
      ngMetaProvider.setDefaultTag("author", "Marlin Coach Intl.");
      ngMetaProvider.setDefaultTag("description", "Marlin Coach Intl. es una empresa Colombiana dedicada al apoyo y " +
        "orientación del desarrollo y crecimiento del ser humano, como un ser integral en todas sus áreas " +
        "(Cognitiva-Intelectual, Social, Espiritual, Emocional y Corporal-Salud).");
      ngMetaProvider.setDefaultTag("image", "emails/new_logo.jpg")
      ngMetaProvider.setDefaultTag("type", "website")
      ngMetaProvider.setDefaultTag("fbId", "$$FB_ID$$")
      ngMetaProvider.setDefaultTag("publisher", "https://www.facebook.com/marlininternacional")

    }]);
})(angular.module("jg.marlininternacional", [
  "jg.marlininternacional.auth",
  "jg.marlininternacional.news",
  "jg.marlininternacional.courses",
  "jg.marlininternacional.modules",
  "jg.marlininternacional.contact",
  "jg.marlininternacional.students",
  "jg.marlininternacional.users",
  "jg.marlininternacional.instructors",
  "jg.marlininternacional.utilities",
  "jg.marlininternacional.constants",
  "lbServices",
  "ui.router",
  "ui.router.stateHelper",
  "ngStorage",
  "slickCarousel",
  "angular.filter",
  "ngSanitize",
  "djds4rce.angular-socialshare",
  "jg.originsManager",
  "jg.responsiveImages",
  "jg.overlay",
  "jg.relbui",
  "com.alphonsegs.paginator",
  "com.alphonsegs.mvonload",
  "ngDialog",
  "ui.bootstrap",
  "vcRecaptcha",
  "ngMeta",
  "ngFileUpload",
  "ngImgCrop"
]));
