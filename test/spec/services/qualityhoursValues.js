'use strict';

describe('Service: Qualityhoursvalues', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var Qualityhoursvalues;
  beforeEach(inject(function (_Qualityhoursvalues_) {
    Qualityhoursvalues = _Qualityhoursvalues_;
  }));

  it('should do something', function () {
    expect(!!Qualityhoursvalues).toBe(true);
  });

});
