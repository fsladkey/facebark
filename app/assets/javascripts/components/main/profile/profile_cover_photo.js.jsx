var ProfileCoverPhoto = React.createClass({

  render: function() {
    return (
      <img className="profile-cover-photo" src={this.props.user.cover_image_url}/>
    );
  }

});
