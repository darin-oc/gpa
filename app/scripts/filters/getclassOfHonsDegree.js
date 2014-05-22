'use strict';

angular.module('gpaApp')
  .filter('getclassOfHonsDegree', function () {
    return function (getclassOfHonsDegrees, gpa) {
      var i, parsedGpa = parseFloat(gpa);
      for (i = 0; i < getclassOfHonsDegrees.length; i++) {
        if (((getclassOfHonsDegrees[i].gpaRangeMin === parsedGpa) || (getclassOfHonsDegrees[i].gpaRangeMin < parsedGpa)) && ((getclassOfHonsDegrees[i].gpaRangeMax === parsedGpa) || (getclassOfHonsDegrees[i].gpaRangeMax > parsedGpa))){
          // console.log(gpa);
          return getclassOfHonsDegrees[i].name;
        }
      }
      return null;
    };
  });
