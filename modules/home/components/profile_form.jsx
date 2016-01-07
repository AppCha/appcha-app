ProfileForm = React.createClass({
  getInitialState(){
    return {
      firstName: this.props.currentUser.profile.firstName,
      lastName: this.props.currentUser.profile.lastName
    }
  },
  render(){
    return (
      <form onSubmit={this.updateProfile}>
        <input type="text" onChange={this.firstNameChanged} placeholder="First Name" value={this.state.firstName}/>
        <input type="text" onChange={this.lastNameChanged} placeholder="Last Name" value={this.state.lastName}/>
        <input type="submit" value="Save"/>
      </form>
    )
  },
  componentWillReceiveProps(newProps) {
    this.setState({
      firstName: newProps.currentUser.profile.firstName,
      lastName: newProps.currentUser.profile.lastName
    })
  },
  firstNameChanged(e) {
    this.setState({firstName: e.target.value})
  },
  lastNameChanged(e) {
    this.setState({lastName: e.target.value})
  },
  shouldComponentUpdate(nextProps, nextState) {
    // return a boolean value
    // Here you can compere current state/props (hanging off this) with the params provided.
    return true;
  },
  updateProfile(e) {
    e.preventDefault()
    Meteor.call("updateProfile", {firstName: this.state.firstName, lastName: this.state.lastName})
  }
});