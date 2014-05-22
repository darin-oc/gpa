'use strict';

angular.module('gpaApp')
  .filter('getQualityPoints', function () {
    return function(grades, grade) {
      var i;
      for (i=0; i<grades.length; i++) {
        if (grades[i].name === grade) {
          return grades[i].qualityPoints;
        }
      }
      return null;
    };
  });
