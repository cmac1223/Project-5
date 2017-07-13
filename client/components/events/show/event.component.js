import EventController from "./event.controller";
import eventTemplate from "./event.html";

const eventComponent = {
  controller: EventController,
  template: eventTemplate
};

angular.module('ArtistApp').component("artistEvent", eventComponent);