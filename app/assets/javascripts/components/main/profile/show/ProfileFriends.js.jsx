var ProfileFriends = React.createClass({

  render: function () {
    return (
      <div className="profile-friends group">
        {
          this.props.user.friends.slice(0, 9).map(function (friend) {
            return <FriendDetail key={friend.id} friend={friend}/>;
          }, this)
        }
      </div>
    );
  }

});
