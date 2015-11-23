var ProfileHeader = React.createClass({

  friend: function () {
    
  },

  unfriend: function () {

  },

  render: function() {
    var button;
    if (user.is_friend) {
      button = <button onClick={this.unfriend} className="friend-button">Unfriend</button>;
    } else {
      button = <button onClick={this.friend} className="friend-button">Friend</button>;
    }

    if (this.props.user) {
      return (
        <div className="profile-header">
          <ProfileCoverPhoto user={this.props.user}/>
          <ProfilePhoto user={this.props.user}/>
          {button}
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
