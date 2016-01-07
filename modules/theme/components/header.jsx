Header = React.createClass({
  mixins: [AppchaComponentMixin],
  getMeteorDataMixedIn(data) {

    let display = ''
    var currentUserProfile = data.currentUser.profile;
    if (currentUserProfile && currentUserProfile.firstName){
      display =  `${currentUserProfile.firstName} ${currentUserProfile.lastName}`
    }else{
      display =  data.currentUser.username
    }
    data.displayName = display
    return data
  },
  render(){
    return (
      <header>Header goes here {this.data.displayName}</header>
    )
  }
});