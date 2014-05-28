'use strict';

angular.module('gpaApp')
  .controller('AddcoursesmodalCtrl', function (
    $scope,
    $modalInstance,
    courses,
    terms,
    courseTypes,
    levels,
    grades,
    qualityhoursValues,
    modalRows
    ) {

    modalRows.reset();
    $scope.courses            = courses.collection();
    $scope.terms              = terms.collection();
    $scope.courseTypes        = courseTypes.collection();
    $scope.levels             = levels.collection();
    $scope.grades             = grades.collection();
    $scope.qualityhoursValues = qualityhoursValues.collection();
    $scope.modalRows          = modalRows.collection();

    $scope.addModalRowBelow = function (afterThisRow) {
      $scope.incomplete = false;
      // console.debug(afterThisRow);
      modalRows.addRow(afterThisRow);
    };

    $scope.removeModalRow = function (rowToRemove) {
      $scope.incomplete = false;
      modalRows.removeRow(rowToRemove);
    };

    $scope.change = function (rowObject, key, value) {
      $scope.incomplete = false;
      modalRows.changeRowValue(rowObject, key, value);
    };

    $scope.valid = 'modal-select';

    $scope.sendModalRowsToCourseRows = function () {
      $scope.incomplete = false;
      $scope.count = modalRows.validateRows();
      if ($scope.count > 0) {
        $scope.incomplete = true;
        if ($scope.count === 1) {
          $scope.rowGrammar = 'row';
          $scope.thatGrammar = 'that';
          $scope.itGrammar = 'it';
        }
        else {
          $scope.rowGrammar = 'rows';
          $scope.thatGrammar = 'those';
          $scope.itGrammar = 'them';
        }
      }
      else {
        modalRows.cleanUpModalRows();
        // console.debug(modalRows.collection());
        $modalInstance.close(modalRows.collection());
      }
    };

    $scope.close = function () {
      $modalInstance.dismiss('cancel');
    };
  });
