(function (root){

  var _conversations = [];

  // var addComment = function(comment) {
  //   var index;
  //   oldComment = _photo.comments.find(function (photoComment, idx) {
  //     if (comment.id === photoComment.id) {
  //       index = idx;
  //       return true;
  //     }
  //   });
  //   if (oldComment) {
  //     _photo.comments[index] = comment;
  //   } else {
  //     _photo.comments.push(comment);
  //   }
  // };

  root.ConversationStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ConversationConstants.RECEIVE_CONVERSATIONS:
          debugger
          _conversations = payload.conversations;
          ConversationStore.emit("change");
          break;
        // case PhotoConstants.RECEIVE_COMMENT:
        //   addComment(payload.comment);
        //   ConversationStore.emit("change");
        //   break;
      }
    }),

    all: function () {
      return _conversations;
    },

  });

})(this);
