AppchaComponentMixin = {
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {
      currentUser: Meteor.user()
    }
    if (this.getMeteorDataMixedIn){

      data = this.getMeteorDataMixedIn(data)
    }
    return data
  },
  logout() {
    Meteor.logout();
  }
}