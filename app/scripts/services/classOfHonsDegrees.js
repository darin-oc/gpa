'use strict';

angular.module('gpaApp')
  .factory('classOfHonsDegrees', function () {
    // Service logic
    var newClassesOfHonsDegree, oldClassesOfHonsDegree, oldEngClassesOfHonsDegree, oldLawClassesOfHonsDegree, oldMedClassesOfHonsDegree;

    newClassesOfHonsDegree = [
      {name:'First Class', gpaRangeMin:3.60, gpaRangeMax:5},// 3.6 and above
      {name:'Upper Second', gpaRangeMin:3.00, gpaRangeMax:3.599},
      {name:'Lower Second', gpaRangeMin:2.50, gpaRangeMax:2.999},
      {name:'Pass', gpaRangeMin:2.00, gpaRangeMax:2.499},
      {name:'-', gpaRangeMin:0.00, gpaRangeMax:1.999}
    ];

    oldClassesOfHonsDegree = [
      {name:'First Class', gpaRangeMin:3.60, gpaRangeMax:5},// 3.6 and above
      {name:'Upper Second', gpaRangeMin:3.00, gpaRangeMax:3.599},
      {name:'Lower Second', gpaRangeMin:2.00, gpaRangeMax:2.999},
      {name:'Pass', gpaRangeMin:1.00, gpaRangeMax:1.999},
      {name:'-', gpaRangeMin:0.00, gpaRangeMax:0.999}
    ];

    oldEngClassesOfHonsDegree = [
      {name:'First Class', gpaRangeMin:3.60, gpaRangeMax:5},// 3.6 and above
      {name:'Upper Second', gpaRangeMin:3.00, gpaRangeMax:3.599},
      {name:'Lower Second', gpaRangeMin:2.00, gpaRangeMax:2.999},
      {name:'Third Class', gpaRangeMin:1.50, gpaRangeMax:2.999},
      {name:'Pass', gpaRangeMin:1.00, gpaRangeMax:1.499},
      {name:'-', gpaRangeMin:0.00, gpaRangeMax:0.999}
    ];

    oldLawClassesOfHonsDegree = [
      {name:'First Class', gpaRangeMin:3.60, gpaRangeMax:5},// 3.6 and above
      {name:'Second Class', gpaRangeMin:3.00, gpaRangeMax:3.599},
      {name:'Pass', gpaRangeMin:1.00, gpaRangeMax:2.999},
      {name:'-', gpaRangeMin:0.00, gpaRangeMax:0.999}
    ];

    oldMedClassesOfHonsDegree = [
      {name:'Hons Distinction', gpaRangeMin:3.60, gpaRangeMax:5},// 3.6 and above
      {name:'Honours', gpaRangeMin:3.00, gpaRangeMax:3.599},
      {name:'Pass', gpaRangeMin:1.00, gpaRangeMax:2.999},
      {name:'-', gpaRangeMin:0.00, gpaRangeMax:0.999}
    ];
    // Public API here
    return {
      newCollection: function () {
        return newClassesOfHonsDegree;
      },
      oldCollection: function (faculty) {
        // console.log(faculty);
        if (faculty === 'Eng') {
          return oldEngClassesOfHonsDegree;
        }
        else if (faculty === 'Law') {
          return oldLawClassesOfHonsDegree;
        }
        else if (faculty === 'Med') {
          return oldMedClassesOfHonsDegree;
        }
        else {
          return oldClassesOfHonsDegree;
        }
      }
    };
  });
