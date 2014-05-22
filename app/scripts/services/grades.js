'use strict';

angular.module('gpaApp')
  .factory('grades', function () {
    // Service logic
    var grades;

    grades = [
      {name:'A+', value:'A+', qualityPoints:4.30, convertedQualityPoints:4.3},
      {name:'A', value:'A', qualityPoints:4.00, convertedQualityPoints:4},
      {name:'A-', value:'A-', qualityPoints:3.70, convertedQualityPoints:3.7},
      {name:'B+', value:'B+', qualityPoints:3.30, convertedQualityPoints:3.3},
      {name:'B', value:'B', qualityPoints:3.00, convertedQualityPoints:3},
      {name:'B-', value:'B-', qualityPoints:2.70, convertedQualityPoints:2.85},
      {name:'C+', value:'C+', qualityPoints:2.30, convertedQualityPoints:2.65},
      {name:'C', value:'C', qualityPoints:2.00, convertedQualityPoints:2.5},
      {name:'C-', value:'C-', qualityPoints:1.70, convertedQualityPoints:2.35},
      {name:'D+', value:'D+', qualityPoints:1.30, convertedQualityPoints:2.15},
      {name:'D', value:'D', qualityPoints:1.00, convertedQualityPoints:2},
      {name:'F', value:'F', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'F1', value:'F1', qualityPoints:1.70, convertedQualityPoints:1.7},
      {name:'F2', value:'F2', qualityPoints:1.30, convertedQualityPoints:1.3},
      {name:'F3', value:'F3', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'PC', value:'PC', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'EC', value:'EC', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'E', value:'E', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'V', value:'V', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'NV', value:'NV', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'P', value:'P', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'NP', value:'NP', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FM', value:'FM', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'AB', value:'AB', qualityPoints:0.00, convertedQualityPoints:0}
    ];

    // Public API here
    return {
      collection: function () {
        return grades;
      },
      selectedGrade: function (index) {
        return grades[index];
      }
    };
  });
