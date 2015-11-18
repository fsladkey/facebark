var ProfileHeaderLinks = React.createClass({

  getInitialState: function () {
    return {activeTab: ActiveTabStore.activeTab()};
  },

  componentWillMount: function() {
    ActiveTabStore.on("change", this._change);
  },

  render: function() {
      return (
        <div className="profile-header-links group">
          <ul className="profile-header-link-list group">
            <li className={this.state.activeTab === "Timeline" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username}>
                Timeline
              </ReactRouter.Link>
            </li>

            <li className={this.state.activeTab === "About" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username + "/about"}>
                About
              </ReactRouter.Link>
            </li>

            <li className={this.state.activeTab === "Friends" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username + "/friends"}>
                Friends
              </ReactRouter.Link>
            </li>

            <li className={this.state.activeTab === "Photos" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username + "/photos"}>
                Photos
              </ReactRouter.Link>
            </li>
          </ul>
        </div>
      );
  },

  _change: function () {
    this.setState({activeTab: ActiveTabStore.activeTab()});
  }

});
