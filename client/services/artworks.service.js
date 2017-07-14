artworksService.$inject = ["$http"];

function artworksService($http){
  const service = this;


  service.getArtworks = function (id) {
    return $http.get("/users/" + id + "/artworks").then(response => response.data);
  };

  // service.getArtwork = function (id) {
  //   return $http.get("/users/" + id + "/artworks/" + id).then(response => response.data);
  // }

  // service.saveArtwork = function (newArtwork){
  //   return $http.post("/users", newArtwork).then(response => {
  //     return response.data;
  //     console.log(response.data)
  //   })
  // }

  //  self.updateArtworkt = function (artworkUpdate) {
  //       return $http.patch('users/', artworkUpdate).then(response =>{
  //         return response.data;
  //         console.log(response.data)
  //       })
  //   }
  // service.deleteArtwork = function (deleteArtwork) {
  //       return $http.delete('credits/' , deleteArtwork).then(response => {
  //         return response.data;
  //   })
  return service;
}

angular.module("ArtistApp").service("artworksService", artworksService);