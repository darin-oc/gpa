'use strict';

angular.module('gpaApp')
  .factory('qualityhoursValues', function () {
    // Service logic
    var qualityhoursValues;

    qualityhoursValues = [
      {name:'0 Credit Hours', value:'0', qualityHours:0},
      {name:'1 Credit Hours', value:'1', qualityHours:1},
      {name:'2 Credit Hours', value:'2', qualityHours:2},
      {name:'3 Credit Hours', value:'3', qualityHours:3},
      {name:'4 Credit Hours', value:'4', qualityHours:4},
      {name:'5 Credit Hours', value:'5', qualityHours:5},
      {name:'6 Credit Hours', value:'6', qualityHours:6},
      {name:'7 Credit Hours', value:'7', qualityHours:7},
      {name:'8 Credit Hours', value:'8', qualityHours:8}
    ];
    // Public API here
    return {
      collection: function () {
        return qualityhoursValues;
      },
      selectedQualityhoursValue: function (index) {
        return qualityhoursValues[index];
      }
    };
  });
