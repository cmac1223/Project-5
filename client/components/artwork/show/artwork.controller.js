// ArtworkController.$inject = ["$stateParams", "artworksService", "$state", "$sce"];

// function ArtworkController($stateParams, artworksService, $state, $sce){
//   const vm = this;
//   vm.artworks = [];
//   vm.userId = null;
//   vm.trustedUrl = trustedUrl;

//   activate();

//   function activate(){
//     artworksService.getArtwork($stateParams.id)
//     .then(response => {
//       console.log(response)
//       vm.artworks = response;
//       console.log(vm.artworks);
//     })
//     .catch(response => {
//       vm.error = response.error;
//     })
//     vm.userId = $stateParams.id;
//   }

//   function trustedUrl(url){
//     return $sce.trustAsResourceUrl(url);
//   }
// }
// export default ArtworkController;