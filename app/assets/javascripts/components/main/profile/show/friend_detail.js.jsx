var FriendDetail = React.createClass({

  render: function () {
    var friend = this.props.friend;
    return (
      <div className="profile-friend-detail">
        <ReactRouter.Link to={"/" + friend.username}>
          <img src={friend.profile_image_url}/>
          <p>{friend.name}</p>
        </ReactRouter.Link>
      </div>
    );
  }

});
