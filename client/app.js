const angular = require('angular');
require('angular-cookie');
require('ng-token-auth');
require("angular-ui-router");

angular
  .module('ArtistApp', ['ui.router', 'ng-token-auth', 'ipCookie'])
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