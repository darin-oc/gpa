'use strict';

describe('Service: Faculties', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Faculties;
  beforeEach(inject(function (_Faculties_) {
    Faculties = _Faculties_;
  }));

  it('should do something', function () {
    expect(!!Faculties).toBe(true);
  });

});
