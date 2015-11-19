var ProfileHeader = React.createClass({

  render: function() {
    if (this.props.user) {
      return (
        <div className="profile-header">
          <ProfileCoverPhoto user={this.props.user}/>
          <ProfilePhoto user={this.props.user}/>
          <h2
            className="profile-header-name"
            >{this.props.user.firstname + " " + this.props.user.lastname}
            </h2>
          <ProfileHeaderLinks user={this.props.user}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }


});
