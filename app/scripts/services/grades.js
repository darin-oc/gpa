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
      {name:'B-', value:'B-', qualityPoints:2.70, convertedQualityPoints:2.7},
      {name:'C+', value:'C+', qualityPoints:2.30, convertedQualityPoints:2.3},
      {name:'C', value:'C', qualityPoints:2.00, convertedQualityPoints:2},
      {name:'C-', value:'C-', qualityPoints:1.70, convertedQualityPoints:1.7},
      {name:'D+', value:'D+', qualityPoints:1.30, convertedQualityPoints:1.3},
      {name:'D', value:'D', qualityPoints:1.00, convertedQualityPoints:1},
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
      {name:'AB', value:'AB', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'AM', value:'AM', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'AMS', value:'AMS', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'CR', value:'CR', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'DB', value:'DB', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'DEF', value:'DEF', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'DIS', value:'DIS', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'DO', value:'DO', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'EI', value:'EI', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'EQ', value:'EQ', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'EX', value:'EX', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FA', value:'FA', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FAS', value:'FAS', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FE', value:'FE', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FLS', value:'FLS', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FMS', value:'FMS', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FNP', value:'FNP', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FWR', value:'FNP', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FO', value:'FO', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FP', value:'FP', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FT', value:'FT', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'FWS', value:'FWS', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'I', value:'I', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'IM', value:'IM', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'IP', value:'IP', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'LW', value:'LW', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'NFC', value:'NFC', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'NCR', value:'NCR', qualityPoints:0.00, convertedQualityPoints:0},
      {name:'NR', value:'NR', qualityPoints:0.00, convertedQualityPoints:0}
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
