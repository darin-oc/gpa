'use strict';

angular.module('gpaApp')
  .factory('academicStandings', function () {
    // Service logic
    var academicStandings;

    academicStandings = [
      {name:'Good', gpaThresholdMin:1, gpaThresholdMax:4.4},
      {name:'Warning', gpaThresholdMin:0.75, gpaThresholdMax:0.999},
      {name:'Advisory', gpaThresholdMin:0.01, gpaThresholdMax:0.749},
      {name:'-', gpaThresholdMin:0, gpaThresholdMax:0}
    ];
    // Public API here
    return {
      collection: function () {
        return academicStandings;
      },
      selectedAcademicStanding: function (index) {
        return academicStandings[index];
      }
    };
  });
