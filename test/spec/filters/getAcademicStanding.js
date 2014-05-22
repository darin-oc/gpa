'use strict';

describe('Filter: getAcademicStanding', function () {

  // load the filter's module
  beforeEach(module('gpaApp'));

  // initialize a new instance of the filter before each test
  var getAcademicStanding;
  beforeEach(inject(function ($filter) {
    getAcademicStanding = $filter('getAcademicStanding');
  }));

  it('should return the input prefixed with "getAcademicStanding filter:"', function () {
    var text = 'angularjs';
    expect(getAcademicStanding(text)).toBe('getAcademicStanding filter: ' + text);
  });

});
