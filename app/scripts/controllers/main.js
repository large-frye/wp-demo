'use strict';

angular.module('waPoDemoApp')
  .controller('MainCtrl', function ($scope, $location, API) {

    // console.log($scope.searchForm);

    $scope.searchParams = {};

    $scope.$watch('searchForm', function(newVal, oldVal) {
      console.log(newVal);
    });
    $scope.$watch('searchForm.uuidField', function(newVal, oldVal) {
      console.log(newVal);
    });
    $scope.$watch('searchForm.daysField', function(newVal, oldVal) {
      console.log(newVal);
    });

    $scope.buttonTest = function() {
        console.log($scope.searchForm.uuidField);
    }

    $scope.basicAPICaller = function(UUID, days) {
        var baseURL = API.baseURL;
        $location.path(baseURL + UUID + "/" + days);
    }


  });
