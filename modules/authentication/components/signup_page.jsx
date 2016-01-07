Auth_SignUpPage = React.createClass({
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
      signInError: false,
      signInErrorValue: null
    }
  },
  emailChanged(e) {
    this.setState({email: e.target.value})
  },
  signUp(e) {
    e.preventDefault()

    Meteor.call("registerEmail", this.state.email, (err, id) => {
      if (err){
        this.setState({signInError:true, signInErrorValue:err})
      }else{
        RouteHelpers.goSignUpToken(id)
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
              Create an account
            </div>
            <div className="card-copy">
              {(() => {
                if (this.state.signInError) {
                  return <ErrorMessage reason={this.state.signInErrorValue.reason}/>
                  }
                })()}
              <form onSubmit={this.signUp}>
                <input type="text" placeholder="Your Email Address" value={this.state.email}
                       onChange={this.emailChanged}/>

                <input type="submit" value="Sign Up"/>

              </form>
            </div>
            <div className="card-footer">
              Already have an account? <a href={FlowHelpers.pathFor('auth.login')}>Login here</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})