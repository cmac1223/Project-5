artworksService.$inject = ["$http"];

function artworksService($http){
  const service = this;

  service.getArtworks = function (id) {
    return $http.get("/users/" + id).then(response => response.data);
  };
}

angular.module("ArtistApp").service("artworksService", artworksService);