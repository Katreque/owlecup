(function(){
  'use strict'

  angular.module('owlecup')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider

        .when('/', {
          templateUrl: './app/views/home.html'
        })

        .otherwise({redirectTo: '/'});
    }])

    .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }])
}())
