hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobsService',
    function ($scope, $http, $routeParams, $location, JobsService) {

        // Handle a promise
        JobsService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at job/findOne: " + err);
            });
        

        $scope.back = function () {
            $location.url('/jobList');
        }
    }]);