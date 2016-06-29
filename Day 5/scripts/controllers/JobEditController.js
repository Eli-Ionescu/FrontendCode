hrApp.controller('JobEditController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    'JobsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, JobsService) {


        JobsService.findAll()
            .then(function (response) {
                $scope.jobs = response.data;
            }, function(err){
                contole.log("Error at departments: "+err);
            });


        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };


        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                })
                .error(function (err) {
                    alert("Job create error")
                });
        };

    }]);