(function(){
  'use strict';

  angular.module('owlecup')
    .factory('ativaAnimacaoScrollService', [
    function(){
      class ativaAnimacaoService {
        constructor(){

        }

        verificaAnimacao(elem){
          var $elem = $(elem);
          var $window = $(window);

          var window_height = $window.height();
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_height);

          $.each($elem, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
              return $elem.addClass('start');
            }
            return;
          })
        }
      }

      return new ativaAnimacaoService();
    }])
}())
