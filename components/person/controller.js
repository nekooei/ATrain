myApplication.controller('personController', function($scope,personService,homeService){
    $scope.loadData = function () {
        $scope.persons = personService.persons;
    };
    $scope.add = function(id){
        var person = personService.getPersonById(id);
        homeService.addFriend(person);
    };
});
