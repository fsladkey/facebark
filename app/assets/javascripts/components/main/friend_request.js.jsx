var FriendRequest = React.createClass({

  addFriend: function (e) {
    e.stopPropagation();
    FriendRequestApiUtil.acceptRequest(this.props.friendRequest.id);
    this.props.hideDetail();
  },

  deleteRequest: function (e) {
    e.stopPropagation();
    FriendRequestApiUtil.rejectRequest(this.props.friendRequest.id);
    this.props.hideDetail();
  },

  render: function () {
    var friend = (
      <ReactRouter.Link onClick={this.props.hideDetail} to={this.props.friendRequest.profile_url}>
        { this.props.friendRequest.potential_friend }
      </ReactRouter.Link>
    );
    return (
      <li className="group">
        <p >{friend}</p>
        <button className="add-friend" onClick={ this.addFriend }>
          Accept
        </button>
        <button className="deny-friend" onClick={ this.deleteRequest }>
          Delete
        </button>
      </li>
    );
  }

});
