import EventController from "./event.controller";
import eventTemplate from "./event.html";

const userComponent = {
  controller: UserController,
  template: userTemplate
};

angular.module('ArtistApp').component("artistUser", userComponent);