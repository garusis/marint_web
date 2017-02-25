/**
 * Created by Constantino Celis Peñaranda on 04/06/2016.
 * @author Constantino Celis Peñaranda
 * @email celisconstantino01@gmail.com
 * @version 0.0.1
 */
;
!(function (module) {

  function AuthProvider () {
    this.$get = function (ngDialog, $rootScope) {
      return {
        isLogin: function () {

        },
        passwordWasChanged: function () {
          return true;
        },
        showModalChangePassword: function () {

          if (!this.passwordWasChanged()) {

            var controller = function ($scope) {
              $scope.error = null;
              $scope.data = {
                psw: "",
                psw2: ""
              }
              $scope.actualizarContrasena = function () {
                $scope.error = null;
                if ($scope.data.psw != $scope.data.psw2) {
                  $scope.error = "Las contraseñas no coinciden"
                }
              }
            }
            controller.$inject = ["$scope"]
            ngDialog.open({
              template: 'modules/auth/templates/modals/change password.html',
              className: 'ngdialog-theme-default changePasswordModal',
              controller: controller
            })
          }
        }
      }

    }
    this.$get.$inject = ["ngDialog", "$rootScope"];
  }

  module.provider('authmodule', AuthProvider)
})(angular.module('jg.marlininternacional.auth'));


