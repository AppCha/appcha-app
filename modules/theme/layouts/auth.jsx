AuthLayout = React.createClass({
  componentWillMount() {
    if (Meteor.isClient) {
      $('body').addClass("auth-layout")
    }
  },
  render() {
    return this.props.content
  }
});