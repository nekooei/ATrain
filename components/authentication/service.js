myApplication.factory('authService' , function(){
    var users = [
        {
            id:1,
            username:'milad',
            password:'password',
            admin:false
        },
        {
            id:2,
            username:'farzad',
            password:'password',
            admin:true
        }];

    var login = function(username, password){
        for (var i = 0 ; i < users.length ; i++) {
            var user = users[i];
            if(user.username == username && user.password == password){
                return user;
            }
        }
        return undefined;
    };

    return {
        login : login
    };
});
