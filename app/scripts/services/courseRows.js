'use strict';

angular.module('gpaApp')
  .factory('courseRows', function (
    $filter,
    terms,
    grades,
    adjustments,
    gradePointsCalculator) {
    // Service logic
    var courseRows;

    courseRows = [
      /*
      {
        course                 :'FOUN1001',
        courseType             :'Foundation',
        level                  :'1',
        grade                  :'P',
        qualityhoursValue      :0,
        qualityPoints          :0.00,
        gradePoints            :0.00,
        convertedQualityPoints :0.00,
        convertedGradePoints   :0.00,
        include                :true
      }
      //*/
    ];
    // Public API here
    return {
      collection: function () {
        return courseRows;
      },
      addArray: function (array) {
        // console.debug(array);
        for (var i = 0; i < array.length; i++) {
          courseRows.push(array[i]);
        }
        // console.debug(courseRows);
      },
      addRow: function (term, course, courseType, level, grade, qualityhoursValue) {
        var qp, cqp, adjusted, adjustedConverted;
        if (term === null || (typeof term === 'undefined')) {
          term = {name:'Core', value:'Core'};
        }
        if (courseType === null || (typeof courseType === 'undefined')) {
          courseType = terms.selectedTerm(201410);
        }

        qp = $filter('getQualityPoints')(grades.collection(), grade.name);
        cqp = $filter('getConvertedQualityPoints')(grades.collection(), grade.name);
        adjusted = adjustments.adjustQualityAndGradePoints(term.code, qp, gradePointsCalculator.calculateGradePoints(qualityhoursValue.qualityHours, qp));
        adjustedConverted = adjustments.adjustConvertedPoints(term.code, cqp, gradePointsCalculator.calculateGradePoints(qualityhoursValue.qualityHours, cqp));
        courseRows.push({
          termCode               :term.code,
          term                   :term,
          course                 :course.name,
          courseType             :courseType.name,
          level                  :level.name,
          grade                  :grade.name,
          qualityhoursValue      :qualityhoursValue.qualityHours,
          qualityPoints          :qp,
          adjustedQualityPoints  :adjusted.qualityPoints,
          gradePoints            :gradePointsCalculator.calculateGradePoints(qualityhoursValue.qualityHours, qp),
          adjustedGradePoints    :adjusted.gradePoints,
          mutePoints             :adjusted.mute,
          convertedQualityPoints :cqp,
          convertedGradePoints   :gradePointsCalculator.calculateGradePoints(qualityhoursValue.qualityHours, cqp),
          adjustedConvertedQP    :adjustedConverted.qualityPoints,
          adjustedConvertedGP    :adjustedConverted.gradePoints,
          include                :true
        });
      },
      removeRow: function (rowObject) {
        var index = courseRows.indexOf(rowObject);
        courseRows.splice(index, 1);
      },
      includeAll: function (booleanValue) {
        for (var i = 0; i < courseRows.length; i++) {
          courseRows[i].include = booleanValue;
        }
      }
    };
  });
