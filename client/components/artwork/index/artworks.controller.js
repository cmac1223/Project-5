ArtworksController.$inject = ["artworksService", "$stateParams", "$state", "$sce"];

function ArtworksController(artworksService, $stateParams, $state, $sce) {
  const vm = this;
  vm.artworks = [];
  vm.userId = null;
  vm.trustedUrl = trustedUrl;
  // vm.routeToUser = routeToUser;

  activate();

  

  function activate() {
    artworksService.getArtworks($stateParams.id)
    .then(response => {
      console.log(response)
      vm.artworks = response;
      console.log(vm.artworks);
    })
    .catch(response => {
      vm.error = response.error;
    })
    vm.userId = $stateParams.id;
  }

  function trustedUrl(url){
    return $sce.trustAsResourceUrl(url);
  }
}
export default ArtworksController;