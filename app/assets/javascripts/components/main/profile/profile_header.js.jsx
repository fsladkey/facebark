var ProfileHeader = React.createClass({

  componentWillReceiveProps: function() {
    this.forceUpdate();
  },

  render: function() {
    if (this.props.username) {
      return (
        <div className="profile-header">
          <h2
            className="profile-header-name"
            >{this.props.username}
            </h2>
          <ProfileCoverPhoto/>
          <ProfileHeaderLinks/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }


});
