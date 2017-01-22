angular
    .module("app", ["ui.router", "ngMessages"])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider.state("home", {
            url: "/",
            templateUrl: "views/users/index.html",
            controller: "userCtrl"
        }).state("create", {
            url: "/create",
            templateUrl: "views/users/create.html",
            controller: "userCtrl"
        });

        $locationProvider.html5Mode(true);
    })
    .constant("globalConfig", {
        apiAddress: "http://localhost:3001/api"
    });