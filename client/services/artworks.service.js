artworksService.$inject = ["$http"];

function artworksService($http){
  const service = this;


  service.getArtworks = function (id) {
    return $http.get("/users/" + id + "/artworks").then(response => response.data);
  };
  return service;
}

angular.module("ArtistApp").service("artworksService", artworksService);