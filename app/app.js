var app = angular.module("MyApp", ['ngGrid', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
           controller: 'gridCtrl',
           templateUrl: './app/Cotizacion/CotNuevo.html'
        });
});

app.controller('gridCtrl', function($scope) {
    $scope.myData = [{ITEM: 1, Cantidad: 50, Descripcion: "aa", Marca: "Dell", Modelo: "a1", Proveedor: "Isaac"},
        {ITEM: 2, Cantidad: 43, Descripcion: "bb", Marca: "Vaio", Modelo: "b2", Proveedor: "Alan"},
        {ITEM: 3, Cantidad: 27, Descripcion: "cc", Marca: "Toshiba", Modelo: "c3", Proveedor: "Alfredo"},
        {ITEM: 4, Cantidad: 29, Descripcion: "dd", Marca: "Asus", Modelo: "d4", Proveedor: "Rodrigo"},
        {ITEM: 5, Cantidad: 34, Descripcion: "ee", Marca: "Lenovo", Modelo: "e5", Proveedor: "Carlos"}];
    $scope.gridOptions = { data: 'myData' };
});

