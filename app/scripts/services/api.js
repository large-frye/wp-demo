'use strict';

angular.module('waPoDemoApp')
  .service('API', function API() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var baseURL = "http:/wp-personlization-dev-web-1454444837.us-east-1.elb.amazonaws.com/api/data/";


    return {
        baseURL: baseURL
    }
  });
