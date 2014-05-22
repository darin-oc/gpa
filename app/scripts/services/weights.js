'use strict';

angular.module('gpaApp')
  .factory('weights', function () {
    // Service logic
    var weightsByCampusFaculties;

    weightsByCampusFaculties = [
      {campus:'open', faculties: [
        {faculty:'default', weights: [
          {level:'1', weight:0},
          {level:'2', weight:1},
          {level:'3', weight:1}
        ]}
      ]},

      {campus:'sta', faculties: [
        {faculty:'default', weights: [
          {level:'1', weight:0},
          {level:'2', weight:1},
          {level:'3', weight:1}
        ]},
        {faculty:'Eng', weights: [
          {level:'1', weight:0.1},
          {level:'2', weight:0.3},
          {level:'3', weight:0.6}
        ]}
      ]},

      {campus:'cave', faculties: [
        {faculty:'default', weights: [
          {level:'1', weight:0},
          {level:'2', weight:1},
          {level:'3', weight:1}
        ]}
      ]},

      {campus:'mona', faculties: [
        {faculty:'default', weights: [
          {level:'1', weight:0},
          {level:'2', weight:1},
          {level:'3', weight:1}
        ]}
      ]}
    ];
    // Public API here
    return {
      weightValue: function (campus, faculty, level) {
        if ((campus === null) || (typeof campus === 'undefined')) {
          campus = 'open';
        }
        if ((faculty === null) || (typeof faculty === 'undefined')) {
          faculty = 'default';
        }
        // console.log(campus +','+ faculty+','+ level);
        for (var i = 0; i < weightsByCampusFaculties.length; i++) {
          if (weightsByCampusFaculties[i].campus === campus) {
            for (var j = 0; j < weightsByCampusFaculties[i].faculties.length; j++) {
              if (weightsByCampusFaculties[i].faculties[j].faculty === faculty) {
                for (var k = 0; k < weightsByCampusFaculties[i].faculties[j].weights.length; k++) {
                  if (weightsByCampusFaculties[i].faculties[j].weights[k].level === level) {
                    // console.log(weightsByCampusFaculties[i].faculties[j].weights[k].weight);
                    return weightsByCampusFaculties[i].faculties[j].weights[k].weight;
                  }
                }
              }
            }
            faculty = 'default';
            for (var l = 0; l < weightsByCampusFaculties[i].faculties.length; l++) {
              if (weightsByCampusFaculties[i].faculties[l].faculty === faculty) {
                for (var m = 0; m < weightsByCampusFaculties[i].faculties[l].weights.length; m++) {
                  if (weightsByCampusFaculties[i].faculties[l].weights[m].level === level) {
                    // console.log(weightsByCampusFaculties[i].faculties[l].weights[m].weight);
                    return weightsByCampusFaculties[i].faculties[l].weights[m].weight;
                  }
                }
              }
            }
          }
        }
      }
    };
  });
