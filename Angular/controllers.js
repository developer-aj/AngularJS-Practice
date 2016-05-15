app.controller('ctrl', function($scope) {
    $scope.customers = [
		{name:'John Smith', city:'Phoenix'},
		{name:'Adam Smith', city:'Phoenix'},
		{name:'Cristiano Ronaldo', city:'Phoenix'},
		{name:'Johny', city:'Phoenix'},
		{name:'Emilia Clarke', city:'Meereen'}
	];
});

app.run(function($rootScope) {
    $rootScope.orderByX = "'name'",
    $rootScope.changeOrderBy = function(x) {
        $rootScope.orderByX = x;
    }
});