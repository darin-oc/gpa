'use strict';

angular.module('gpaApp')
  .factory('levels', function () {
    // Service logic
    var levels;

    levels = [
      {name:'Level 1', year:'Year 1', value:'1'},
      {name:'Level 2', year:'Year 2', value:'2'},
      {name:'Level 3', year:'Year 3', value:'3'}
    ];
    // Public API here
    return {
      collection: function () {
        return levels;
      },
      selectedLevel: function (index) {
        return levels[index];
      },
      levelValue: function (level) {
        for (var i = 0; i < levels.length; i++) {
          if ((levels[i].name === level) || (levels[i].year === level) || (levels[i].value === level)) {
            return levels[i].value;
          }
        }
      }
    };
  });
