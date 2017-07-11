import newUserController from './new.controller';
import newUserTemplate from './new.html';

const newUserComponent = {
  controller: newUserController,
  template: newUserTemplate
}

angular.module('ArtistApp').component('artistNewUser', newUserComponent);