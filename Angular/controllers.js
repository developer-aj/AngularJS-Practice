app.controller('ctrl', function($scope) {
    $scope.customers = [
		{name:'John Smith', city:'Phoenix'},
		{name:'Adam Smith', city:'Phoenix'},
		{name:'Cristiano Ronaldo', city:'Phoenix'},
		{name:'Johny', city:'Phoenix'},
		{name:'Emilia Clarke', city:'Meereen'}
	];
});

app.run(function($rootScope, $location, $http, $timeout) {
    $rootScope.orderByX = "name";
    $rootScope.pageHeader = "You are currently browsing : " + $location.absUrl();
    $http.post("http://webscraping.herokuapp.com/", "csrfmiddlewaretoken:'JqyvJkhrPftJ3yshSLgCf7LyuAulqIy4',website:'www.google.com'").then(function (response){
        $rootScope.responseData = response.data;
    });
    $timeout(function(){
        $rootScope.pageHeader = "Hi there !";
    }, 5000);
    $rootScope.changeOrderBy = function(x) {
        $rootScope.orderByX = x;
    }
});

app.service('hexafy', function(){
   this.hexaFy = function(x){
       return x.toString(16);
   }
});