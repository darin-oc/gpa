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
    modalRows,
    faculties
    ) {

    modalRows.reset();
    $scope.courses             = courses.collection();
    $scope.terms               = terms.collection();
    $scope.levels              = levels.collection();
    $scope.grades              = grades.collection();
    $scope.qualityhoursValues  = qualityhoursValues.collection();
    $scope.modalRows           = modalRows.collection();
    $scope.rowLevel            = {
      level: [],
      qualityhoursValue: []
    };
    $scope.disableLevel        = false;
    $scope.disableQualityHours = false;

    function getModalRowsValues () {
      var modalRowsCollection;
      modalRowsCollection = modalRows.collection();
      for (var i = 0; i < modalRowsCollection.length; i++) {
        $scope.rowLevel.level[i] = modalRowsCollection[i].level;
        $scope.rowLevel.qualityhoursValue[i] = modalRowsCollection[i].qualityhoursValue;
      }
    }

    getModalRowsValues();

    if (faculties.thisFaculty() !== 'Eng') {
      $scope.disableLevel        = true;
      $scope.disableQualityHours = true;
    }

    $scope.addModalRowBelow = function (afterThisRow) {
      $scope.incomplete = false;
      // console.debug(afterThisRow);
      modalRows.addRow(afterThisRow);
      getModalRowsValues();
    };

    $scope.removeModalRow = function (rowToRemove) {
      $scope.incomplete = false;
      modalRows.removeRow(rowToRemove);
      getModalRowsValues();
    };

    $scope.change = function (rowObject, key, value) {
      var levelIndex;
      $scope.incomplete = false;
      levelIndex = modalRows.changeRowValue(rowObject, key, value);
      getModalRowsValues();
      // console.debug($scope.rowLevel);
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
