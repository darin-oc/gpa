'use strict';

describe('Service: adjustments', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var adjustments;
  beforeEach(inject(function (_adjustments_) {
    adjustments = _adjustments_;
  }));

  it('should do something', function () {
    expect(!!adjustments).toBe(true);
  });

});
