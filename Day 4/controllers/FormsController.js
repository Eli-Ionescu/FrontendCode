/**
 * Created by Eli Ionescu on 6/28/2016.
 */
hrApp.controller('FormsController', ['$scope', function($scope){
    $scope.newUser;
    $scope.submit = function () {
        if($scope.myForm.input.$valid != true)
            alert("Invalid form");

        $scope.userType = "";
    }
}]);
