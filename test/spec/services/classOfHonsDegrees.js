'use strict';

describe('Service: Classofhonsdegrees', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Classofhonsdegrees;
  beforeEach(inject(function (_Classofhonsdegrees_) {
    Classofhonsdegrees = _Classofhonsdegrees_;
  }));

  it('should do something', function () {
    expect(!!Classofhonsdegrees).toBe(true);
  });

});
