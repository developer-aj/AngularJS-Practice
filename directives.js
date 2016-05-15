app.directive("newDirective", function() {
    return {
        restrict: "A",
        template: "<ul ng-controller=\"ctrl\"><li ng-repeat=\"cust in customers | filter:name | orderBy:'name':false\"><span ng-bind=\"display(cust)\"></span></li></ul>"
    };
});