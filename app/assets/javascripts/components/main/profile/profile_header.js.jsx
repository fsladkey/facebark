var ProfileHeader = React.createClass({

  render: function() {
    if (this.props.user) {
      return (
        <div className="profile-header">
          <h2
            className="profile-header-name"
            >{this.props.user.firstname + " " + this.props.user.lastname}
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
