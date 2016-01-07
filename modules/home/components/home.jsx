Home = React.createClass({
  mixins: [AppchaComponentMixin],
  getMeteorDataMixedIn(data) {
    return data
  },
  render() {
    return (
      <div>
        <h1>Hello {this.data.currentUser.profile.firstName}</h1>
        <ProfileForm currentUser={this.data.currentUser}  />
        <a href="#" onClick={this.logout}>Logout</a>

      </div>
    )
  }
});

