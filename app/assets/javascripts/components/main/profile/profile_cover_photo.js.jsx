var ProfileCoverPhoto = React.createClass({

  getInitialState: function () {
    return {file: null};
  },

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
    UserApiUtil.updateProfile(this.props.user.profile.id, {photo_id: photo.id});
  },

  submitFile: function (file) {
    var user = this.props.user;
    var formData = new FormData();
    formData.append("photo[image]", file);
    formData.append("photo[album_id]", user.albums[1].id);

    PhotoApiUtil.createPhoto(formData, this.afterUpload);
  },



  render: function() {
    var input;

    if (SessionStore.currentUser().id === this.props.user.id) {
      input = <input className="upload-cover-photo-button" onChange={this.changeFile} type="file"/>;
    }

    return (
      <div>
        <img className="profile-cover-photo" src={this.props.user.cover_image_url}/>
        {input}
      </div>
    );
  }

});
