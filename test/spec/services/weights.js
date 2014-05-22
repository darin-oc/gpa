'use strict';

describe('Service: weights', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var weights;
  beforeEach(inject(function (_weights_) {
    weights = _weights_;
  }));

  it('should do something', function () {
    expect(!!weights).toBe(true);
  });

});
