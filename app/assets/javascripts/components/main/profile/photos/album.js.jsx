var Album = React.createClass({

  getInitialState: function() {
    return {album: AlbumStore.album()};
  },


  componentDidMount: function() {
    AlbumStore.on("change", this._change);
    var album_id = this.props.params.album_id;
    if (album_id && !(AlbumStore.album())) {
      AlbumApiUtil.fetchAlbum(album_id);
    }
  },

  componentWillUnmount: function() {
    AlbumStore.removeListener("change", this._change);
  },

  componentWillReceiveProps: function(newProps) {
    AlbumApiUtil.fetchAlbum(newProps.params.album_id);
  },

  render: function() {
    if (this.state.album) {
      return (
        <div>
        <PhotoUpload album={this.state.album}/>
        <PhotoList album={this.state.album}/>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  _change: function() {
    this.setState({album: AlbumStore.album()});
  }

});
