app.directive("newDirective", function() {
    return {
        restrict: "A",
        template: "<thead>" +
                        "<tr>" +
                            "<th ng-click=\"changeOrderBy('name')\">Name</th>" +
                            "<th ng-click=\"changeOrderBy('city')\">City</th>" +
                        "</tr>" +
                    "</thead>" +
                    "<tbody ng-controller=\"ctrl\">" +
                          "<tr ng-repeat=\"cust in customers | filter:name | filter:city | orderBy:orderByX:false\">" +
                            "<td ng-bind=\"cust.name\"></td>" +
                            "<td ng-bind=\"cust.city\"></td>" +
                          "</tr>" +
                    "</tbody>"
    };
});