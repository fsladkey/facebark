(function(root) {

  var PhotoApiUtil = root.PhotoApiUtil = {

    createPhoto: function(formData, callback) {
      $.ajax({
        url: "api/photos/",
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(photo) {
          AlbumApiUtil.fetchAlbum(photo.album_id);
          callback && callback(photo);
        }
      });
    },

    showPhoto: function(photoId, callback) {
      $.ajax({
        url: "api/photos/" + photoId,
        type: 'GET',
        success: function(photo) {
          PhotoActions.receivePhoto(photo);
          callback && callback();
        }
      });
    },
  };

})(this);
