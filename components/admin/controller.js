myApplication.controller('adminController'
                ,function($scope, $location,$rootScope , personService){

    $scope.check = function(){
        if($rootScope.loggedUser == undefined){
            $location.path('/');
        }else if (!$rootScope.loggedUser.admin) {
            $location.path('/home');
        }
    }
    $scope.nextId = personService.getlastId();
    $scope.persons = personService.persons;
    $scope.add = function(firstName, lastName){
        var newPerson = {
            id : personService.getlastId()+1 ,
            firstName : firstName,
            lastName : lastName
        }
        personService.addPerson(newPerson);
    }

    $scope.logout = function() {
        $rootScope.loggedUser = undefined;
        $location.path('/');
    };
});
