var NavBarLinks = React.createClass({

  componentWillRecieveProps: function() {
    this.forceUpdate();
  },

  render: function () {
    if (this.props.currentUser) {
      return (
        <div>
          {this.props.currentUser.firstname}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

});
