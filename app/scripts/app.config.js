(function(){
  'use strict'

  angular.module('owlecup')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider

        .when('/', {
          templateUrl: './app/views/home.html'
        })

        .when('/participar', {
          templateUrl: './app/views/participar.html'
        })

        .when('/regras', {
          templateUrl: './app/views/regras.html'
        })

        .when('/sobre', {
          templateUrl: './app/views/sobre.html'
        })

        .otherwise({redirectTo: '/'});
    }])

    .config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }])
}())
