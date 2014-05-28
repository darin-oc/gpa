'use strict';

angular.module('gpaApp')
  .factory('terms', function () {
    // Service logic
    var terms;

    terms = [
      {icon: 'text-danger fa fa-backward', name: 'Before Semester I 2014/2015', title:'Taken before Semester I 2014/2015', code:201330},
      {icon: 'text-success fa fa-forward', name: 'During/after Semester I 2014/2015', title:'Taken after Semester I 2014/2015 change', code:201410}
    ];

    // Public API here
    return {
      collection: function () {
        return terms;
      },
      selectedTerm: function (termCode) {
        if (termCode < 201410) {
          return terms[0];
        }
        else {
          return terms[1];
        }
      }
    };
  });
