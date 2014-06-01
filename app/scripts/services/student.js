'use strict';

angular.module('gpaApp')
  .factory('student', function (
    $resource,
    $filter,
    grades,
    terms,
    adjustments,
    gradePointsCalculator
    ) {
    // Service logic

    function getStudentProgrammeRecord (studentProgrammeRecordURI) {
      var ProgrammeRecordResource, programmeRecordResource;

      ProgrammeRecordResource = $resource(studentProgrammeRecordURI, {});
      programmeRecordResource = ProgrammeRecordResource.get({},
      function(response) {
        console.log(response);
      }, function (error){
        console.log('request failed: ' + error);
      });
      return programmeRecordResource;
    }

    // Public API here
    return {
      programmeRecord: function (studentProgrammeRecordURI) {
        return getStudentProgrammeRecord(studentProgrammeRecordURI);
      },
      courseRowInformation: function (studentProgrammeRecordURI) {
        var courseRowInfo;

        courseRowInfo = getStudentProgrammeRecord(studentProgrammeRecordURI).$promise
        .then(function (response) {
          var sar = response.sar, cqp, gradepoints, adjusted, adjustedConverted, courseRows = [];

          if ((typeof response.sar !== 'undefined') && (response.sar !== null)) {
            for (var i = 0; i < sar.length; i++) {
              cqp = $filter('getConvertedQualityPoints')(grades.collection(), sar[i].grade);
              if ((sar[i].grade_point) && (sar[i].grade_point != '0')) {
                gradepoints = sar[i].grade_point;
              }
              else {
                gradepoints = gradePointsCalculator.calculateGradePoints(sar[i].quality_hours, sar[i].quality_points);
                // console.log(gradepoints);
              }
              adjusted = adjustments.adjustQualityAndGradePoints(sar[i].term_code, sar[i].quality_points, gradepoints);
              adjustedConverted = adjustments.adjustConvertedPoints(sar[i].term_code, cqp, gradePointsCalculator.calculateGradePoints(sar[i].quality_hours, cqp));
              courseRows.push({
                termCode               :sar[i].term_code,
                term                   :terms.selectedTerm(sar[i].term_code),
                course                 :sar[i].course_code,
                courseType             :sar[i].course_type_name,
                level                  :sar[i].program_levels_name,
                grade                  :sar[i].grade,
                qualityhoursValue      :sar[i].quality_hours,
                qualityPoints          :sar[i].quality_points,
                adjustedQualityPoints  :adjusted.qualityPoints,
                gradePoints            :gradepoints,
                adjustedGradePoints    :adjusted.gradePoints,
                mutePoints             :adjusted.mute,
                convertedQualityPoints :cqp,
                convertedGradePoints   :gradePointsCalculator.calculateGradePoints(sar[i].quality_hours, cqp),
                adjustedConvertedQP    :adjustedConverted.qualityPoints,
                adjustedConvertedGP    :adjustedConverted.gradePoints,
                include                :true,
                fromWebService         :true,
              });
            }
          }
          return courseRows;
          // console.log($scope.courseRows);
        }, function (error){
          console.log('request failed: ' + error);
        });
        return courseRowInfo;
      }
    };
  });
