var ProfileShow = React.createClass({

  componentWillReceiveProps: function(newProps) {
    this.forceUpdate();
  },

  render: function() {
    if (this.props.user) {
      return (
        <div>
          <div className="profile-left group">
            <ProfileInfo user={this.props.user}/>
            <ProfileFriends user={this.props.user}/>
          </div>

          <div className="profile-right group">
            <ProfileWall currentUser={this.props.currentUser} profile={this.props.user.profile}/>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

});
