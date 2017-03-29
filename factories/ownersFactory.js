(function () {
    var modulo = angular.module('petclinicApp');
    modulo.factory('ownersFactory', ownersFactory);

    function ownersFactory($http) {
            
        var interfaz = {
            deleteOwners: function (own) {
                return $http.delete("http://localhost:8080/owner/"+own.id);
            },
            getOwners: function () {
                return $http.get("http://localhost:8080/owner/list");
            },
            createOwner: function () {
                var nuevo = {
                    'firstName': 'Iván',
                    'lastName': 'Alfonso Lara',
                    'address': 'C/ Everis',
                    'city': 'Sevilla',
                    'telephone': '999999999',
                    'pets': null
                }
                return $http.post("http://localhost:8080/owner/", nuevo);
            }
        }
        return interfaz;
    }
}());
