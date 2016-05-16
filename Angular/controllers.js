app.controller('ctrl', function($scope) {
    $scope.customers = [
		{name:'John Smith', city:'Phoenix'},
		{name:'Adam Smith', city:'Phoenix'},
		{name:'Cristiano Ronaldo', city:'Phoenix'},
		{name:'Johny', city:'Phoenix'},
		{name:'Emilia Clarke', city:'Meereen'}
	];
});

app.run(function($rootScope, $location) {
    $rootScope.orderByX = "name";
    $rootScope.myUrl = $location.absUrl();
    $rootScope.changeOrderBy = function(x) {
        $rootScope.orderByX = x;
    }
});