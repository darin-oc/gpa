'use strict';

describe('Directive: chosen', function () {

  // load the directive's module
  beforeEach(module('gpaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chosen></chosen>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chosen directive');
  }));
});
