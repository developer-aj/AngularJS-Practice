app.controller('ctrl', function($scope, $http) {
 $http.get("http://www.w3schools.com/angular/customers.php").then(function (response){
        $scope.customers = response.data.records;
    }); 
});

app.run(function($rootScope, $location, $http, $timeout) {
    $rootScope.orderByX = "name";
    $rootScope.pageHeader = "You are currently browsing : " + $location.absUrl();
    
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