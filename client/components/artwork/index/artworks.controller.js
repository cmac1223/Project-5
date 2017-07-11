ArtworksController.$inject = ["artworksService", "$stateParams"];

function ArtworksController(artworksService, $stateParams) {
  const vm = this;
  vm.artworks = [];

  activate();

  function activate() {
    artworksService.getArtworks($stateParams.id).then(res => {
      vm.artworks = res.artworks;
      console.log(vm);
    })
  }
}
export default ArtworksController;