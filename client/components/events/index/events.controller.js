EventsController.$inject = ["eventsService"];

function EventsController(eventsService) {
  const vm = this;

  console.log('<>+++++++++<>')

  activate();

  function activate() {
    console.log('+++++++++<>')
    eventsService.getEvents().then(response => {
      vm.events = response;
      console.log(response);
    });
  }
}

export default EventsController;