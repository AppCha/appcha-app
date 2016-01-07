Auth_EnsureLoggedIn = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  componentDidMount() {
    if (!this.data.currentUser) {
      RouteHelpers.goLogin()
    }
  },
  componentDidUpdate() {
    if (!this.data.currentUser) {
      RouteHelpers.goLogin()
    }
  },
  render() {
    return (
      (() => {
        if (this.data.currentUser) {
          return (<div>{this.props.children}</div>)
        } else {
          return false;
        }
      })()

    )
  }
});