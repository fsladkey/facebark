(function (root){

  var _album = null;

  var setAlbum = function(album) {
    _album = album;
  };

  root.AlbumStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case AlbumConstants.RECIEVE_ALBUM:
          setAlbum(payload.album);
          AlbumStore.emit("change");
          break;
      }
    }),

    album: function () {
      return _album;
    },

  });

})(this);
