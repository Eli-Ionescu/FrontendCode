/**
 * Created by Eli Ionescu on 6/29/2016.
 */
hrApp.service('DepartmentsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAll: function(){
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert("Departments data base not working!");

                    });
            }
        }
    }]
);