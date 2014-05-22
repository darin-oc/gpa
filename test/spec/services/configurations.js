'use strict';

describe('Service: configurations', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var configurations;
  beforeEach(inject(function (_configurations_) {
    configurations = _configurations_;
  }));

  it('should do something', function () {
    expect(!!configurations).toBe(true);
  });

});
