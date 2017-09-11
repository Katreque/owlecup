(function(){
  'use strict'

  angular.module('owlecup')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider

        .when('/', {
          controller: 'homeController',
          controllerAs: 'homeCtrl',
          templateUrl: './app/views/home.html'
        })

        .when('/tabelas', {
          templateUrl: './app/views/tabelas.html'
        })

        .when('/participar', {
          templateUrl: './app/views/participar.html'
        })

        .when('/regras', {
          controller: 'regrasController',
          controllerAs: 'regrasCtrl',
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
