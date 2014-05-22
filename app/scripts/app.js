'use strict';

angular.module('gpaApp', [
  // 'ngCookies',
  'ngResource',
  // 'ngSanitize',
  'ngRoute',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.collapse'
])
  .config(function ($locationProvider, $routeProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
