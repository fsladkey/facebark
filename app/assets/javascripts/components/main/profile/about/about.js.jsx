var About = React.createClass({

  getInitialState: function() {
    return {content: "Info"};
  },

  handleClick: function (e) {
    this.setState({content: e.currentTarget.innerHTML});
  },

  render: function() {
    var content;
    if (this.state.content === "Info") {
      content = <ProfileInfo user={this.props.user}/>;
    } else {
      content = <ProfileBio user={this.props.user}/>;
    }
      return (
        <div className="about">
          <h1>About</h1>
          <div className="about-info" >
            <ul className="about-choices">
              <li onClick={this.handleClick}>
                Info
              </li>

              <li onClick={this.handleClick}>
                Bio
              </li>
            </ul>
            {content}
          </div>
        </div>
      );
  },

});
