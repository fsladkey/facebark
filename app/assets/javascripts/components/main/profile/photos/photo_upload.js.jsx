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

  handleSubmit: function (e) {
    e.preventDefault();
    var file = this.state.file;
    var formData = new FormData();
    formData.append("photo[image]", file);

    PhotoApiUtil.createPhoto(formData);
  },


  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.changeFile} type="file"/>
          <button>Upload Photo</button>
        </form>
        <img src={this.state.url}></img>
      </div>
    );
  }

});
