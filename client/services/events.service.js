eventsService.$inject = ["$http"];

function eventsService($http){
  const service = this;

  service.getEvents = function () {
    return $http.get("/events").then(response => response.data);
  };

  service.getEvent = function (id) {
    return $http.get(`/events/${id}`).then(response => response.data);
  }
  return service;
}
angular.module("ArtistApp").service("eventsService", eventsService);