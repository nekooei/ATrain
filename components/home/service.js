myApplication.factory('homeService',function(personService){

    var miladFriends = [];

    var getFriends = function(){
        return miladFriends;
    };

    var add = function(person){
        if(!miladFriends.includes(person)){
            miladFriends.push(person);
        }
    };

    return {
        getFriends : getFriends,
        addFriend : add
    };
});
