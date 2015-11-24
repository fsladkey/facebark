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

  showDetail: function () {
    PhotoApiUtil.showPhoto(this.props.user.profile.photo_id, ModalActions.showModal());
  },


  render: function() {
    var detail,
        input;

    if (this.state.focused) {
      detail = <PhotoDetail
        hideDetail={this.hideDetail}
        photo={this.props.user.cover_image}/>;
    }


    if (SessionStore.currentUser().id === this.props.user.id) {
      input = <input className="upload-cover-photo-button" onChange={this.changeFile} type="file"/>;
    }

    return (
      <div>
          <img onClick={this.showDetail} className="profile-cover-photo" src={this.props.user.cover_image_url}/>
          {input}
        {detail}
      </div>
    );
  }

});
