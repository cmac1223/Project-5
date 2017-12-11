EventsController.$inject = ["eventsService"];

function EventsController(eventsService) {
  const vm = this;

  

  activate();

  function activate() {
    eventsService.getEvents().then(response => {
      vm.events = response;
      // console.log(response);
    });
  }
}

export default EventsController;