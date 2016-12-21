myApplication.controller('authController'
            ,function($scope, $location, $rootScope, authService){
    $scope.doLogin = function(username, password) {
        var res = authService.login(username, password);
        if(res != undefined){
            $scope.showError = false;
            $scope.message = "";
            $rootScope.loggedUser = res;
            $location.path('/home');
        }else {
            $scope.showError = true;
            $scope.message = "username or password is invalid!";
            $rootScope.loggedUser = undefined;
        }
    }
});
