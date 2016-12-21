myApplication.controller('adminController'
                ,function($scope, $location,$rootScope , personService){

    function check(){
        if($rootScope.loggedUser == undefined){
            $location.path('/');
        }else if (!$rootScope.loggedUser.admin) {
            $location.path('/home');
        }
    }
    check();

    $scope.nextId = personService.getLastId();
    $scope.persons = personService.persons;
    $scope.add = function(firstName, lastName){
        var newPerson = {
            id : personService.getLastId()+1 ,
            firstName : firstName,
            lastName : lastName
        };
        personService.addPerson(newPerson);
    };

    $scope.logout = function() {
        $rootScope.loggedUser = undefined;
        $location.path('/');
    };
});
