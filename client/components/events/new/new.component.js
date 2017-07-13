import newEventController from './new.controller';
import newEventTemplate from './new.html';

const newEventComponent = {
  controller: newEventController,
  template: newEventTemplate
}

angular.module('ArtistApp').component('artistNewEvent', newEventComponent);