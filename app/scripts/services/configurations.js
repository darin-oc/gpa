'use strict';

angular.module('gpaApp')
  .factory('configurations', function (
    $resource
    ) {
    // Service logic

    function getConfigurations () {
      var ConfigResource, configResource;

      ConfigResource = $resource('config.json', {});
      configResource = ConfigResource.get({},
      function(response) {
        console.dir(response);
      }, function(error){
        console.error(error);
      });
      return configResource;
    }

    // Public API here
    return {
      settings: function () {
        return getConfigurations();
      }
    };
  });
