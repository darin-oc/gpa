'use strict';

describe('Service: Courses', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Courses;
  beforeEach(inject(function (_Courses_) {
    Courses = _Courses_;
  }));

  it('should do something', function () {
    expect(!!Courses).toBe(true);
  });

});
