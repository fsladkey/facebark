var PhotoList = React.createClass({

  componentWillReceiveProps: function (newProps) {
    this.forceUpdate();
  },

  render: function () {
    var photoList = this.props.album.photos.map(function(photo) {
      return (
        <li key={photo.id}>
          <img className="photo-album-view" src={photo.image_url}/>
        </li>
      );
    }, this);
    return (
      <div>
        <ul className="photo-list">
          {photoList}
        </ul>
      </div>
    );
  },

});
