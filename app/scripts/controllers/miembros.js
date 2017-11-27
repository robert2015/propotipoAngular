'use strict';


angular.module('prototipoApp')
  .controller('MiembrosCtrl', function ($scope,$http) {
  
    $http.get('http://localhost:9000/miembros.json').then(function(response){
        $scope.miembros = response.data;
    }, function(){alert("Error en el http.get request");
                 });
    
    $scope.gridOptions = {
        data: 'miembros'
    }
});
              