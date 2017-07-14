
import MapController from "./map.controller";
import mapTemplate from "./map.html";

const mapComponent = {
  controller: MapController,
  template: mapTemplate,
  bindings: {
    event: '<'
  }
}

angular
  .module('ArtistApp')
  .component('eventMap', mapComponent);