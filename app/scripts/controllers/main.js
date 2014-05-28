'use strict';

angular.module('gpaApp')
  .controller('MainController', function (
    $scope,
    $filter,
    $location,
    $anchorScroll,
    $modal,
    gradePointsCalculator,
    gradePointAverageCalculator,
    courses,
    grades,
    campuses,
    faculties,
    programmes,
    courseTypes,
    levels,
    qualityhoursValues,
    academicStandings,
    classOfHonsDegrees,
    courseRows,
    gpaConversion,
    terms,
    configurations,
    student,
    layouts
    ) {

    $scope.campuses = campuses.collection();

    function getFaculties (campus) {
      // console.debug(campus);
      if (campus) {
        $scope.faculties = faculties.campusCollection(campus);
      }
      else {
        $scope.faculties = null;
      }
    }

    function updateSelectedFaculty (selectedFaculty) {
      var faculty;
      // console.debug($scope.faculty);
      if ((typeof selectedFaculty !== 'undefined') || (selectedFaculty)) {
        faculty = selectedFaculty;
      }
      else {
        faculty = false;
      }
      faculties.selectedFaculty(faculty);
    }

    function updateSelectedCampus (campus) {
      campuses.selectedCampus(campus);
    }

    function theme (campus) {
      if (campus) {
        return campuses.theme(campus);
      }
      else {
        return campuses.theme('default');
      }
    }

    $scope.campusSelected = function (campus) {
      // console.debug(campus);
      updateSelectedCampus(campus);
      if (campus === null) {
        getFaculties(null);
        $scope.faculty = false;
        updateSelectedFaculty(false);
        if (campuses.thisCampus()) {
          updateGpaScopes();
        }
        $scope.theme = theme(null);
      }
      else {
        getFaculties(campus.shortName);
        $scope.faculty = false;
        updateSelectedFaculty(false);
        if (campuses.thisCampus()) {
          updateGpaScopes();
        }
        $scope.theme = theme(campus.shortName);
      }
    };

    $scope.terms              = terms.collection();
    // console.debug($scope.terms);
    $scope.programmes         = programmes.collection();
    $scope.courses            = courses.collection();
    $scope.courseTypes        = courseTypes.collection();
    $scope.levels             = levels.collection();
    $scope.grades             = grades.collection();
    $scope.qualityhoursValues = qualityhoursValues.collection();

    $scope.oldGpaTotalQualityPoints = 0;
    $scope.oldGpaTotalGradePoints   = 0;
    $scope.oldGpaTotalQualityHours  = 0;
    // $scope.oldGpa                = 0.00;
    $scope.newGpaTotalQualityPoints = 0;
    $scope.newGpaTotalGradePoints   = 0;

    $scope.courseRows         = courseRows.collection();

    function updateGpaScopes () {
      var faculty, oldGpaTotalGradePoints, oldGpaTotalQualityPoints, newGpaTotalQualityPoints, newGpaTotalGradePoints;
      if ((typeof $scope.faculty !== 'undefined') && ($scope.faculty !== null)) {
        faculty = $scope.faculty.shortName;
      }
      else {
        faculty = false;
      }
      $scope.oldGpaTotalQualityPoints         = gradePointAverageCalculator.sumPoints('adjustedQualityPoints');
      oldGpaTotalQualityPoints                = '-';
      $scope.oldGpaTotalGradePoints           = gradePointAverageCalculator.sumPoints('adjustedGradePoints');
      oldGpaTotalGradePoints                  = '-';
      $scope.oldGpaTotalQualityHours          = gradePointAverageCalculator.sumQualityHours('old');
      $scope.oldGpa                           = gradePointAverageCalculator.calculateGpa($scope.oldGpaTotalGradePoints, $scope.oldGpaTotalQualityHours);
      $scope.oldWeightedGpaTotalQualityPoints = gradePointAverageCalculator.sumWeightedPoints('adjustedQualityPoints');
      $scope.oldWeightedGpaTotalGradePoints   = gradePointAverageCalculator.sumWeightedPoints('adjustedGradePoints');
      $scope.oldWeightedGpaTotalQualityHours  = gradePointAverageCalculator.sumWeightedQualityHours('old');
      $scope.oldWeightedGpa                   = gradePointAverageCalculator.calculateGpa($scope.oldWeightedGpaTotalGradePoints, $scope.oldWeightedGpaTotalQualityHours);
      $scope.oldAcademicStanding              = $filter('getAcademicStanding')(academicStandings.collection(), $scope.oldGpa);
      $scope.oldGpaDegreeClass                = $filter('getclassOfHonsDegree')(classOfHonsDegrees.oldCollection(faculty), $scope.oldWeightedGpa);
      $scope.newGpaTotalQualityPoints         = gradePointAverageCalculator.sumPoints('adjustedConvertedQP');
      newGpaTotalQualityPoints                = '-';
      $scope.newGpaTotalGradePoints           = gradePointAverageCalculator.sumPoints('adjustedConvertedGP');
      newGpaTotalGradePoints                  = '-';
      $scope.newGpaTotalQualityHours          = gradePointAverageCalculator.sumQualityHours('new');
      $scope.newGpa                           = gradePointAverageCalculator.calculateGpa($scope.newGpaTotalGradePoints, $scope.newGpaTotalQualityHours);
      $scope.convertedGpa                     = gpaConversion.convertOldToNewGpaUsingFormula($scope.oldGpa);
      $scope.combinedCumulativeGpa            = gradePointAverageCalculator.combinedGpa('cumulative');
      $scope.newWeightedGpaTotalQualityPoints = gradePointAverageCalculator.sumWeightedPoints('adjustedConvertedQP');
      $scope.newWeightedGpaTotalGradePoints   = gradePointAverageCalculator.sumWeightedPoints('adjustedConvertedGP');
      $scope.newWeightedGpaTotalQualityHours  = gradePointAverageCalculator.sumWeightedQualityHours('new');
      $scope.newWeightedGpa                   = gradePointAverageCalculator.calculateGpa($scope.newWeightedGpaTotalGradePoints, $scope.newWeightedGpaTotalQualityHours);
      // $scope.newWeightedGpa                   = gpaConversion.convertOldToNewGpaUsingFormula($scope.oldWeightedGpa);
      $scope.convertedWeightedGpa             = gpaConversion.convertOldToNewGpaUsingFormula($scope.oldWeightedGpa);
      $scope.combinedWeightedGpa              = gradePointAverageCalculator.combinedGpa('degree');
      $scope.newAcademicStanding              = $filter('getAcademicStanding')(academicStandings.collection(), $scope.newGpa);
      $scope.newGpaDegreeClass                = $filter('getclassOfHonsDegree')(classOfHonsDegrees.newCollection(), $scope.combinedWeightedGpa);
      $scope.courseRows                       = courseRows.collection();
      $scope.totalQualityHours                = gradePointAverageCalculator.sumQualityHours();
    }

    configurations.settings().$promise
    .then(function (config) {
      layouts.design(config.design)
      .then(function (designObject) {
        $scope.campusView = designObject.view;
        $scope.version    = designObject.layout;
        updateSelectedCampus(config.defaultCampus);
      })
      .then(function () {
        $scope.campus     = campuses.defaultCampus(config.defaultCampus);
        campuses.dynamicTheme(config.dynamicTheme);
        $scope.theme      = theme(config.defaultCampus);
        getFaculties(config.defaultCampus);
        $scope.faculty    = (faculties.defaultFaculty(config.defaultFaculty));
        updateSelectedFaculty(config.defaultFaculty);
      });

      student.courseRowInformation(config.studentProgrammeRecordURI)
      .then(function (courseRowsArray) {
        if (courseRows.collection().length === 0) {
          courseRows.addArray(courseRowsArray);
        }
      })
      .then(function () {
        updateGpaScopes();
      });

      courses.coursesRest(config.coursesURI, $scope.courses).$promise
      .then(function (response) {
        var coursesArray = response.courses;
        for (var i = 0; i < coursesArray.length; i++) {
          $scope.courses.push(coursesArray[i]);
        }
      });

      $scope.programmes         = programmes.collection();
      $scope.courses            = courses.collection();
      $scope.courseTypes        = courseTypes.collection();
      $scope.levels             = levels.collection();
      $scope.grades             = grades.collection();
      $scope.qualityhoursValues = qualityhoursValues.collection();
    }, function (error){
      console.debug('config request failed: ' + error);
      $scope.campus = campuses.defaultCampus('default');
      updateSelectedCampus();
      campuses.dynamicTheme(true);
      getFaculties();
      // $scope.faculty = (null);
      updateSelectedFaculty(false);

      student.courseRowInformation('gpa.json')
      .then(function (courseRowsArray) {
        if (courseRows.collection().length === 0) {
          courseRows.addArray(courseRowsArray);
        }
      })
      .then(function () {
        updateGpaScopes();
      });

      courses.coursesRest('courses.json', $scope.courses).$promise
      .then(function (response) {
        var coursesArray = response.courses;
        for (var i = 0; i < coursesArray.length; i++) {
          $scope.courses.push(coursesArray[i]);
        }
      });

      $scope.theme              = theme();
      $scope.programmes         = programmes.collection();
      $scope.courses            = courses.collection();
      $scope.courseTypes        = courseTypes.collection();
      $scope.levels             = levels.collection();
      $scope.grades             = grades.collection();
      $scope.qualityhoursValues = qualityhoursValues.collection();
    });

    $scope.facultySelected = function (faculty) {
      updateSelectedFaculty(faculty);
      if (faculties.thisFaculty()) {
        // console.debug(faculties.thisFaculty());
        updateGpaScopes();
      }
    };

    $scope.addCourse = function (term, course, courseType, level, grade, qualityhoursValue) {
      $scope.optionAlert = false;
      if (course && courseType && level && grade && qualityhoursValue) {
        courseRows.addRow(term, course, courseType, level, grade, qualityhoursValue);
        updateGpaScopes();
      }
      else {
        $scope.optionAlert = true;
      }
    };

    $scope.removeCourse = function (courseToRemove) {
      courseRows.removeRow(courseToRemove);
      updateGpaScopes();
    };

    $scope.includeCourse = function (courseRow) {
      console.debug(courseRow);
      updateGpaScopes();
    };

    $scope.changeBackgroundColour = function (courseRow) {
      if (!courseRow.include) {
        return 'danger';
      }
    };

    $scope.gotoCalculator = function () {
      $location.hash('calculator');
      $anchorScroll();
    };

    $scope.selectTerm = function (term) {
      $scope.term = terms.selectedTerm(term);
    };

    $scope.addCoursesModal = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/addcoursesmodal.html',
        controller : 'AddcoursesmodalCtrl',
        size       : 'lg'
      });

      modalInstance.result
      .then(function (newCourseRows) {
        console.debug(newCourseRows);
        for (var i = 0; i < newCourseRows.length; i++) {
          courseRows.addRow(newCourseRows[i].term, newCourseRows[i].course, newCourseRows[i].courseType, newCourseRows[i].level, newCourseRows[i].grade, newCourseRows[i].qualityhoursValue);
        }
        $scope.newCourseRowsCount = newCourseRows.length;
        updateGpaScopes();
      }, function () {

      });
    };

    $scope.newCourseRow = function (courseRow) {
      var courseRowsArray, offset;
      courseRowsArray = courseRows.collection();
      offset = courseRowsArray.length - $scope.newCourseRowsCount;
      if (courseRowsArray.indexOf(courseRow) >= offset) {
        return 'animate-row';
      }
    };

    $scope.combinedCumulativeFormulaIsCollapsed = false;
    $scope.combinedDegreeFormulaIsCollapsed = false;

  });
