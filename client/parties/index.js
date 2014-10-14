app
  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('partiesIndex', {
        url: '/parties',
        template: UiRouter.template('PartiesIndex'),
        controller: 'PartiesIndex'
      });
  }])
  .controller('PartiesIndex', ['$scope', '$collection', function($scope, $collection){
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
