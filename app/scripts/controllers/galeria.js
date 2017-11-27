'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
   var pictures = $scope.pictures=[];
    
    var baseURL = "http://lorempixel.com/300/180/";
    
    var title = ["Comida Sana", "Salud y trabajo", "Vida en la ciudad",
                 "Mantenerte activo", "Cuida tu aspecto", "Vida Nocturna"];
    var keywords =["food", "business", "city", "sports","fashion", "nightlife"];
    
    var dummyText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus congue massa ac scelerisque. Aliquam erat volutpat. Morbi a pellentesque tortor. Integer condimentum neque a nisl tristique blandit. Maecenas ac eros tristique, efficitur elit at, rutrum lorem. Cras lacinia bibendum magna, a luctus tellus egestas sed. Phasellus commodo non odio sed dignissim.";
    
    $scope.addPics = function(){
        pictures.push({
            url:baseURL+keywords[i],
            title:title[i],
            summary:dummyText
        });
    };
    
    for (var i=0;i<6;i++){
        $scope.addPics(i);
    }
    
$scope.rate = 0;
$scope.max =10;
$scope.isReadyonly = false;
  });
