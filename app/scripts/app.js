'use strict';

/**
 * @ngdoc overview
 * @name bdirFrontApp
 * @description
 * # bdirFrontApp
 *
 * Main module of the application.
 */
angular
    .module('bdirFrontApp', [
        'ngCookies',
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
