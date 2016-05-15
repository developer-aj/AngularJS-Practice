app.controller('ctrl', function($scope) {
    $scope.customers = [
		{name:'John Smith', city:'Phoenix'},
		{name:'Adam Smith', city:'Phoenix'},
		{name:'Cristiano Ronaldo', city:'Phoenix'},
		{name:'Johny', city:'Phoenix'},
		{name:'Emilia Clarke', city:'Meereen'}
	];
	$scope.display = function(object){
		return object.name + " - " + object.city;
	};
});