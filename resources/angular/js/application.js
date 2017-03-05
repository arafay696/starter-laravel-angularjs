var starter = angular.module('starter', ['ngRoute', 'ngAnimate']);

starter.config(function ($routeProvider, $httpProvider) {
    $routeProvider.when('/dashboard', {
        controller: 'MainCtrl',
        templateUrl: 'resources/angular/partials/dashboard.html'
    });


    $routeProvider.otherwise({
        redirectTo: '/dashboard',
        templateUrl: 'resources/angular/partials/dashboard.html'
    });
});