hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    'EmployeeService', 'DepartmentsService','JobsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, EmployeeService, DepartmentsService, JobsService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1
        EmployeeService.findAll()
            .then(function (response) {
                $scope.managers = response.data;
            }, function(err){
                contole.log("Error at employees: "+err);
            });

        DepartmentsService.findAll()
            .then(function (response) {
                $scope.departments = response.data;
            }, function(err){
                contole.log("Error at departments: "+err);
            });

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
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                })
                .error(function (err) {

                    alert("Employee add error")
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;


}]);