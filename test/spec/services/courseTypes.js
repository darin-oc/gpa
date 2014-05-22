'use strict';

describe('Service: Coursetypes', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Coursetypes;
  beforeEach(inject(function (_Coursetypes_) {
    Coursetypes = _Coursetypes_;
  }));

  it('should do something', function () {
    expect(!!Coursetypes).toBe(true);
  });

});
