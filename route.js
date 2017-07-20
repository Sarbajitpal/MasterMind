var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/competition.html",
        controller :"competitionController"
    })
    .when("/standing", {
        templateUrl : "views/standing.html",
        controller :"standingController"
    })
    .when("/team", {
        templateUrl : "views/team.html",
        controller :"teamController"
    })
    .otherwise({
        redirectTo: '/'
    });
});