'use strict';


angular.module('prototipoApp')
  .controller('MiembrosCtrl', function ($scope,$http, $uibModal) {
  
    $http.get('http://localhost:9000/miembros.json').then(function(response){
        $scope.miembros = response.data;
    }, function(){alert("Error en el http.get request");
                 });
    
    $scope.gridOptions = {
        data: 'miembros',
        enableSorting: true,
        enableRowSelection: true,
        enableFullRowSelection: true,
        multiSelect: true,
        enableRowHeaderSelection: false,
        enableColumnMenus: false,
        enableFiltering: true,
        columnDefs: [
            {field: 'no', displayName:'Nº'},
            {field: 'nombre', displayName:'Nombre'},
            {field: 'fidelidad', displayName:'Fidelidad'},
            {field: 'fechaUnion', displayName:'Fecha Union'},
            {field: 'tipoMiembro', displayName:'Tipo Miembro'}
        ]
    };
    
$scope.showModal = function(){
    $scope.nuevoMiembro={};
    var uibModalInstance = $uibModal.open({
        templateUrl: 'views/add-miembros.html',
        controller: 'addNuevoMiembroCtrl',
        resolve: {
            nuevoMiembro: function(){
                return $scope.nuevoMiembro;
            }
        }
    })
    uibModalInstance.result.then(function(selectItem){
        $scope.miembros.push({
            no: $scope.miembros.length+1,
            nombre: $scope.nuevoMiembro.nombre,
            tipoMiembro: $scope.nuevoMiembro.tipoMiembro,
            fidelidad: $scope.nuevoMiembro.fidelidad,
            fechaUnion: $scope.nuevoMiembro.fechaUnion
        });
    });
    
    };
    
})

.controller('addNuevoMiembroCtrl', function($scope, $uibModalInstance, nuevoMiembro){
   $scope.nuevoMiembro = nuevoMiembro;
    $scope.salvarNuevoMiembro = function(){
    $uibModalInstance.close(nuevoMiembro);
    };
    $scope.cancel = function(){
       $uibModalInstance.dismiss('cancel');
   } 
});
              















