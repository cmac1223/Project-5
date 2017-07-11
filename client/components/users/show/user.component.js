import UserController from "./user.controller";
import userTemplate from "./user.html";

const userComponent = {
  controller: UserController,
  template: userTemplate
};

angular.module('ArtistApp').component("artistUser", userComponent);