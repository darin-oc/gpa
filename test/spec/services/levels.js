'use strict';

describe('Service: Levels', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Levels;
  beforeEach(inject(function (_Levels_) {
    Levels = _Levels_;
  }));

  it('should do something', function () {
    expect(!!Levels).toBe(true);
  });

});
