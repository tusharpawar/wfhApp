'use strict';

angular.module('wfhApp')

  //myprofileController
  .controller('MyProfileController',['$stateParams','profileFactory',function($stateParams,profileFactory){
    var vm = this;
    vm.showProfile = false;
    vm.message="Loading ...";
    vm.teamMember = profileFactory.getTeamMembers().get({id:0})
    .$promise.then(
        function(response){
          vm.teamMember = response;
          vm.showProfile =true;
        },
        function(response) {
            vm.message = "Error: "+response.status + " " + response.statusText;
        }
      );
  }])

  //dashboardController
  .controller('DashboardController',['$stateParams','dashboardFactory',function($stateParams,dashboardFactory){
    var vm = this;
    vm.showReport = false;
    vm.message="Loading ...";
    vm.report = dashboardFactory.getReport();
    
  }])

  //TeamController
  .controller('TeamController', ['profileFactory',function(profileFactory) {
    var vm = this;
    vm.showTeam = false;
    vm.team = profileFactory.getTeamMembers().query(
        function(response){
          vm.team = response;
          vm.showTeam = true;
        },
        function(response){
          vm.message = "Error: "+response.status +" "+ response.statusText;
        }
      );
  }])

  //MemberProfileController
  .controller('MemberProfileController',['$stateParams','profileFactory',function($stateParams,profileFactory){
    var vm = this;
    vm.showProfile = false;
    vm.message="Loading ...";
    vm.teamMember = profileFactory.getTeamMembers().get({id:parseInt($stateParams.id,10)})
    .$promise.then(
        function(response){
          vm.teamMember = response;
          vm.showProfile =true;
        },
        function(response) {
            vm.message = "Error: "+response.status + " " + response.statusText;
        }
      );
  }])

  //ApplyWFHController
  .controller('ApplyWFHController', ['$stateParams','profileFactory',function($stateParams,profileFactory) {
      var vm = this;
      vm.wfh = { id:"", onDate:"", updated:"", subject:"<WFH:Today>", tasks:"", comments:"" };
      vm.teamMember = profileFactory.getTeamMembers().get({id:0});
      /*vm.successAlert = function(){
          var message = '<strong> Well done!</strong>  You successfully added work from home';
          var id = Flash.create('success', message, 0, {class: 'custom-class', id: 'custom-id'}, true);
          console.log("flash message shown");
      }*/
      vm.submitWfh = function () {
          vm.wfh.onDate = new Date();
          
          vm.teamMember.wfh.push(vm.wfh);

          profileFactory.getTeamMembers().update({id:vm.teamMember.id},vm.teamMember);
          //this.successAlert();
          
          vm.wfhForm.$setPristine();
                
          vm.wfh = { id:"", onDate:"", updated:"", subject:"<WFH:Today>", tasks:"", comments:"" };
      };
  }])

;