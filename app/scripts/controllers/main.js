'use strict';

/**
 * @ngdoc function
 * @name bdirFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bdirFrontApp
 */
angular.module('bdirFrontApp')
    .controller('MainCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('LoginCtrl', ['$scope', function($scope) {
        
    }])
;
