'use strict';

angular.module('gpaApp', [
  // 'ngCookies',
  'ngResource',
  // 'ngSanitize',
  'ngRoute',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.collapse',
  'ui.bootstrap.modal',
  'ui.bootstrap.dropdown'
])
  .config(function ($locationProvider, $routeProvider, $httpProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
