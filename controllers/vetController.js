(function () {
    angular.module('petclinicApp').controller('VetCtrl', vetCtrl);

    function vetCtrl(vetFactory) {
        // 'this' hace referencia al contexto del controlador
        //Ponemos this en una variable para poder usarlo dentro de otras funciones.
        var vm = this;
        vm.vets = [];
        vetFactory.getVets().then(function(res){
            vm.vets = res.data;
        }, function(res){
            vm.error = res.data + "Error gordo";
        });
    }
}());