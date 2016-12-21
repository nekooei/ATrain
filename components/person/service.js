myApplication.factory('personService',function () {
    var lastId = 2;
    var persons =[{
        id : 1,
        firstName : 'jafar',
        lastName : 'jafari'
    },
    {
        id : 2,
        firstName : 'aghdas',
        lastName : 'moghadasi'
    }];

    var addPerson = function(person){
        if(!persons.includes(person)){
            persons.push(person);
            lastId++ ;
        }
    };

    var getById = function(id){
        for(var i = 0 ; i < persons.length ; i++){
            if(persons[i].id == id){
                return persons[i];
            }
        }
        return undefined;
    };

    var getLastId = function () {
        return lastId;
    };

    return {
        persons : persons,
        addPerson : addPerson,
        getPersonById : getById,
        getLastId : getLastId
    };
});
