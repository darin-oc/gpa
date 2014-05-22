'use strict';

describe('Service: terms', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var terms;
  beforeEach(inject(function (_terms_) {
    terms = _terms_;
  }));

  it('should do something', function () {
    expect(!!terms).toBe(true);
  });

});
