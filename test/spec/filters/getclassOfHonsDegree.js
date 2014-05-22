'use strict';

describe('Filter: getclassOfHonsDegree', function () {

  // load the filter's module
  beforeEach(module('gpaApp'));

  // initialize a new instance of the filter before each test
  var getclassOfHonsDegree;
  beforeEach(inject(function ($filter) {
    getclassOfHonsDegree = $filter('getclassOfHonsDegree');
  }));

  it('should return the input prefixed with "getclassOfHonsDegree filter:"', function () {
    var text = 'angularjs';
    expect(getclassOfHonsDegree(text)).toBe('getclassOfHonsDegree filter: ' + text);
  });

});
