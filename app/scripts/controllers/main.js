'use strict';

angular.module('waPoDemoApp')
  .controller('MainCtrl', function ($scope, $location, API) {

    $scope.searchParams = {};

    $scope.performSearch = function() {
        var searchPath = "/results/" + $scope.searchParams.uuid + "/period/" + $scope.searchParams.days;
        $location.path(searchPath);
    }


  });
