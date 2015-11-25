var PhotoItem = React.createClass({

  showDetail: function () {
    PhotoApiUtil.showPhoto(this.props.photo.id, ModalActions.showModal());
  },

  render: function () {
    return (
      <li onClick={this.showDetail} key={this.props.photo.id} photo={this.props.photo}>
        <img className="photo-album-view" src={this.props.photo.image_url}/>
      </li>
    );
  }

});
