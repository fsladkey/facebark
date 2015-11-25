var Notifications = React.createClass({

  getInitialState: function() {
    return {detailShown: false};
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
      $(document).on("click", function(e) {
      if ($(e.target).parents('div').get(0) !== this.refs.dropdown.getDOMNode()) {
          this.hideDetail();
        }
      }.bind(this))
      dropdown = (
        <div ref="dropdown" className="friend-requests-dropdown">
          <ul className="group">
            <li className="group">
              <p className="request-header">Notifications:</p>
            </li>
            {
              notifications.map(function(notification) {
                return <Notification key={notification.id} hideDetail={this.hideDetail} notification={notification} hideDetail={this.hideDetail}history={this.props.history}/>;
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
            src="notifications_logo.png"
            />
            {badge}
          </button>
        {dropdown}
      </div>
    );
  }

});
