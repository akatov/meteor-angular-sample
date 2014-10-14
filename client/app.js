window.app = angular.module('meteor-angular-sapmle', ['angular-meteor']);

app.controller('PartiesListCtrl', ['$scope', '$collection', function($scope, $collection){
  $collection(Parties).bind($scope, 'parties', true, true);
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

