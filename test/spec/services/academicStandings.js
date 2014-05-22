'use strict';

describe('Service: Academicstandings', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Academicstandings;
  beforeEach(inject(function (_Academicstandings_) {
    Academicstandings = _Academicstandings_;
  }));

  it('should do something', function () {
    expect(!!Academicstandings).toBe(true);
  });

});
