var FriendRequests = React.createClass({

  getInitialState: function() {
    return {detailShown: false};
  },

  stopProp: function (e) {
    e.stopPropagation();
  },

  hideDetail: function(e) {
    this.setState({detailShown: false});
  },

  showDetail: function(e) {
    this.setState({detailShown: true});
  },

  toggleDetail: function(e) {
    this.setState({detailShown: !this.state.detailShown});
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
        $(document).on("click", function(e) {
        if ($(e.target).parents('div').get(0) !== this.refs.dropdown.getDOMNode()) {
            this.hideDetail();
          }
        }.bind(this))
      dropdown = (
        <div ref="dropdown" className="friend-requests-dropdown">
          <ul className="group">
            <li className="group">
              <p className="request-header">Friend Requests:</p>
            </li>
            {
              friend_requests.map(function(friendRequest) {
                return <FriendRequest key={friendRequest.id} hideDetail={this.hideDetail} friendRequest={friendRequest}/>;
              }, this)
            }
          </ul>
        </div>
      );
    } else {
      $(document).off();
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
