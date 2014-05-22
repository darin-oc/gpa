'use strict';

describe('Service: Programmes', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Programmes;
  beforeEach(inject(function (_Programmes_) {
    Programmes = _Programmes_;
  }));

  it('should do something', function () {
    expect(!!Programmes).toBe(true);
  });

});
