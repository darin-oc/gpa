'use strict';

describe('Service: layouts', function () {

  // load the service's module
  beforeEach(module('gpaApp'));

  // instantiate service
  var layouts;
  beforeEach(inject(function (_layouts_) {
    layouts = _layouts_;
  }));

  it('should do something', function () {
    expect(!!layouts).toBe(true);
  });

});
