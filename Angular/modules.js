var app = angular.module('app', []);
app.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'ctrl',
                templateUrl: 'Partials/View1.html'
            })
        .when('/add', 
            {
                controller: 'ctrl',
                templateUrl: 'Partials/View2.html'
            })
        .otherwise({ redirectTo: '/' });
});