'use strict';

describe('Filter: getQualityPoints', function () {

  // load the filter's module
  beforeEach(module('gpaApp'));

  // initialize a new instance of the filter before each test
  var getQualityPoints;
  beforeEach(inject(function ($filter) {
    getQualityPoints = $filter('getQualityPoints');
  }));

  it('should return the input prefixed with "getQualityPoints filter:"', function () {
    var text = 'angularjs';
    expect(getQualityPoints(text)).toBe('getQualityPoints filter: ' + text);
  });

});
