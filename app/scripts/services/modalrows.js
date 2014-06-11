'use strict';

angular.module('gpaApp')
  .factory('modalRows', function () {
    // Service logic
    var modalRows, sanitize;

    modalRows = [];
    sanitize  = [];

    function add (rowObject) {
      var index = modalRows.indexOf(rowObject);
      // console.debug(index);
      modalRows.splice(index + 1, 0, {
        course                 :null,
        courseType             :null,
        level                  :null,
        grade                  :null,
        qualityhoursValue      :null
      });
    }

    function remove (rowObject) {
      var index = modalRows.indexOf(rowObject);
      // console.debug(index);
      modalRows.splice(index, 1);
    }

    function changeValue (rowObject, key, value) {
      var index = modalRows.indexOf(rowObject);
      switch (key) {
        case 'course':
          if (value === null) {
            modalRows[index].course = null;
          }
          else {
            modalRows[index].course = value;
          }
          break;
        case 'term':
          if (value === null) {
            modalRows[index].term = null;
          }
          else {
            modalRows[index].term = value;
          }
          break;
        case 'courseType':
          if (value === null) {
            modalRows[index].courseType = null;
          }
          else {
            modalRows[index].courseType = value;
          }
          break;
        case 'level':
          if (value === null) {
            modalRows[index].level = null;
          }
          else {
            modalRows[index].level = value;
          }
          break;
        case 'grade':
          if (value === null) {
            modalRows[index].grade = null;
          }
          else {
            modalRows[index].grade = value;
          }
          break;
        case 'qualityhoursValue':
          if (value === null) {
            modalRows[index].qualityhoursValue = 0;
          }
          else {
            modalRows[index].qualityhoursValue = value;
          }
          break;
      }
    }

    function resetModalRows () {
      modalRows = [
        {
          course            :null,
          term              :null,
          courseType        :null,
          level             :null,
          grade             :null,
          qualityhoursValue :null
        }
      ];
      sanitize = [];
    }

    function validate () {
      var i, count = 0;
      sanitize = [];
      for (i = 0; i < modalRows.length; i++) {
        if ((modalRows[i].course === null || (typeof modalRows[i].course === 'undefined')) && (modalRows[i].term === null || (typeof modalRows[i].term === 'undefined')) && (modalRows[i].courseType === null || (typeof modalRows[i].courseType === 'undefined')) && (modalRows[i].level === null || (typeof modalRows[i].level === 'undefined')) && (modalRows[i].grade === null || (typeof modalRows[i].grade === 'undefined')) && (modalRows[i].qualityhoursValue === null || (typeof modalRows[i].qualityhoursValue === 'undefined'))) {
          sanitize[i] = -1;
        }
        else if (((modalRows[i].course !== null) && (typeof modalRows[i].course !== 'undefined')) && ((modalRows[i].term !== null) && (typeof modalRows[i].term !== 'undefined')) && ((modalRows[i].courseType !== null) && (typeof modalRows[i].courseType !== 'undefined')) && ((modalRows[i].level !== null) && (typeof modalRows[i].level !== 'undefined')) && ((modalRows[i].grade !== null) && (typeof modalRows[i].grade !== 'undefined')) && ((modalRows[i].qualityhoursValue !== null) && (typeof modalRows[i].qualityhoursValue !== 'undefined'))) {
          sanitize[i] = 1;
        }
        else {
          sanitize[i] = 0;
          count = count + 1;
        }
        // console.debug(modalRows[i].course+','+modalRows[i].term+','+modalRows[i].courseType+','+modalRows[i].level+','+modalRows[i].grade+','+modalRows[i].qualityhoursValue);
      }
      console.debug(sanitize);
      return count;
    }

    function cleanUp () {
      var i;
      for (i = 0; i < sanitize.length; i++) {
        if (sanitize[i] === -1) {
          modalRows.splice(i, 1);
          validate();
          cleanUp();
          break;
        }
      }
    }

    // Public API here
    return {
      collection: function () {
        return modalRows;
      },
      addRow: function (rowObject) {
        return add(rowObject);
      },
      removeRow: function (rowObject) {
        return remove(rowObject);
      },
      changeRowValue: function (rowObject, key, value) {
        return changeValue(rowObject, key, value);
      },
      reset: function () {
        return resetModalRows();
      },
      validateRows: function () {
        return validate();
      },
      cleanUpModalRows: function () {
        return cleanUp();
      }
    };
  });
