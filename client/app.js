window.app = angular.module('meteor-angular-sapmle', ['angular-meteor', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('parties', {
        url: '/parties',
        template: UiRouter.template('partiesList'),
        controller: 'PartiesListCtrl'
      })
      .state('partyDetails', {
        url: '/parties/:partyId',
        template: UiRouter.template('partyDetails'),
        controller: 'PartyDetailsCtrl'
      });

      $urlRouterProvider.otherwise("/parties");
}]);

app.controller('PartiesListCtrl', ['$scope', '$collection', function($scope, $collection){
  $collection(Parties).bind($scope, 'parties', true, true);
  $scope.add = function(party){
    console.log('adding', party);
    $scope.parties.push(party);
  }
  $scope.remove = function(party){
    console.log('removing', party);
    $scope.parties.splice($scope.parties.indexOf(party), 1);
  }
}]);

app.controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$collection', function($scope, $stateParams, $collection){
  $collection(Parties).bindOne($scope, 'party', $stateParams.partyId, true, true);
}]);;

Meteor.startup(function(){
  angular.bootstrap(document, ['meteor-angular-sapmle'])
});

// counter starts at 0
Session.setDefault("counter", 0);

Template.hello.helpers({
  counter: function () {
    return Session.get("counter");
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});
