'use strict';

describe('Service: sessionUser', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var sessionUser;
  beforeEach(inject(function (_sessionUser_) {
    sessionUser = _sessionUser_;
  }));

  it('should do something', function () {
    expect(!!sessionUser).toBe(true);
  });

});
