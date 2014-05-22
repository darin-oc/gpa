'use strict';

describe('Filter: getConvertedQualityPoints', function () {

  // load the filter's module
  beforeEach(module('gpaApp'));

  // initialize a new instance of the filter before each test
  var getConvertedQualityPoints;
  beforeEach(inject(function ($filter) {
    getConvertedQualityPoints = $filter('getConvertedQualityPoints');
  }));

  it('should return the input prefixed with "getConvertedQualityPoints filter:"', function () {
    var text = 'angularjs';
    expect(getConvertedQualityPoints(text)).toBe('getConvertedQualityPoints filter: ' + text);
  });

});
