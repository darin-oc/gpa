'use strict';

angular.module('gpaApp')
  .directive('chosen', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var list = attrs.chosen;

        scope.$watch(list, function(){
          // console.log(element);
          element.trigger("chosen:updated");
        });

        element.chosen();
      }
    };
  });
