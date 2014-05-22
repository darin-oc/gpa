'use strict';

describe('Service: Campuses', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Campuses;
  beforeEach(inject(function (_Campuses_) {
    Campuses = _Campuses_;
  }));

  it('should do something', function () {
    expect(!!Campuses).toBe(true);
  });

});
