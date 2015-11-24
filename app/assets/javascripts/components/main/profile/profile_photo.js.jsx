var ProfilePhoto = React.createClass({

  getInitialState: function () {
    return {file: null, focused: false};
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
    this.setState({focused: true});
  },

  hideDetail: function () {
  this.setState({focused: false});
  },

  render: function() {
    var detail;
    if (this.state.focused) {
      detail = <PhotoDetail
        hideDetail={this.hideDetail}
        photo={this.props.user.profile_image}/>;
    }

    var input;

    if (SessionStore.currentUser().id === this.props.user.id) {
      input = <input className="upload-profile-photo-button" onChange={this.changeFile} type="file"/>;
    }

    return (
      <div className="profile-photo-container">
        <img onClick={this.showDetail} className="profile-profile-photo" src={this.props.user.profile_image.image_url}/>
        {input}
        {detail}
      </div>
    );
  }

});
