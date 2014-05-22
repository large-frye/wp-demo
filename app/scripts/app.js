'use strict';

angular.module('waPoDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        // controller: 'MainCtrl'
      })
      .when('/results/:uuid/', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/results/:uuid/period/:days', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
