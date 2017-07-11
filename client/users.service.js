usersService.$inject = ["$http"];

function usersService($http){
  const service = this;

  service.getUsers = function () {
    return $http.get("/users").then(response => response.data);
  };

  service.getUser = function (id) {
    return $http.get(`/users/${id}`).then(response => response.data);
  }
  service.saveUser = function (newUser){
    return $http.post("/users", newUser).then(response => {
      return response.data;
      console.log(response.data)
    })
  }
  return service;
}

angular.module("ArtistApp").service("usersService", usersService);

