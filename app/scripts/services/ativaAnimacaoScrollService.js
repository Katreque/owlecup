(function(){
  'use strict';

  angular.module('owlecup')
    .factory('ativaAnimacaoScrollService', [
    function(){
      class ativaAnimacaoService {
        constructor(){

        }

        elementoNaTela(elem){
          var $elem = $(elem);
              
              var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
              var viewportTop = $(scrollElem).scrollTop();
              var viewportBottom = viewportTop + $(window).height();

              var elemTop = Math.round($elem.offset().top);
              var elemBottom = elemTop + $elem.height();

              return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
        }

        verificaAnimacao(elem){
        var $elem = $(elem);
          if ($elem.hasClass('start'))
            return;

          if (this.elementoNaTela($elem)) {
              $elem.addClass('start');
          }
        }
      }

      return new ativaAnimacaoService();
    }])
}())
