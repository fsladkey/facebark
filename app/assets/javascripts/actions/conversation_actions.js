var ConversationActions = {

  receiveConversations: function (conversations) {
    AppDispatcher.dispatch({
        actionType: ConversationConstants.RECEIVE_CONVERSATIONS,
        conversations: conversations
    });
  },

  activateConversation: function (conversation) {
    AppDispatcher.dispatch({
        actionType: ConversationConstants.ACTIVATE_CONVERSATION,
        conversation: conversation
    });
  },

  deactivateConversation: function (conversation) {
    AppDispatcher.dispatch({
        actionType: ConversationConstants.DEACTIVATE_CONVERSATION,
        conversation: conversation
    });
  },

  receiveMessage: function (message) {
    AppDispatcher.dispatch({
        actionType: ConversationConstants.RECEIVE_MESSAGE,
        message: message
    });
  }
};
