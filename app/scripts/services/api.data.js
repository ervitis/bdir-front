'use strict';

var app = angular.module('ApiDataModule', []);

app.service('apiDataService', function() {
    var host = '127.0.0.1';
    var port = '8000';
    
    this.__getHost = function() {
        return host + ':' + port;
    };
    
    this.getApiAuthenticationUrl = function() {
        return this.__getHost() + '/auth';
    };

});
