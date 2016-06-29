/**
 * Created by Eli Ionescu on 6/29/2016.
 */
hrApp.service('JobsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAll: function(){
                return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert("Jobs data base not working!");

                    });
            },
            findById: function(jobId){
                return $http.get(CommonResourcesFactoryBackup.findOneJobUrl + jobId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {

                        alert("Job find by id error")
                    });
            }
        }
    }]
);