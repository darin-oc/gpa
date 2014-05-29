'use strict';

angular.module('gpaApp')
  .factory('adjustments', function () {
    // Service logic

    function qualityAndGradePoints (term, qualityPoints, gradePoints) {
      var adjustedQualityPoints, adjustedGradePoints, muteText;

      if (isNaN(qualityPoints)) {
        qualityPoints = 0;
      }
      if (isNaN(gradePoints)) {
        gradePoints = 0;
      }
      adjustedQualityPoints = parseFloat(qualityPoints).toFixed(2);
      adjustedGradePoints   = parseFloat(gradePoints).toFixed(2);
      if (term >= 201410) {
        adjustedQualityPoints = '-';
        adjustedGradePoints   = '-';
      }
      else {
        muteText = 'text-muted';
      }
      return {
        qualityPoints :adjustedQualityPoints,
        gradePoints   :adjustedGradePoints,
        mute          :muteText
      };
    }

    function convertedPoints (term, convertedQualityPoints, convertedGradePoints) {
      var adjustedQualityPoints, adjustedGradePoints;

      if (isNaN(adjustedQualityPoints)) {
        adjustedQualityPoints = 0;
      }
      if (isNaN(adjustedGradePoints)) {
        adjustedGradePoints = 0;
      }
      adjustedQualityPoints = parseFloat(convertedQualityPoints).toFixed(2);
      adjustedGradePoints   = parseFloat(convertedGradePoints).toFixed(2);
      if (term < 201410) {
        adjustedQualityPoints = '-';
        adjustedGradePoints   = '-';
      }
      return {
        qualityPoints :adjustedQualityPoints,
        gradePoints   :adjustedGradePoints
      };
    }

    // Public API here
    return {
      adjustQualityAndGradePoints: function (term, qualityPoints, gradePoints) {
        return qualityAndGradePoints(term, qualityPoints, gradePoints);
      },
      adjustConvertedPoints: function (term, convertedQualityPoints, convertedGradePoints) {
        return convertedPoints(term, convertedQualityPoints, convertedGradePoints);
      }
    };
  });
