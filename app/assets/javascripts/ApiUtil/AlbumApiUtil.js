(function(root) {

  var AlbumApiUtil = root.AlbumApiUtil = {

    fetchAlbum: function(album_id) {
      $.ajax({
        url: "/api/albums/" + album_id,
        type: 'GET',
        success: function(album) {
          AlbumActions.receiveAlbum(album);
        }
      });
    },

  };

})(this);
