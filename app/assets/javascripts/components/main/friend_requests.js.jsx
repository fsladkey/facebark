var FriendRequests = React.createClass({

  getInitialState: function() {
    return {detailShown: false};
  },

  toggleDetail: function() {
    this.setState({detailShown: !this.state.detailShown});
  },

  render: function () {
    var friend_requests = this.props.currentUser.friend_requests,
        dropdown;

    if (this.state.detailShown) {
      dropdown = (
        <div className="friend-requests-dropdown">
          <ul className="group">
            <li className="group">
              <p className="request-header">Friend Requests:</p>
            </li>
            {
              friend_requests.map(function(friendRequest) {
                return <FriendRequest key={friendRequest.id} friendRequest={friendRequest}/>;
              }, this)
            }
          </ul>
        </div>
      );
    }

    return (
      <div className="friend-requests">
        <button onClick={this.toggleDetail} className="friend-requests-button">Friend Requests</button>
        {dropdown}
      </div>
    );
  }

});
