Meteor.methods({
  registerEmail(email) {
    if (Meteor.users.find({username: email.toLowerCase()}).fetch().length > 0){
      throw new Meteor.Error(500, "An account already exists with this email address.");
    }

    let newAccount = PendingAccounts.insert({username: email.toLowerCase(), token: '2030'});

    return newAccount;
  },
  submitToken(token, _id) {
    let pa = PendingAccounts.findOne({_id: _id, token: token})
    if (!pa){
      throw new Meteor.Error(500, "Registration failed please start over.")
    }

    pa.legit = true
    PendingAccounts.update(pa._id, pa)

    return true;
  },
  submitPassword(password, _id) {
    let pa = PendingAccounts.findOne({_id: _id, legit: true})
    if (!pa){
      throw new Meteor.Error(500, "Registration failed please start over.")
    }

    let user = Accounts.createUser({
      username: pa.username,
      password: password
    })

    Accounts.addEmail(user, pa.username, true)

    return pa.username;
  }
})