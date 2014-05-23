'use strict';

angular.module('waPoDemoApp')
    .controller('ResultsCtrl', function($scope, $routeParams, API) {
        $scope.resultData = undefined;

        API.retrieve($routeParams.uuid, $routeParams.days).then(function(result){
            $scope.resultData = result.data;

        });
        

    });
