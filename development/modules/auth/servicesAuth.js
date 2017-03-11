"use strict"
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
        showModalChangePassword: function () {
          ngDialog.open({
            template: 'modules/auth/templates/modals/change_password.html',
            className: 'ngdialog-theme-default changePasswordModal',
            controller: "UserConfigurationController",
            controllerAs: "usersCtrl",
            closeByEscape:false,
            closeByDocument:false
          })
        }
      }
    }
    this.$get.$inject = ["ngDialog", "$rootScope"];
  }

  module.provider('authmodule', AuthProvider)
})(angular.module('jg.marlininternacional.auth'));


