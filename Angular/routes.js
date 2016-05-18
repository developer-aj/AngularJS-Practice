app.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'ctrl',
                templateUrl: 'Partials/View1.html'
            })
        .when('/partial2', 
            {
                controller: 'ctrl',
                templateUrl: 'Partials/View2.html'
            })
        .otherwise({ redirectTo: '/' });
});