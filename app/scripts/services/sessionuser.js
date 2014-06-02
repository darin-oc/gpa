'use strict';

angular.module('gpaApp')
  .factory('sessionUser', function (
    $http
    ) {
    // Service logic

    function getUserId (userURI) {
      var result;

      result = $http.get(userURI)
      .then(function (response) {
        // console.dir(response);
        // console.debug(response.data);
        return response.data;
      }, function (error) {
        // console.dir(error);
        // console.error(error.data);
        throw {
          success : false,
          status  : error.status,
          reason  : error.data
        };
      });
      return result;
    }

    // Public API here
    return {
      userId: function (userURI) {
        return getUserId(userURI);
      }
    };
  });
