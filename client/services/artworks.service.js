artworksService.$inject = ["$http"];

function artworksService($http){
  const service = this;


  service.getArtworks = function (id) {
    return $http.get("/users/" + id + "/artworks").then(response => response.data);
  };
  return service;

  service.saveArtwork = function (newArtwork){
    return $http.post("/users", newArtwork).then(response => {
      return response.data;
      console.log(response.data)
    })
  }
}

angular.module("ArtistApp").service("artworksService", artworksService);