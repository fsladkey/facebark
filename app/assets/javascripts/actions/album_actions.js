var AlbumActions = {

  receiveAlbum: function (album) {
    AppDispatcher.dispatch({
        actionType: AlbumConstants.RECIEVE_ALBUM,
        album: album
    });
  },

};
