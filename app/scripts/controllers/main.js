'use strict';

/**
 * @ngdoc function
 * @name bdirFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bdirFrontApp
 */
angular.module('bdirFrontApp')
    .controller('MainCtrl', ['$scope', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }])
    .controller('LoginCtrl', function(localStorageService, apiDataService, $scope, $http) {
        $scope.isLogged = null;
        
        function successCallback(response) {
            if (response.token) {
                localStorageService.add('token', response.token);
                localStorageService.add('curentuser', $scope.username);

                $http.defaults.headers.common.Authorization = 'Bearer: ' + response.token;

                $scope.isLogged = true;
            }
        }
        
        function failCallback() {
            $scope.message = 'Not logged';
            $scope.isLogged = false;
        }
        
        function send() {
            var data = {
                username: $scope.username,
                password: $scope.password
            };

            $http.post(apiDataService.getApiAuthenticationUrl(), data)
                .then(successCallback)
                .then(failCallback)
            ;
        }

        $scope.submit = function() {
            console.log($scope.username, $scope.password);
            send();
        };
    })
;
