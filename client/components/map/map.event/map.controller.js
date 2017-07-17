MapController.$inject = ["NgMap", "$http"]

function MapController(NgMap, $http){
  const vm = this;
  vm.marker = {};
  vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  // activate();
  vm.activate = activate;

  // setTimeout(activate(), 3000);
  function activate() {
    console.log(vm.event.location);
    console.log(encodeURI(vm.event.location));

    $http({
      url: vm.googleMapsUrl,
      method: 'GET',
      params: {
        address: vm.event.location,
        key: 'AIzaSyCVWLCtzwZC4B0ttqZCIOS70g0JgXvYYSc'
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "*"
      }
    })
      .then(function(response) {
        console.log(response);
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        vm.marker = {
          latitude: lat,
          longitude: lng,
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        };
        console.log(vm.marker);
    });
  }
  // NgMap.getMap().then(function(map) {
  //   debugger
  //   console.log(map.getCenter());
  //   console.log('markers', map.markers);
  //   console.log('shapes', map.shapes);
  // });
}



export default MapController;