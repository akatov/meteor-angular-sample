Meteor.startup(function(){
  if (Parties.find().count() === 0) {
    var parties = [
      {'name': 'Party 0',
       'description': 'description 0'},
      {'name': 'Party 1',
       'description': 'description 1'},
      {'name': 'Party 2',
       'description': 'description 2'}]
    _.forEach(parties, function(party){
      Parties.insert(party)
    })
  }
})
