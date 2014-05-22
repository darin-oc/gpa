'use strict';

describe('Service: Courserows', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Courserows;
  beforeEach(inject(function (_Courserows_) {
    Courserows = _Courserows_;
  }));

  it('should do something', function () {
    expect(!!Courserows).toBe(true);
  });

});
