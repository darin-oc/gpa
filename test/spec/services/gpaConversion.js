'use strict';

describe('Service: gpaConversion', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var gpaConversion;
  beforeEach(inject(function (_gpaConversion_) {
    gpaConversion = _gpaConversion_;
  }));

  it('should do something', function () {
    expect(!!gpaConversion).toBe(true);
  });

});
