var ProfileBio = React.createClass({
  getInitialState: function () {
    var user = UserStore.user();
    return { bio: user.profile.bio, editing: false };
  },

  handleSubmit: function(e) {
    var user = UserStore.user();
    UserApiUtil.updateProfile(user.profile.id, { bio: this.state.bio });
    this.toggleEdit();
  },

  handleChange: function(e) {
    this.setState({bio: e.currentTarget.value});
  },

  toggleEdit: function() {
    this.setState({editing: !this.state.editing});
  },

  componentWillReceiveProps: function(newProps) {
    var user = UserStore.user();
    this.setState({ bio: user.profile.bio });
  },

  render: function() {
    var user = UserStore.user();
    var formattedInfo, button;

    if (this.state.editing) {
      if (SessionStore.currentUser().id === user.id) {
        button = <button className="shown-button" onClick={ this.handleSubmit }>Save</button>;
      }

      return (
        <div className="about-bio">
          <h3>Bio: </h3>
            <textarea onChange={this.handleChange}
            >{this.state.bio}</textarea>

            {button}
          </div>
      );
    } else {

      if (SessionStore.currentUser().id === user.id) {
        button = <button onClick={this.toggleEdit}>Edit</button>;
      }

      return (
      <div className="about-bio">
        <h3>Bio: </h3>
          <p>{this.state.bio}</p>
          {button}
        </div>
      );
    }
  }

});
