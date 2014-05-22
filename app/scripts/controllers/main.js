'use strict';

angular.module('waPoDemoApp')
  .controller('MainCtrl', function ($scope, $location, API) {

    $scope.searchParams = {};

    $scope.buttonTest = function() {
        console.log($scope.searchForm.uuidField);
    }

    $scope.basicAPICaller = function() {
        console.log("calling from a service now!");
        API.openAPI($scope.searchParams.uuid, $scope.searchParams.days);
    }


  });
