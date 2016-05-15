app.directive("newDirective", function() {
    return {
        restrict: "A",
        template: "<thead>" +
                        "<tr>" +
                            "<th>Name</th>" +
                            "<th>City</th>" +
                        "</tr>" +
                    "</thead>" +
                    "<tbody ng-controller=\"ctrl\">" +
                          "<tr ng-repeat=\"cust in customers | filter:name | filter:city | orderBy:'name':false\">" +
                            "<td ng-bind=\"cust.name\"></td>" +
                            "<td ng-bind=\"cust.city\"></td>" +
                          "</tr>" +
                    "</tbody>"
    };
});