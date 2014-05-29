'use strict';

angular.module('gpaApp')
  .factory('gradePointAverageCalculator', function (
    weights,
    levels,
    campuses,
    faculties,
    gpaConversion,
    courseRows
    ) {
    // Service logic

    function pointsCalculation (values) {
      var pointsTotal = 0, i, points, allCourseRows;
      allCourseRows = courseRows.collection();
      if (allCourseRows) {
        for (i = 0; i < allCourseRows.length; i++) {
          if (allCourseRows[i].include === true) {
            switch (values) {
              case 'gradePoints':
                points = parseFloat(allCourseRows[i].gradePoints);
                break;
              case 'adjustedGradePoints':
                points = parseFloat(allCourseRows[i].adjustedGradePoints);
                break;
              case 'qualityPoints':
                points = parseFloat(allCourseRows[i].qualityPoints);
                break;
              case 'adjustedQualityPoints':
                points = parseFloat(allCourseRows[i].adjustedQualityPoints);
                break;
              case 'convertedQualityPoints':
                points = parseFloat(allCourseRows[i].convertedQualityPoints);
                break;
              case 'convertedGradePoints':
                points = parseFloat(allCourseRows[i].convertedGradePoints);
                break;
              case 'adjustedConvertedQP':
                points = parseFloat(allCourseRows[i].adjustedConvertedQP);
                break;
              case 'adjustedConvertedGP':
                points = parseFloat(allCourseRows[i].adjustedConvertedGP);
                break;
            }
            if (isNaN(points)) {
              points = 0;
            }
            // pointsTotal + points
            pointsTotal = new Big(pointsTotal).plus(points);
          }
        }
      }
      else{
        pointsTotal = 0.00;
      }
      pointsTotal = pointsTotal.toFixed(2);
      return pointsTotal;
    }

    function qualityHoursCalculation (period) {
      var qualityHoursTotal = 0, i, qualityhoursValue, allCourseRows;
      allCourseRows = courseRows.collection();
      if (allCourseRows) {
        for (i = 0; i < allCourseRows.length; i++) {
          if (allCourseRows[i].include === true) {
            if (period === 'old') {
              if (parseInt(allCourseRows[i].termCode) < 201410) {
                qualityhoursValue = parseFloat(allCourseRows[i].qualityhoursValue);
                if (isNaN(qualityhoursValue)) {
                  qualityhoursValue = 0;
                }
                qualityHoursTotal = new Big(qualityHoursTotal).plus(qualityhoursValue);
              }
            }
            else if (period === 'new') {
              if (parseInt(allCourseRows[i].termCode) >= 201410) {
                qualityhoursValue = parseFloat(allCourseRows[i].qualityhoursValue);
                if (isNaN(qualityhoursValue)) {
                  qualityhoursValue = 0;
                }
                qualityHoursTotal = new Big(qualityHoursTotal).plus(qualityhoursValue);
              }
            }
            else {
              qualityhoursValue = parseFloat(allCourseRows[i].qualityhoursValue);
              if (isNaN(qualityhoursValue)) {
                qualityhoursValue = 0;
              }
              // qualityHoursTotal + qualityhoursValue
              qualityHoursTotal = new Big(qualityHoursTotal).plus(qualityhoursValue);
            }
          }
        }
      }
      else{
        qualityHoursTotal = 0.00;
      }
      // console.debug(qualityHoursTotal);
      qualityHoursTotal = qualityHoursTotal.toFixed(2);
      return qualityHoursTotal;
    }

    function weightedPointsCalculation (values) {
      var pointsTotal = 0, i, points, allCourseRows;
      allCourseRows = courseRows.collection();
      if (allCourseRows) {
        for (i = 0; i < allCourseRows.length; i++) {
          if (allCourseRows[i].include === true) {
            switch (values) {
              case 'gradePoints':
                points = parseFloat(allCourseRows[i].gradePoints);
                break;
              case 'adjustedGradePoints':
                points = parseFloat(allCourseRows[i].adjustedGradePoints);
                break;
              case 'qualityPoints':
                points = parseFloat(allCourseRows[i].qualityPoints);
                break;
              case 'adjustedQualityPoints':
                points = parseFloat(allCourseRows[i].adjustedQualityPoints);
                break;
              case 'convertedQualityPoints':
                points = parseFloat(allCourseRows[i].convertedQualityPoints);
                break;
              case 'convertedGradePoints':
                points = parseFloat(allCourseRows[i].convertedGradePoints);
                break;
              case 'adjustedConvertedQP':
                points = parseFloat(allCourseRows[i].adjustedConvertedQP);
                break;
              case 'adjustedConvertedGP':
                points = parseFloat(allCourseRows[i].adjustedConvertedGP);
                break;
            }
            if (isNaN(points)) {
              points = 0;
            }
            // pointsTotal + parseFloat(points * weights.weightValue(campuses.thisCampus(), faculties.thisFaculty(), levels.levelValue(allCourseRows[i].level)))
            pointsTotal = new Big(pointsTotal).plus(new Big(points).times(weights.weightValue(campuses.thisCampus(), faculties.thisFaculty(), levels.levelValue(allCourseRows[i].level))));
          }
        }
      }
      else{
        pointsTotal = 0.00;
      }
      pointsTotal = pointsTotal.toFixed(2);
      return pointsTotal;
    }

    function weightedQualityHoursCalculation (period) {
      var qualityHoursTotal = 0, i, qualityhoursValue, allCourseRows;
      allCourseRows = courseRows.collection();
      if (allCourseRows) {
        for (i = 0; i < allCourseRows.length; i++) {
          if (allCourseRows[i].include === true) {
            if (period === 'old') {
              if (parseInt(allCourseRows[i].termCode) < 201410) {
                qualityhoursValue = parseFloat(allCourseRows[i].qualityhoursValue);
                if (isNaN(qualityhoursValue)) {
                  qualityhoursValue = 0;
                }
                qualityHoursTotal = new Big(qualityHoursTotal).plus(new Big(allCourseRows[i].qualityhoursValue).times(weights.weightValue(campuses.thisCampus(), faculties.thisFaculty(), levels.levelValue(allCourseRows[i].level))));
              }
            }
            else if (period === 'new') {
              if (parseInt(allCourseRows[i].termCode) >= 201410) {
                qualityhoursValue = parseFloat(allCourseRows[i].qualityhoursValue);
                if (isNaN(qualityhoursValue)) {
                  qualityhoursValue = 0;
                }
                qualityHoursTotal = new Big(qualityHoursTotal).plus(new Big(allCourseRows[i].qualityhoursValue).times(weights.weightValue(campuses.thisCampus(), faculties.thisFaculty(), levels.levelValue(allCourseRows[i].level))));
              }
            }
            else {
              qualityhoursValue = parseFloat(allCourseRows[i].qualityhoursValue);
              if (isNaN(qualityhoursValue)) {
                qualityhoursValue = 0;
              }
              // qualityHoursTotal + parseFloat(allCourseRows[i].qualityhoursValue * weights.weightValue(campuses.thisCampus(), faculties.thisFaculty(), levels.levelValue(allCourseRows[i].level)))
              qualityHoursTotal = new Big(qualityHoursTotal).plus(new Big(allCourseRows[i].qualityhoursValue).times(weights.weightValue(campuses.thisCampus(), faculties.thisFaculty(), levels.levelValue(allCourseRows[i].level))));
            }
          }
        }
      }
      else{
        qualityHoursTotal = 0.00;
      }
      // console.debug(qualityHoursTotal);
      qualityHoursTotal = qualityHoursTotal.toFixed(2);
      return qualityHoursTotal;
    }

    function gpaCalculation (oldGpaTotalGradePoints, oldGpaTotalQualityHours) {
      var gpa = 0;
        // console.debug(oldGpaTotalGradePoints+', '+oldGpaTotalQualityHours);
      if(oldGpaTotalGradePoints && oldGpaTotalQualityHours && (oldGpaTotalGradePoints != 0) && (oldGpaTotalQualityHours != 0)){
        // oldGpaTotalGradePoints / oldGpaTotalQualityHours
        gpa = new Big(oldGpaTotalGradePoints).div(new Big(oldGpaTotalQualityHours));
      }
      else{
        gpa = 0;
      }
      // console.debug(gpa.toFixed(2));
      gpa = gpa.toFixed(2);
      return gpa;
    }

    function combinedGpaFormula (priorGpaHours, priorGpa, currentGpaHours, currentGpa) {
      var combinedGpa = 0, fixedCombinedGpa, priorGpaProduct, currentGpaProduct, totalHours;

      totalHours = new Big(priorGpaHours).plus(currentGpaHours);
      if ((typeof totalHours === 'undefined') || (totalHours === null) || (isNaN(totalHours)) || (totalHours === 0)) {
        combinedGpa = 0;
      }
      else {
        priorGpaProduct   = (new Big(priorGpaHours).times(priorGpa)).toFixed(2);
        currentGpaProduct = (new Big(currentGpaHours).times(currentGpa)).toFixed(2);
        combinedGpa       = (new Big(priorGpaProduct).plus(currentGpaProduct)).div(new Big(totalHours));
        // console.debug(combinedGpa.toString());
      }
      fixedCombinedGpa = combinedGpa.toFixed(3);
      return fixedCombinedGpa.toString();
    }

    function combinedGpaCalculation (type) {
      var priorGpaHours, priorGpa, currentGpaHours, currentGpa, combinedGpa;

      if (type === 'cumulative') {
        priorGpaHours   = parseFloat(qualityHoursCalculation('old'));
        priorGpa        = gpaConversion.convertOldToNewGpaUsingFormula(parseFloat(gpaCalculation(pointsCalculation('adjustedGradePoints'), priorGpaHours)));
        currentGpaHours = parseFloat(qualityHoursCalculation('new'));
        currentGpa      = parseFloat(gpaCalculation(pointsCalculation('adjustedConvertedGP'), currentGpaHours));
        combinedGpa     = combinedGpaFormula (priorGpaHours, priorGpa, currentGpaHours, currentGpa);
      }
      else if (type === 'degree') {
        priorGpaHours   = parseFloat(weightedQualityHoursCalculation('old'));
        priorGpa        = gpaConversion.convertOldToNewGpaUsingFormula(parseFloat(gpaCalculation(weightedPointsCalculation('adjustedGradePoints'), priorGpaHours)));
        currentGpaHours = parseFloat(weightedQualityHoursCalculation('new'));
        currentGpa      = parseFloat(gpaCalculation(weightedPointsCalculation('adjustedConvertedGP'), currentGpaHours));
        combinedGpa     = combinedGpaFormula (priorGpaHours, priorGpa, currentGpaHours, currentGpa);
      }
      return combinedGpa;
    }

    // Public API here
    return {
      sumPoints: function (values) {
        var pointsTotal = pointsCalculation (values);
        return pointsTotal;
      },
      sumQualityHours: function (period) {
        // console.debug(period);
        var qualityHoursTotal = qualityHoursCalculation (period);
        return qualityHoursTotal;
      },
      sumWeightedPoints: function (values) {
        var pointsTotal = weightedPointsCalculation (values);
        return pointsTotal;
      },
      sumWeightedQualityHours: function (period) {
        var weightedQualityHoursTotal = weightedQualityHoursCalculation (period);
        return weightedQualityHoursTotal;
      },
      calculateGpa: function (oldGpaTotalGradePoints, oldGpaTotalQualityHours) {
        return gpaCalculation (oldGpaTotalGradePoints, oldGpaTotalQualityHours);
      },
      combinedGpa: function (type) {
        var combinedGpaValue = combinedGpaCalculation (type);
        return combinedGpaValue;
      }
    };
  });
