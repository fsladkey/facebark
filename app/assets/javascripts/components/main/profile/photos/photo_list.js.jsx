var PhotoList = React.createClass({

  componentWillReceiveProps: function (newProps) {
    this.forceUpdate();
  },

  render: function () {
    var photoList = this.props.album.photos.map(function(photo) {
      return (
        <PhotoItem key={photo.id} photo={photo}/>
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
