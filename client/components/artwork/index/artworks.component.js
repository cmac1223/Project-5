import ArtworksController from "./artworks.controller";
import artworksTemplate from "./artworks.html";

const artworksComponent = {
  controller: ArtworksController,
  template: artworksTemplate
};

angular
  .module("ArtistApp")
  .component("galleryArtworks",artworksComponent)