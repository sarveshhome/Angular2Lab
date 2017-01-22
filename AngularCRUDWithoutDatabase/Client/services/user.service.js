angular
    .module("app")
    .factory("userService", function($http, globalConfig, $rootScope) {
        var url = "";
        return {
            getUsers: function() {
                url = globalConfig.apiAddress + "/user";
                return $http.get(url);
            },
            saveUsers: function(users) {
                url = globalConfig.apiAddress + "/user";
                return $http.post(url, users)
                    //     .success(function(addusers) {
                    //     users = addusers;
                    //     //$rootScope.$broadcast('handleshareUser', users);
                    // })
                ;
            },
            deleteUser: function(id) {
                url = globalConfig.apiAddress + "/user";
                return $http.delete(url + "/" + id);
            }

        };
    });