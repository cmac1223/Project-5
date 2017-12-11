EventController.$inject = ["$stateParams", "eventsService", "$state"];

function EventController($stateParams, eventsService, $state){
  const vm = this;

  activate();

  function activate(){
    // console.log('in the controller');
    eventsService.getEvent($stateParams.id).then(response =>{
      vm.event = response.event;
    });
  }

  vm.deleteEvent = function (eventIdToDeleteFromDatabase) {
    console.log(eventIdToDeleteFromDatabase);
    eventsService.deleteEvent(eventIdToDeleteFromDatabase)
      .then(function success(response) {
        $state.go("events");
      })
      .catch(function failure(response) {
        console.log('Error deleting User with ID of ' + userIdToDeleteFromDatabase);
      });
  }

  // vm.getLatLong(location){
  //   $http.get('https://maps.googleapis.com/maps/api/geocode/json', {
  //         params: {
  //           address: location,
  //           key: 'AIzaSyCVWLCtzwZC4B0ttqZCIOS70g0JgXvYYSc'
  //         }
  //       })
  //       .then(function(response){
  //         // Log full response
  //         console.log(response)
  //       }
}

export default EventController;