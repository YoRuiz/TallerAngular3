(function () {
    angular.module('petclinicApp').controller('OwnersCtrl', ownersCtrl);

    function ownersCtrl(ownersFactory) {
        // 'this' hace referencia al contexto del controlador
        //Ponemos this en una variable para poder usarlo dentro de otras funciones.
        var vm = this;
        vm.owners = [];
        ownersFactory.getOwners().then(function(res){
            vm.owners = res.data;
        }, function(res){
            vm.error = res.data + "Error gordo";
        });
        vm.filtro = "";
        vm.deleteOwners = function(own){
            ownersFactory.deleteOwners(own).then(function(res){
            vm.owners.splice(vm.owners.indexOf(own),1);
        }, function(res){
            vm.error = res.data + "Error gordo";
        });
        }
        vm.createOwner = function(){
            ownersFactory.createOwner().then(function(res){
            vm.owners.push(res.data);
        }, function(res){
            vm.error = res.data + "Error gordo";
        });
        }
    }
}());
