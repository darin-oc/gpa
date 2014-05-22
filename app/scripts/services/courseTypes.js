'use strict';

angular.module('gpaApp')
  .factory('courseTypes', function () {
    // Service logic
    var courseTypes;

    courseTypes = [
      {name:'Core', value:'Core'},
      {name:'Elective', value:'Elective'},
      {name:'Foundation', value:'Foundation'},
      {name:'Orientation', value:'Orientation'},
      {name:'Remedial', value:'Remedial'},
      {name:'Specialisation', value:'Specialisation'},
      {name:'Out of School', value:'Out of School'}
    ];
    // Public API here
    return {
      collection: function () {
        return courseTypes;
      },
      selectedCourseType: function (index) {
        return courseTypes[index];
      }
    };
  });
