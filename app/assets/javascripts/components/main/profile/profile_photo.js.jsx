var ProfilePhoto = React.createClass({

  render: function() {
    return (
      <div className="profile-photo-container">
        <img className="profile-profile-photo" src={this.props.user.profile_image_url}/>
      </div>
    );
  }

});
