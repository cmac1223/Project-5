import EventsController from "./events.controller";
import eventsTemplate from "./events.html";

const eventsComponent = {
  controller: EventsController,
  template: eventsTemplate
};

angular.module("ArtistApp").component("artistEvents", eventsComponent)