var PhotoUpload = React.createClass({

  getInitialState: function () {
    return {url: "", file: null};
  },

  changeFile: function(e) {
    e.preventDefault();
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function() {
      this.setState({url: reader.result, file: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({url: "", file: null});
    }
  },

  clearFields: function() {
    this.setState({url: "", file: null});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var file = this.state.file;
    var formData = new FormData();
    formData.append("photo[image]", file);
    formData.append("photo[album_id]", this.props.album.id);

    PhotoApiUtil.createPhoto(formData, this.clearFields);
  },


  render: function() {
    return (
      <div className="photo-upload">
        <img className="photo-preview-image" src={this.state.url}></img>
        <form onSubmit={this.handleSubmit}>
          <input className="file-upload" onChange={this.changeFile} type="file"/>
          <button className="upload-button">Upload Photo</button>
        </form>
      </div>
    );
  }

});
