var Notifications = React.createClass({

  getInitialState: function() {
    return {detailShown: false};
  },

  hideDetail: function(e) {
    this.setState({detailShown: false});
  },

  toggleDetail: function(e) {
    this.setState({detailShown: !this.state.detailShown});
  },

  render: function () {
    var notifications = this.props.currentUser.notifications,
        dropdown,
        badge;

    if (this.props.currentUser.numNotifications > 0) {
      badge = (
        <badge
          className="friend-requests-badge"
          >
          {this.props.currentUser.numNotifications}
        </badge>
      );
    }

    if (this.state.detailShown) {

      dropdown = (
        <div className="friend-requests-dropdown">
          <ul className="group">
            <li className="group">
              <p className="request-header">Notifications:</p>
            </li>
            {
              notifications.map(function(notification) {
                return <Notification key={notification.id} hideDetail={this.hideDetail} notification={notification}/>;
              }, this)
            }
          </ul>
        </div>
      );
    }

    return (
      <div className="friend-requests" onClick={this.toggleDetail}>
        <button
          className="friend-requests-button"
          >
          <img
            className="friend-request-logo"
            src="notifications_logo.png"
            />
            {badge}
          </button>
        {dropdown}
      </div>
    );
  }

});
