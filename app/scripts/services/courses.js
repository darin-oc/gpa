'use strict';

angular.module('gpaApp')
  .factory('courses', function (
    $resource
    ) {
    // Service logic
    var courses;

    courses = [];

    function rest (coursesURI, coursesScope) {
      var CampusCoursesResource, campusCoursesResource;

      CampusCoursesResource = $resource(coursesURI, {});
      campusCoursesResource = CampusCoursesResource.get({},
      function(response) {
        console.log(response);
        if (coursesScope.length !== 0) {
          return null;
        }
      }, function (error){
        console.log('request failed: ' + error);
      });
      return campusCoursesResource;
    }

    // Public API here
    return {
      collection: function () {
        return courses;
      },
      selectedCourse: function (index) {
        return courses[index];
      },
      coursesRest: function (coursesURI, coursesScope) {
        return rest(coursesURI, coursesScope);
      },
      courseLevel: function (coursesNumber) {
        var level;
        level = (parseInt(coursesNumber) / 1000).toFixed();
        if ((level < 1) || (level === null) || (typeof level === 'undefined')) {
          level = 1;
        }
        else if (level > 3) {
          level = 3;
        }
        return level;
      },
      courseQualityHours: function (coursesQualityHours) {
        var qualityHours;
        qualityHours = parseInt(coursesQualityHours).toFixed();
        if ((qualityHours === null) || (typeof qualityHours === 'undefined')) {
          qualityHours = 3;
        }
        return qualityHours;
      }
    };
  });
