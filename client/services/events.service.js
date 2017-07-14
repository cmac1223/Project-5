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
    return $http.post("/events", {event: newEvent}).then(response => {
      console.log(response.data);
      return $http.post("/uevents", {users: users, event_id: response.data.id})
        .then(res => {
          console.log(res);
        });
    });
  }
  // return service;
   service.deleteEvent = function (deleteEvent) {
        return $http.delete('/events/' + deleteEvent).then(response => {
          return response.data;
    });
  }
}

angular.module("ArtistApp").service("eventsService", eventsService);