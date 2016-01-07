MainLayout = React.createClass({
  componentWillMount() {
    if (Meteor.isClient) {
      let body = $('body');
      if (body.hasClass("auth-layout")) {
        body.removeClass("auth-layout")
      }
    }
  },
  render() {
    return (
      <Auth_EnsureLoggedIn>
        <Header />
        {this.props.content}
        <div>Made with <i className="fa fa-heart"></i> by Hampton.io</div>
      </Auth_EnsureLoggedIn>
    )
  }
});