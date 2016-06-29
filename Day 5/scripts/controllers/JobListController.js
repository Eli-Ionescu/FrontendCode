hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','JobsService',
    function ($scope, $http, $location, CommonResourcesFactoryBackup, JobsService) {

        $scope.jobs = [];

        JobsService.findAll()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs: " + err);
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobView/' + jobId);
        };

        $scope.editJob = function(jobId) {
            $location.url('/jobEdit/' + jobId);
        };

        $scope.delete = function(job) {
            $http({url: CommonResourcesFactoryBackup.deleteEmployeeUrl, method: 'DELETE', data: job})
                .success(function (data, status, headers, config) {
                    alert("Job was deleted!")
                });
        };
    }]);