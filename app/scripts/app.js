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
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
