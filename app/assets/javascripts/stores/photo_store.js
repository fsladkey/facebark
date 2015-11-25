(function (root){

  var _photo;

  var addComment = function(comment) {
    var index;
    oldComment = _photo.comments.find(function (photoComment, idx) {
      if (comment.id === photoComment.id) {
        index = idx;
        return true;
      }
    });
    if (oldComment) {
      _photo.comments[index] = comment;
    } else {
      _photo.comments.push(comment);
    }
  };

  root.PhotoStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case PhotoConstants.RECEIVE_PHOTO:
          _photo = payload.photo;
          PhotoStore.emit("change");
          break;
        case PhotoConstants.RECEIVE_COMMENT:
          addComment(payload.comment);
          PhotoStore.emit("change");
          break;
      }
    }),

    photo: function () {
      return _photo;
    },

  });

})(this);
