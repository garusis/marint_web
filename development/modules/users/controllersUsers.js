/**
 * Created by Marcos J. Alvarez on 20/12/2015.
 * @author Marcos J. Alvarez
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {
    var headerSources = {
        "original": "assets/images/usuario/banner.jpg",
        "thumb_small": "assets/images/usuario/banner.jpg",
        "thumb_medium": "assets/images/usuario/banner.jpg",
        "thumb_large": "assets/images/usuario/banner.jpg",
        "small": "assets/images/usuario/banner.jpg",
        "medium": "assets/images/usuario/banner.jpg",
        "large": "assets/images/usuario/banner.jpg"
    };
    UserProfileController.$inject = ["$scope"]
    function UserProfileController($scope) {
        $scope.headerSources = headerSources;
    }

    UserActivityController.$inject = ["$scope"]
    function UserActivityController($scope) {
        $scope.headerSources = headerSources;
        $scope.comments = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    
    UserConfigurationController.$inject = ["$scope"]
    function UserConfigurationController($scope) {
        $scope.headerSources = headerSources;
    }
    module
            .controller('UserProfileController', UserProfileController)
            .controller('UserActivityController', UserActivityController)
            .controller('UserConfigurationController', UserConfigurationController)
})(angular.module('jg.marlininternacional.users'));