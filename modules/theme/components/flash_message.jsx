FlashMessage = React.createClass({
  render(){
    return (
      <div className={`flash-${this.props.flashType}`}>
        <span>{this.props.message}</span>
      </div>
    )

  }
})