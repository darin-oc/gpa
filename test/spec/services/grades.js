'use strict';

describe('Service: Grades', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Grades;
  beforeEach(inject(function (_Grades_) {
    Grades = _Grades_;
  }));

  it('should do something', function () {
    expect(!!Grades).toBe(true);
  });

});
