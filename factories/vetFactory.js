(function () {
    var modulo = angular.module('petclinicApp');
    modulo.factory('vetFactory', vetFactory);

    function vetFactory($http) {
            
        var interfaz = {
            getVets: function () {
                return $http.get("http://localhost:8080/vets");
            }
        }
        return interfaz;
    }
}());