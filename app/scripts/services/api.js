'use strict';

angular.module('waPoDemoApp')
  .service('API', function API($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var baseURL = "/api/data/";

    function openAPIInNewWindow(uuid, days) {
        var pathToRender = baseURL + uuid + "/" + days;

        window.open(pathToRender, '_blank');
    }

    function retrieveAPIData(uuid, days) {
        var pathToRetrieve = baseURL + uuid + "/" + days;
        return $http.get(pathToRetrieve);
    }

    return {
        baseURL: baseURL,
        // openAPI: openAPIInNewWindow,
        retrieve: retrieveAPIData
    }
  });
