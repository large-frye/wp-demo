'use strict';

angular.module('waPoDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'xl-activetabs'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
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
        redirectTo: '/home'
      });

  });
