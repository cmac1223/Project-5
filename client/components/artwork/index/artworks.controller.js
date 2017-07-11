ArtworksController.$inject = ["artworksService", "$stateParams"];

function ArtworksController(artworksService, $stateParams) {
  const vm = this;
  vm.artworks = [];
  vm.userId = null;
  // vm.routeToUser = routeToUser;

  activate();

  // function routeToUser() {
  //   $state.go('user', {id:yourObj});
  // }

  function activate() {
    artworksService.getArtworks($stateParams.id).then(res => {
      vm.artworks = res.artworks;
      console.log(vm);
    })
    vm.userId = $stateParams.id;
  }
}
export default ArtworksController;