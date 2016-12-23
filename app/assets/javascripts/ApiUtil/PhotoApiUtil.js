(function(root) {

  var PhotoApiUtil = root.PhotoApiUtil = {

    createPhoto: function(formData, callback) {
      $.ajax({
        url: "/api/photos/",
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
        url: "/api/photos/" + photoId,
        type: 'GET',
        success: function(photo) {
          PhotoActions.receivePhoto(photo);
          callback && callback();
        }
      });
    },

    lickPhoto: function(postId) {
      $.ajax({
        url: "/api/photos/" + postId + "/lick",
        type: 'POST',
        success: function(photo) {
            PhotoActions.receivePhoto(photo);
        }
      });
    },

    unlickPhoto: function(postId) {
      $.ajax({
        url: "/api/photos/" + postId + "/unlick",
        type: 'DELETE',
        success: function(photo) {
          PhotoActions.receivePhoto(photo);
        }
      });
    }

};

})(this);
