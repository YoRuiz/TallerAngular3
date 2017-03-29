var modulo = angular.module("petclinicApp",['ui.router']);
modulo.config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: "template/home.html",                    
    }).state('owners', {
        url: "/owners",
        templateUrl: "template/owners.html",
        controller: "OwnersCtrl",
        controllerAs: "vm"
    }).state('veterinarios', {
        url: "/veterinarios",
        templateUrl: "template/veterinarios.html",
        controller: "VetCtrl",
        controllerAs: "vm"
    }).state('insertarOwner', {
        url: "/insertarOwner",
        templateUrl: "template/insertarOwner.html",
        controller: "OwnersCtrl",
        controllerAs: "vm"
    }).state('editarOwner', {
        url: "/editarOwner/:ownerId/edit",
        templateUrl: "template/insertarOwner.html",
        controller: "OwnersCtrl",
        controllerAs: "vm"
    })
});
