Auth_SignUpNewPasswordPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {
      currentUser: Meteor.user()
    }
    return data
  },
  getInitialState: function () {
    return {
      password: '',
      passwordError: false,
      passwordErrorValue: null
    }
  },
  passwordChanged(e) {
    this.setState({password: e.target.value})
  },
  complete(e) {
    e.preventDefault()
    Meteor.call("submitPassword", this.state.password, FlowRouter.current().params.id, (err, username) => {
      if (err){
        this.setState({passwordError:true, passwordErrorValue:err})
      }else{
        Meteor.loginWithPassword(username, this.state.password, (err)=> {
          if (err){
            this.setState({passwordError:true, passwordErrorValue:err})
          }
          RouteHelpers.goHome();
        })

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
              <FlashMessage message="Almost done, just choose a password" flashType="alert" />
              {(() => {
                if (this.state.passwordError) {
                  return <ErrorMessage reason={this.state.passwordErrorValue.reason}/>
                  }
                })()}
              <form onSubmit={this.complete}>
                <input type="password" placeholder="Password" value={this.state.password}
                       onChange={this.passwordChanged}/>

                <input type="submit" value="Complete"/>

              </form>
            </div>
            <div className="card-footer">
              Not happy? <a href={FlowHelpers.pathFor('auth.signup')}>Click here to start again</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})