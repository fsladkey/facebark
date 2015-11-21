var FriendRequest = React.createClass({

  addFriend: function () {
    FriendRequestApiUtil.acceptRequest(this.props.friendRequest.id);
  },

  deleteRequest: function () {
    FriendRequestApiUtil.rejectRequest(this.props.friendRequest.id);
  },

  render: function () {
    var friend = (
      <ReactRouter.Link onClick={this.props.toggleDetail} to={this.props.friendRequest.profile_url}>
        {this.props.friendRequest.potential_friend}
      </ReactRouter.Link>
    );
    return (
      <li className="group">
        <p >{friend}</p>
        <button onClick={this.addFriend}>Accept</button>
        <button onClick={this.deleteRequest}>Delete</button>
      </li>
    );
  }

});
