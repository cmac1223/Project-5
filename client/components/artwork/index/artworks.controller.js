ArtworksController.$inject = ["artworksService", "$stateParams", "$state"];

function ArtworksController(artworksService, $stateParams, $state) {
  const vm = this;
  vm.artworks = [];
  vm.userId = null;
  // vm.routeToUser = routeToUser;

  activate();

  

  function activate() {
    artworksService.getArtworks($stateParams.id).then(response => {
      console.log(response)
      vm.artworks = response;
      console.log(vm.artworks);
    })
    vm.userId = $stateParams.id;
  }
}
export default ArtworksController;