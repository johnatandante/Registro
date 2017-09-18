var app = angular.module('RegistroApp',
    [
        'mainControllers',
        'ngRoute',
    ]);
// rewrite url
// http://geekswithblogs.net/shaunxu/archive/2014/06/10/host-angularjs-html5mode-in-asp.net-vnext.aspx
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: "./app/views/home.html",
                controller: "main"
            }).
            when("/calendario", {
                templateUrl: "./app/views/calendario.html",
                controller: "weekSchedule"
            }).
            when("/allievi", {
                templateUrl: "./app/views/allievi.html",
                controller: "allievi"
            }).
            when("/about", {
                templateUrl: "./app/views/about.html",
                controller: "about"
            }).
            //when('/login', {
            //    templateUrl: "views/login.html"
            //}).
            //when('/user', {
            //    templateUrl: "views/userInfo.html",
            //    controller: "schedulePlan",
            //    controllerAs: "plan"
            //}).
            //when('/signup', {
            //    templateUrl: "views/signup.html"
            //}).
            //when('/logout', {
            //    templateUrl: "views/logout.html"
            //}).
            otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true);
        // .hashPrefix('!');

    }]);


