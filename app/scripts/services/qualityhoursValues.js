'use strict';

angular.module('gpaApp')
  .factory('qualityhoursValues', function () {
    // Service logic
    var qualityhoursValues;

    qualityhoursValues = [
      {name:'0', value:'0', qualityHours:0},
      {name:'1', value:'1', qualityHours:1},
      {name:'2', value:'2', qualityHours:2},
      {name:'3', value:'3', qualityHours:3},
      {name:'4', value:'4', qualityHours:4},
      {name:'5', value:'5', qualityHours:5},
      {name:'6', value:'6', qualityHours:6},
      {name:'7', value:'7', qualityHours:7},
      {name:'8', value:'8', qualityHours:8}
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
