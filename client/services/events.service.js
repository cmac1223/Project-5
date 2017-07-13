eventsService.$inject = ["$http"];

function eventsService($http) {
  const service = this;

  service.getEvents = function () {
    return $http.get("/events").then(response => response.data);
  };

  service.getEvent = function (id) {
    return $http.get(`/events/${id}`).then(response => response.data);
  }

  service.saveEvent = function (newEvent, users){
    return $http.post("/events", {event: newEvent, users: users}).then(response => {
      return response.data;
      console.log(response.data)
    })
  }
  return service;
}

angular.module("ArtistApp").service("eventsService", eventsService);