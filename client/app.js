const angular = require('angular');
require('angular-cookie');
require('ng-token-auth');
require("angular-ui-router");
require("ngmap")

angular
  .module('ArtistApp', ['ui.router', 'ng-token-auth', 'ipCookie','ngMap'])
  .config(router, auth, sce);
  
auth.$inject = ["$authProvider"];

function auth ($authProvider) {
 $authProvider.configure({
   apiUrl: '/api'
  });
}

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider){
  console.log("In the router!")
  $stateProvider
  .state("home", {
    url: "/",
    template: "<artist-users></artist-users>"
  })
  .state("events", {
    url: "/events",
    template:"<artist-events></artist-events>"
  })
  .state("event", {
    url: "/events/:id",
    template:"<artist-event></artist-event>"
  })
  .state("newEvent", {
    url: "/event/new",
    template: "<artist-new-event></artist-new-event>"
  })
  .state("user", {
    url: "/user/:id",
    template: "<artist-user></artist-user>",
  })
  .state("newUser", {
    url: "/user/new",
    template: "<artist-new-user></artist-new-user>"
  })
  .state("artwork", {
    url: "/user/:id/gallery",
    template:"<gallery-artworks></gallery-artworks>"
  })

  $urlRouterProvider.otherwise("/");
}

sce.$inject = ["$sceProvider"]
function sce($sceProvider) {
    $sceProvider.enabled(false);
 }