Meteor.methods({
  "updateProfile": (data)=> {
    //let user = Meteor.user
    //if (!user.profile) {
    //  user.profile = data
    //} else {
    //  user.profile.firstName = data.firstName
    //  user.profile.lastName = data.lastName
    //}

    Meteor.users.update(Meteor.userId(), {$set: {profile: data}});
  }
});