function hideDetail(e) {
  this.hideDetail();
}

var FriendRequests = React.createClass({

  getInitialState: function() {
    return { detailShown: false };
  },

  stopProp: function (e) {
    e.stopPropagation();
  },

  hideDetail: function(e) {
    this.setState({ detailShown: false });
    $(document).off(hideDetail);
  },

  showDetail: function(e) {
    this.setState({ detailShown: true });
    $(document).on("click", hideDetail);
  },

  toggleDetail: function(e) {
    this.setState({ detailShown: !this.state.detailShown });
  },

  render: function () {
    var currentUser = SessionStore.currentUser();
    var friend_requests = currentUser.friend_requests,
        dropdown,
        badge;

    if (currentUser.numFriendRequests > 0) {
      badge = (
        <badge className="friend-requests-badge">
          { currentUser.numFriendRequests }
        </badge>
      );
    }

    if (this.state.detailShown) {
      dropdown = (
        <div
          ref={ dropdown => this.dropdown = dropdown }
          className="friend-requests-dropdown"
          onClick={ e => e.stopPropagation() }
          >
          <ul className="group">
            <li className="group">
              <p className="request-header">Friend Requests:</p>
            </li>
            {
              friend_requests.map(friendRequest => {
                return (
                  <FriendRequest
                    key={ friendRequest.id }
                    hideDetail={ this.hideDetail }
                    friendRequest={ friendRequest }
                    />
                );
              })
            }
          </ul>
        </div>
      );
    }

    return (
      <div className="friend-requests">
        <button
          onClick={this.showDetail}
          className="friend-requests-button"
          >
          <img
            className="friend-request-logo"
            src="friend_request_logo2.png"
            />
            {badge}
          </button>
        { dropdown }
      </div>
    );
  }

});
