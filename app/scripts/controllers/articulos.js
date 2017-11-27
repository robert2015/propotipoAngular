'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
  $scope.posts = [
    {
    title: "Alimentos buenos para la salud",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus congue massa ac scelerisque. Aliquam erat volutpat. Morbi a pellentesque tortor. Integer condimentum neque a nisl tristique blandit. Maecenas ac eros tristique, efficitur elit at, rutrum lorem. Cras lacinia bibendum magna, a luctus tellus egestas sed. Phasellus commodo non odio sed dignissim. "
    },
{
    title: "Alimentos menos buenos para la salud",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus congue massa ac scelerisque. Aliquam erat volutpat. Morbi a pellentesque tortor. Integer condimentum neque a nisl tristique blandit. Maecenas ac eros tristique, efficitur elit at, rutrum lorem. Cras lacinia bibendum magna, a luctus tellus egestas sed. Phasellus commodo non odio sed dignissim. "
    },
{
    title: "Limita tu cantidad de hidratos de carbono",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus congue massa ac scelerisque. Aliquam erat volutpat. Morbi a pellentesque tortor. Integer condimentum neque a nisl tristique blandit. Maecenas ac eros tristique, efficitur elit at, rutrum lorem. Cras lacinia bibendum magna, a luctus tellus egestas sed. Phasellus commodo non odio sed dignissim. "
    }
    
  ];
   
  
});

angular.module('prototipoApp').controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  
});
