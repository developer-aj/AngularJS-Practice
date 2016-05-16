app.directive("newDirective", function() {
    return {
        restrict: "A",
        template: "<thead>" +
                        "<tr>" +
                            "<th ng-click=\"changeOrderBy('Name')\">Name</th>" +
                            "<th ng-click=\"changeOrderBy('City')\">City</th>" +
                            "<th ng-click=\"changeOrderBy('Country')\">Country</th>"
                            +
                        "</tr>" +
                    "</thead>" +
                    "<tbody ng-controller=\"ctrl\">" +
                          "<tr ng-repeat=\"cust in customers | filter:Name | filter:City | filter:Country | orderBy:orderByX:false\">" +
                            "<td ng-bind=\"cust.Name\"></td>" +
                            "<td ng-bind=\"cust.City\"></td>" +
                            "<td ng-bind=\"cust.Country\"></td>" +
                          "</tr>" +
                    "</tbody>"
    };
});