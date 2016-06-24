/**
 * Created by Eli Ionescu on 6/24/2016.
 */
app.controller("OtherController",function($rootScope,$scope){
    $scope.title = "Titlu Vechi";
    $scope.setTitle = function(){
        $scope.title = "Titlu Nou";
    }
})