'use strict';

angular.module('wfhApp', ['ui.router','ngResource'])

	.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'MyProfileController'
                    },
                    'sidebar': {
                        templateUrl : 'views/sidebar.html',
                        controller  : 'MyProfileController'
                    },
                    'content': {
                        //template : '<h1>To be Completed</h1>',
                        templateUrl : 'views/home.html', 
                        controller  : 'DashboardController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })

            // route for the myprofile page
            .state('app.myprofile', {
                url:'myprofile',
                views: {
                    'content@': {
                        //template: '<h1>To be Completed</h1>'
                        templateUrl : 'views/myprofile.html',
                        controller  : 'MyProfileController'
                   }
                }
            })

            // route for the applywfh page
            .state('app.applywfh', {
                url:'applywfh',
                views: {
                    'content@': {
                        templateUrl : 'views/applywfh.html',
                        controller  : 'ApplyWFHController'
                     }
                }
            })

            // route for the team page
            .state('app.team', {
                url: 'team',
                views: {
                    'content@': {
                        templateUrl : 'views/team.html',
                        controller  : 'TeamController'
                    }
                }
            })

            // route for the memberprofile page
            .state('app.memberprofile', {
                url: 'memberprofile/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/memberprofile.html',
                        controller  : 'MemberProfileController'
                   }
                }
            });
            
            $urlRouterProvider.otherwise('/');
    }])
        
;
