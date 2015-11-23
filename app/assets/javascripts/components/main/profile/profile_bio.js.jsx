var ProfileBio = React.createClass({
  getInitialState: function () {
    return {bio: this.props.user.profile.bio, editing: false};
  },

  handleSubmit: function(e) {
    UserApiUtil.updateProfile(this.props.user.profile.id, {bio: this.state.bio});
    this.toggleEdit();
  },

  handleChange: function(e) {
    this.setState({bio: e.currentTarget.value});
  },

  toggleEdit: function() {
    this.setState({editing: !this.state.editing});
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({bio: newProps.user.profile.bio});
  },

  render: function() {
    debugger
    var formattedInfo, button;

    if (this.state.editing) {

      if (SessionStore.currentUser().id === this.props.user.id) {
        button = <button className="shown-button" onClick={this.handleSubmit}>Save</button>;
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

      if (SessionStore.currentUser().id === this.props.user.id) {
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
