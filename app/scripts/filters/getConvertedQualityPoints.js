'use strict';

angular.module('gpaApp')
  .filter('getConvertedQualityPoints', function () {
    return function(grades, grade) {
      var i;
      for (i = 0; i < grades.length; i++) {
        if (grades[i].name === grade) {
      // console.log(grades[i].convertedQualityPoints);
          return grades[i].convertedQualityPoints;
        }
      }
      return null;
    };
  });
