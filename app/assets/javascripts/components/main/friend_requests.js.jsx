var FriendRequestDropdown = React.createClass({

  render: function () {
    var friendRequests = this.props.friendRequests;
    return (
      <div className="friend-requests-dropdown">
        <h4 className="request-header" onClick={ this.stopProp }>Friend Requests</h4>
        <ul onClick={ this.stopProp }>
          {
            friendRequests.map(function (friendRequest) {
              return (
                <FriendRequest
                key={ friendRequest.id }
                hideDetail={ this.hideDetail }
                friendRequest={ friendRequest }
                />
              );
            }.bind(this))
          }
        </ul>
      </div>
    );
  }

});

var FriendRequests = React.createClass({

  openDetail: function (e) {
    DropdownActions.receiveDropdown("friendRequests");
  },

  render: function () {
    var currentUser = SessionStore.currentUser();

    return (
      <div className="nav-link" onClick={ stopProp }>
        <button onClick={ this.openDetail } className="friend-requests-button">
          <Badge num={ currentUser.numFriendRequests } />
        </button>
        <Dropdown type="friendRequests">
          <FriendRequestDropdown friendRequests={ currentUser.friend_requests }/>
        </Dropdown>
      </div>
    );
  }

});
