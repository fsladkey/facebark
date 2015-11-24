var PhotoActions = {

  receivePhoto: function (photo) {
    AppDispatcher.dispatch({
        actionType: PhotoConstants.RECEIVE_PHOTO,
        photo: photo
    });
  },

  receiveComment: function (comment) {
    AppDispatcher.dispatch({
        actionType: PhotoConstants.RECEIVE_COMMENT,
        comment: comment
    });
  }
};
