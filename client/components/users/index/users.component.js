import UsersController from "./users.controller";
import usersTemplate from "./users.html";

const usersComponent = {
  controller: UsersController,
  template: usersTemplate
};

angular.module("ArtistApp").component("artistUsers",usersComponent)