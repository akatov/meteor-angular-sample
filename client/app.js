window.app = angular.module('meteor-angular-sapmle', ['angular-meteor']);

app.controller('PartiesListCtrl', ['$scope', function($scope){
  $scope.parties = [
    {'name': 'Party 0',
     'description': 'description 0'},
    {'name': 'Party 1',
     'description': 'description 1'},
    {'name': 'Party 2',
     'description': 'description 2'},
  ]
}])

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

