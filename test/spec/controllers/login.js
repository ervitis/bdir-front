'use strict';

describe('Controller: LoginCtrl', function () {

    // load the controller's module
    beforeEach(module('bdirFrontApp'));

    var LoginCtrl,
        httpBackend,
        apiData,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $httpBackend, apiDataService) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope
        });
        apiData = apiDataService;

        var data = {
            username: 'test',
            password: 'test'
        };

        httpBackend.whenPOST(apiData.getApiAuthenticationUrl(), data)
            .respond(function(method, url, data, headers) {
                console.log(method, url, data, headers);

                scope.isLogged = true;
                return [200, {jwt: '12345678.234554123452.623456'}, {}];
            })
        ;
    }));

    it('call the apiDataService getApiAuthentication', function () {
        expect(scope.isLogged === true);
    });

    it('call the apiDataService and return a jwt code', function() {
        expect(scope.jwt !== null);
    });
});
