var FriendRequests = React.createClass({

  getInitialState: function() {
    return {detailShown: false};
  },

  toggleDetail: function(e) {
    e && e.stopPropagation();
    this.setState({detailShown: !this.state.detailShown});
  },

  showDetail: function(e) {
    e && e.stopPropagation();
    this.setState({detailShown: true});
  },

  hideDetail: function(e) {
    e && e.stopPropagation();
    this.setState({detailShown: false});
  },

  render: function () {
    var friend_requests = this.props.currentUser.friend_requests,
        dropdown,
        badge;

    if (this.props.currentUser.numFriendRequests > 0) {
      badge = (
        <badge
          className="friend-requests-badge"
          >
          {this.props.currentUser.numFriendRequests}
        </badge>
      );
    }

    if (this.state.detailShown) {
        $(document).click(function () {
          this.toggleDetail();
        }.bind(this));

      dropdown = (
        <div className="friend-requests-dropdown">
          <ul className="group">
            <li className="group">
              <p className="request-header">Friend Requests:</p>
            </li>
            {
              friend_requests.map(function(friendRequest) {
                return <FriendRequest key={friendRequest.id} toggleDetail={this.toggleDetail} friendRequest={friendRequest}/>;
              }, this)
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
        {dropdown}
      </div>
    );
  }

});
