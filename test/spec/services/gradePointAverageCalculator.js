'use strict';

describe('Service: Gradepointaveragecalculator', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Gradepointaveragecalculator;
  beforeEach(inject(function (_Gradepointaveragecalculator_) {
    Gradepointaveragecalculator = _Gradepointaveragecalculator_;
  }));

  it('should do something', function () {
    expect(!!Gradepointaveragecalculator).toBe(true);
  });

});
