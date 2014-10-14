window.app = angular.module('meteor-angular-sample', ['angular-meteor', 'ui.router']);

app.config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/parties");
}])

Meteor.startup(function(){
  angular.bootstrap(document, ['meteor-angular-sample'])
});
