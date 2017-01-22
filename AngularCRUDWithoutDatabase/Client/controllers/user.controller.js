angular
    .module("app")
    .controller("userCtrl", function($scope, $rootScope, userService) {
        $rootScope.Title = "Angular App";

        userService.getUsers().then(function(res) {
            $scope.users = res.data;
            console.log(res.data);
        }).catch(function(err) {
            console.log(err);
        });

        $scope.$on('handleshareUser', function(events, users) {
            $scope.users = users;
        })

        //add user
        $scope.addNewUser = function(users) {
            console.log(users);
            userService.saveUsers(users);
        }

        //delete user
        $scope.deleteOneUser = function(id) {
            console.log(id);
            userService.deleteUser(id);
        }
    });