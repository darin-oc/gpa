'use strict';

describe('Service: Gradepointscalculator', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Gradepointscalculator;
  beforeEach(inject(function (_Gradepointscalculator_) {
    Gradepointscalculator = _Gradepointscalculator_;
  }));

  it('should do something', function () {
    expect(!!Gradepointscalculator).toBe(true);
  });

});
