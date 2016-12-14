'use strict';

angular.module('wfhApp')

    .constant("baseURL","http://localhost:3000/")

    //service for all teamMembers
    .service('profileFactory', ['$resource','baseURL', function($resource,baseURL) {
        
        this.getTeamMembers = function(){
           return $resource(baseURL+"teamMembers/:id",null,  {'update':{method:'PUT' }});
        };

    }])

    //return dashboard Reports
    .service('dashboardFactory', ['$resource','baseURL', function($resource,baseURL) {
        var report = 
            {
              todayWfh:'2', 
              thisMonth: '25',
              teamMembers:'15',
              monthlyAvg:'1',
            };
        
        this.getReport = function(){
          return report;
        };
    }])
    
;