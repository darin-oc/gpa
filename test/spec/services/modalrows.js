'use strict';

describe('Service: modalRows', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var modalRows;
  beforeEach(inject(function (_modalRows_) {
    modalRows = _modalRows_;
  }));

  it('should do something', function () {
    expect(!!modalRows).toBe(true);
  });

});
