var ProfileHeaderLinks = React.createClass({

  getInitialState: function () {
    return {activeTab: null};
  },

  setActive: function (activeTab) {
    this.setState({activeTab: activeTab});
  },

  render: function() {
      // TODO: DRY it up!
      return (
        <div className="profile-header-links group">
          <ul className="profile-header-link-list">
            <li onClick={this.setActive.bind(this, {activeTab: "Timeline"})} className={this.state.activeTab === "Timeline" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username}>
                Timeline
              </ReactRouter.Link>
            </li>

            <li oonClick={this.setActive.bind(this, {activeTab: "About"})} className={this.state.activeTab === "About" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username + "/about"}>
                About
              </ReactRouter.Link>
            </li>

            <li onClick={this.setActive.bind(this, {activeTab: "Friends"})} className={this.state.activeTab === "Friends" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username + "/friends"}>
                Friends
              </ReactRouter.Link>
            </li>

            <li onClick={this.setActive.bind(this, {activeTab: "Photos"})} className={this.state.activeTab === "Photos" ? "Active" : ""}>
              <ReactRouter.Link to={"/" + this.props.user.username + "/photos"}>
                Photos
              </ReactRouter.Link>
            </li>
          </ul>
        </div>
      );
  },

});
