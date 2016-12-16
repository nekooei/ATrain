myApplication.controller('homeController'
        ,function($scope, $location, $rootScope, homeService){
            
    $scope.check = function(){
        if($rootScope.loggedUser == undefined){
            $location.path('/');
        }else if($rootScope.loggedUser.admin){
            $location.path('/admin');
        }else if(!$rootScope.loggedUser.admin){
            $scope.username = $rootScope.loggedUser.username
            $scope.friends = homeService.getFriends();
        }
    };

    $scope.logout = function(){
        $rootScope.loggedUser = undefined;
        $location.path('/');
    };
});
