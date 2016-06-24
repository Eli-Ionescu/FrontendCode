/**
 * Created by Eli Ionescu on 6/24/2016.
 */
app.controller('DescriptionController',function ($rootScope, $scope) {
    $scope.title = 'Tow Way Binding Demo';
    $scope.childtemple='templates/childscope.html';
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    }
    $scope.toggleDescriptionShow = function(val){
        if($scope.descriptionShow == true){
            $scope.descriptionShow = false;
        }else{
            $scope.descriptionShow = true;
        }
    }
})