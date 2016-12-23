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
    var Link = ReactRouter.Link,
        friendRequest = this.props.friendRequest;
    return (
      <li className="group friend-actions">
      <Link onClick={ this.props.hideDetail } to={ friendRequest.profile_url }>
        { friendRequest.potential_friend }
      </Link>
        <form>
          <button type="button" className="deny-friend" onClick={ this.deleteRequest }>
            Delete Request
          </button>
          <button type="button" className="add-friend" onClick={ this.addFriend }>
            Accept
          </button>
        </form>
      </li>
    );
  }

});
