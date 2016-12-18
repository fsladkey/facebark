var ProfilePhoto = React.createClass({

  changeFile: function(e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    if (file) {
      this.setState({file: file});
    }
    this.submitFile(file);
  },

  afterUpload: function(photo) {
    this.setState({url: "", file: null});
    UserApiUtil.updateUser(this.props.user.id, {photo_id: photo.id});
  },

  submitFile: function (file) {
    var user = this.props.user;
    var formData = new FormData();
    formData.append("photo[image]", file);
    formData.append("photo[album_id]", user.albums[0].id);

    PhotoApiUtil.createPhoto(formData, this.afterUpload);
  },

  showDetail: function () {
    PhotoApiUtil.showPhoto(this.props.user.photo_id, ModalActions.showModal());
  },

  render: function() {
    var input;

    if (SessionStore.currentUser().id === this.props.user.id) {
      input = (
        <label className="photo-upload-box" htmlFor="profile-photo-input">
            <input
              id="profile-photo-input"
              className="upload-profile-photo-button"
              onChange={ this.changeFile }
              type="file"
              />
            <i className="fa fa-3 fa-camera-retro photo-upload-icon" aria-hidden="true"/>
            <p>
            Update Profile Picture
          </p>
        </label>
      );
    }

    return (
      <div className="profile-photo-container">
        <img
          onClick={ this.showDetail }
          className="profile-profile-photo"
          src={ this.props.user.profile_image_url }
          />
        { input }
      </div>
    );
  }

});
