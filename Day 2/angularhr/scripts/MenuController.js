/**
 * Created by Eli Ionescu on 6/24/2016.
 */
app.controller('MenuController',[$scope,function ($scope) {
    $scope.demoActionList =[
        { label:"OtherScope",
            url: "views/childscope.html"
        },
        { label:"OtherScope",
            url: "views/childscope.html"
        },
        { label:"OtherScope",
            url: "views/childscope.html"
        }
    ];
}
]);