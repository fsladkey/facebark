var ProfileHeader = React.createClass({

  friend: function () {
    FriendRequestApiUtil.requestFriendship(this.props.user.id);
  },

  unfriend: function () {
    FriendRequestApiUtil.unfriend(this.props.user.id);
  },

  acceptFriendship: function () {
    request = SessionStore.currentUser().friend_requests.find(function (friendRequest) {
      return friendRequest.user_id === this.props.user.id;
    }, this);
    if (request) {
      FriendRequestApiUtil.acceptRequest(request.id);
    }
  },

  render: function() {
    var user = this.props.user;
    if (user) {
      var button;

      if (user.isFriend) {
        button = <button onClick={this.unfriend} className="friend-button">Unfriend</button>;
      } else if (user.friendshipRequested){
        button = <button className="friend-button">Pending</button>;
      } else if (user.id === SessionStore.currentUser().id) {
      } else if (user.waitingForFriendshipResponse) {
        button = <button onClick={this.acceptFriendship} className="friend-button">Accept Friend Request</button>;
      } else {
        button = <button onClick={this.friend} className="friend-button">Friend</button>;
      }

      return (
        <div className="profile-header group">
          <ProfileCoverPhoto user={user}/>
          <ProfilePhoto user={user}/>
          {button}
          <h2
            className="profile-header-name"
            >{user.firstname + " " + user.lastname}
            </h2>
          <ProfileHeaderLinks user={user}/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }


});
