var Notifications = React.createClass({

  getInitialState: function() {
    return { detailShown: false };
  },

  componentDidMount: function () {
    $(document).on("click", this.hideDetail);
  },

  componentWillUnmount: function () {
    $(document).off("click", this.hideDetail);
  },

  stopProp: function (e) {
    e.stopPropagation();
  },

  hideDetail: function(e) {
    this.setState({ detailShown: false });
  },

  showDetail: function(e) {
    this.setState({ detailShown: true });
  },

  toggleDetail: function(e) {
    this.setState({ detailShown: !this.state.detailShown });
  },

  render: function () {
    var currentUser = SessionStore.currentUser(),
        notifications = currentUser.notifications,
        dropdown,
        badge;

    if (currentUser.newNotifications > 0) {
      badge = (
        <badge
          className="friend-requests-badge"
          >
          {currentUser.newNotifications}
        </badge>
      );
    }

    if (this.state.detailShown) {
      dropdown = (
        <div
          className="friend-requests-dropdown info-dropdown"
          onClick={ this.stopProp }
          >
          <ul className="group">
            <li className="group">
              <p className="request-header">Notifications:</p>
            </li>
            {
              notifications.map(function (notification) {
                return (
                  <Notification
                    key={notification.id}
                    hideDetail={this.hideDetail}
                    notification={notification}
                    hideDetail={this.hideDetail}
                    history={this.props.history}
                    />
                );
              }, this)
            }
          </ul>
        </div>
      );
    }
    return (
      <div className="friend-requests">
        <button
          onClick={ this.toggleDetail }
          className="friend-requests-button"
          >
          <img
            className="friend-request-logo"
            src="notifications_logo.png"
            />
            { badge }
          </button>
        { dropdown }
      </div>
    );
  }

});
