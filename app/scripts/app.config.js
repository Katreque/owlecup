(function(){
  'use strict'

  angular.module('owlecup')
    .config(['$routeProvider', function($routeProvider){

      $routeProvider
        .when('/home', {
          controller: 'controllerHome',
          controllerAs: 'controlhome',
          templateUrl: './app/index.html'
        })

        .otherwise({redirectTo: '/home'});
    }])
}())
