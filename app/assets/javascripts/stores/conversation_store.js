(function (root){

  var _conversations = [];
  var _activeConversations = [];

  var removeConversation = function (conversation) {
    _activeConversations = _activeConversations.filter(function (activeConversation) {
      return conversation.id != activeConversation.id;
    }, this);
  };

  var addMessage = function(message) {
    conversation = _conversations.find(function (conversation) {
      return conversation.id === message.conversation_id;
    });

    conversation.messages.push(message);
  };

  root.ConversationStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ConversationConstants.RECEIVE_CONVERSATIONS:
          _conversations = payload.conversations;
          ConversationStore.emit("change");
          break;
        case ConversationConstants.ACTIVATE_CONVERSATION:
          _activeConversations.push(payload.conversation);
          ConversationStore.emit("change");
          break;
        case ConversationConstants.DEACTIVATE_CONVERSATION:
          removeConversation(payload.conversation);
          ConversationStore.emit("change");
          break;
        case ConversationConstants.RECEIVE_MESSAGE:
          addMessage(payload.message);
          ConversationStore.emit("change");
          break;
      }
    }),

    all: function () {
      return _conversations;
    },

    allActive: function () {
      return _activeConversations;
    },

  });

})(this);
