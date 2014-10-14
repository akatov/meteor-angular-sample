app
  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('partiesShow', {
        url: '/parties/:partyId',
        template: UiRouter.template('PartiesShow'),
        controller: 'PartiesShow'
      });
  }])
  .controller("PartiesShow", ['$scope', '$stateParams', '$collection', function($scope, $stateParams, $collection){
    $collection(Parties).bindOne($scope, 'party', $stateParams.partyId, true, true);
  }]);;
