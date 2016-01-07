Auth_SignUpTokenPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let data = {
      currentUser: Meteor.user()
    }
    return data
  },
  getInitialState: function () {
    return {
      token: '',
      tokenError: false,
      tokenErrorValue: null
    }
  },
  tokenChanged(e) {
    this.setState({token: e.target.value})
  },
  complete(e) {
    e.preventDefault()

    Meteor.call("submitToken", this.state.token, FlowRouter.current().params.id, (err) => {
      if (err){
        this.setState({tokenError:true, tokenErrorValue:err})
      }else{
        RouteHelpers.goSignCreatePassword(FlowRouter.current().params.id)
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
              <FlashMessage message="We sent you a secret code, enter it below?" flashType="alert" />
              {(() => {
                if (this.state.tokenError) {
                  return <ErrorMessage reason={this.state.tokenErrorValue.reason}/>
                  }
                })()}
              <form onSubmit={this.complete}>
                <input type="text" placeholder="Secret Code" value={this.state.token}
                       onChange={this.tokenChanged}/>

                <input type="submit" value="Complete"/>

              </form>
            </div>
            <div className="card-footer">
              Didn't get a mail? <a href={FlowHelpers.pathFor('auth.login')}>Click here to Resend</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})