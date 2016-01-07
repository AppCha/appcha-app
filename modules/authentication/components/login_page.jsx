
Auth_LoginPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {
      currentUser: Meteor.user()
    }
    return data
  },
  getInitialState: function () {
    return {
      email: '',
      password: '',
      loggedIn: false,
      loginError: false,
      loginErrorValue: null
    }
  },
  passwordChanged(e) {
    this.setState({password: e.target.value})
  },
  emailChanged(e) {
    this.setState({email: e.target.value})
  },
  logout() {
    Meteor.logout()
  },
  login(e) {
    e.preventDefault()
    Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      if (err) {
        this.setState({loginError: true, loginErrorValue: err})
      } else {
        this.setState({loginError: false, loginErrorValue: err})
        RouteHelpers.goHome();
      }
    })
  },
  render() {
    return (
      <div className="login-form">
        <div className="cards">
          <div className="card">
            <div className="card-image">
              <span>AppCha!</span>
            </div>
            <div className="card-header">
              Login
            </div>
            <div className="card-copy">
              {(() => {
                if (this.state.loginError) {
                  return <ErrorMessage reason={this.state.loginErrorValue.reason}/>
                  }
                })()}
              <form onSubmit={this.login}>
                <input type="email" placeholder="Your email address" value={this.state.email}
                       onChange={this.emailChanged}/>
                <input type="password" placeholder="Password" onChange={this.passwordChanged}/>
                <input type="submit" value="Login"/>

              </form>
            </div>
            <div className="card-footer">
              Don't have an account? <a href={FlowHelpers.pathFor('auth.signup')}>Create one here</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});