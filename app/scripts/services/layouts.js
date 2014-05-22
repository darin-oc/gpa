'use strict';

angular.module('gpaApp')
  .factory('layouts', function (
    $q
    ) {
    // Service logic

    function pattern (design) {
      var chosenPattern, deferred = $q.defer();

      switch (design) {
        case 'design1':
          chosenPattern = {view: 'default', layout: 'version1'};
          break;
        case 'design2':
          chosenPattern = {view: 'default', layout: 'version2'};
          break;
        case 'design3':
          chosenPattern = {view: 'default', layout: 'version3'};
          break;
        case 'design4':
          chosenPattern = {view: 'openCampus', layout: 'version3'};
          break;
        default:
          chosenPattern = {view: 'default', layout: 'version1'};
          break;
      }

      setTimeout(function() {
        if (chosenPattern) {
          deferred.resolve(chosenPattern);
        }
      }, 1);

      return deferred.promise;
    }

    // Public API here
    return {
      design: function (design) {
        return pattern(design);
      }
    };
  });
