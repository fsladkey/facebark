var AlbumList = React.createClass({

  getInitialState: function() {
    return {user: UserStore.user()};
  },

  componentDidMount: function() {
    UserStore.on("change", this._change);
    var username = this.props.params.username;
    if (username && !(UserStore.user())) {
      UserApiUtil.fetchUser(username);
    }
  },

  componentWillUnmount: function() {
    UserStore.removeListener("change", this._change);
  },

  componentWillReceiveProps: function(newProps) {
    UserApiUtil.fetchUser(newProps.params.username);
  },

  render: function () {
    var albumList = this.state.user.albums.map(function(album) {
      var preview;

      if (album.photo_count > 0) {
        preview = <img src={album.preview_url}/>;
      }

      return (
        <li key={album.id} className="album-preview">
          <ReactRouter.Link to={"/" + this.state.user.username + "/photos/" + album.id}>
          <div className="album-preview-image">{preview}</div>
          <h3>{album.title}</h3>
          </ReactRouter.Link>
        </li>
      );
    }, this);
    return (
      <div>
        <ul className="album-list group">
          {albumList}
        </ul>
      </div>
    );
  },

  _change: function() {
    this.setState({user: UserStore.user()});
  }

});
