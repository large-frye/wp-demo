'use strict';

angular.module('waPoDemoApp')
    .controller('ResultsCtrl', function($scope, $routeParams, API) {
        console.log($routeParams);
        // $scope.resultData = 

        $scope.searchWithParams = function() {
            API.openAPI($routeParams.uuid, $routeParams.days);
        }
    });
