/**
 * Created by Eli Ionescu on 6/28/2016.
 */
hrApp.controller('UserController', ['$scope', function($scope) {
    $scope.back = function () {
        $location.url('/main');
    };

    $scope.reset = function () {
        $scope.firstName = "";
        $scope.lastName="";
        $scope.id="";
        $scope.age="";
    };

    $scope.save = function () {
        alert("Data Base haws been saved!")
    };

    $scope.show = function () {
        $scope.show = ! $scope.show;
    };


}]);