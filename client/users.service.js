usersService.$inject = ["$http"];

function usersService($http){
  const service = this;

  service.getUsers = function () {
    return $http.get("/users").then(response => response.data);
  };
}

angular.module("ArtistApp").service("usersService", usersService);