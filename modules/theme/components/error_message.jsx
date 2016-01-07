ErrorMessage = React.createClass({
    render(){
        return (
            <div className="flash-error">
                <span>{this.props.reason}</span>
            </div>
        )

    }
})