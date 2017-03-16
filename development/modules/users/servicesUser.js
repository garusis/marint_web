"use strict"
/**
 * Created by garusis on 14/03/2017.
 * @author Marcos Javier Alvarez M.
 * @email garusis@gmail.com
 * @version 0.0.1
 */
;
(function (module) {
  User.$inject = ["StudentService", "InstructorService", "LoopBackAuth", "$q", "$localStorage"];
  function User (StudentService, InstructorService, LoopBackAuth, $q, $localStorage) {

    var userService = this
    var UserModels = {
      Student: StudentService, Instructor: InstructorService
    }

    userService.current = null

    function processToken (accessToken) {
      $localStorage.userType = accessToken.account_type
      return accessToken
    }

    this.isAuthenticated = function () {
      return !!LoopBackAuth.accessTokenId
    }

    this.login = function ($user) {
      return StudentService.login($user)
        .then(processToken)
        .catch(function (err) {
          if (err.status !== 401) {
            throw  err
          }
          return InstructorService.login($user)
            .then(processToken)
        });
    };

    this.getCurrent = function (force) {
      if (!userService.current || force) {
        return UserModels[$localStorage.userType]
          .getCurrent()
          .then(function (user) {
            userService.current = user
            return user
          })
      }
      return $q.resolve(userService.current)
    }

    this.logout = function () {
      var userType = $localStorage.userType

      let promise = UserModels[userType].logout()

      LoopBackAuth.clearUser()
      LoopBackAuth.clearStorage()
      delete $localStorage.userType

      return promise
    }

  }

  module.service("User", User)
})(angular.module("jg.marlininternacional.users"));


