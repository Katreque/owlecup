(function(){
  'use strict';

  angular.module('owlecup')
    .controller('homeController', [
      '$scope',
      'ativaAnimacaoScrollService',
      '$location',
      function($scope, ativaAnimacao, $location){
        $(window).scroll(function(){
          ativaAnimacao.verificaAnimacao('.homeAniF1');
          ativaAnimacao.verificaAnimacao('.homeAniF2');
        })

        $scope.$on('$destroy', function() {
          $(window).off('scroll');
        });

        this.regras = function(){
          $location.path('/regras');
        }

        this.participar = function(){
          $location.path('/participar');
        }
    }])
}())
