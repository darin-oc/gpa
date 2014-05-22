'use strict';

angular.module('gpaApp')
  .filter('getAcademicStanding', function () {
    return function (getAcademicStandings, gpa) {
      var i, parsedGpa = parseFloat(gpa);
      // console.log(getAcademicStandings, parsedGpa);
      for (i = 0; i < getAcademicStandings.length; i++) {
        if (((getAcademicStandings[i].gpaThresholdMin === parsedGpa) || (getAcademicStandings[i].gpaThresholdMin < parsedGpa)) && ((getAcademicStandings[i].gpaThresholdMax === parsedGpa) || (getAcademicStandings[i].gpaThresholdMax > parsedGpa))){
          // console.log(getAcademicStandings[i]);
          return getAcademicStandings[i].name;
        }
      }
      return null;
    };
  });
