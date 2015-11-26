var ConversationActions = {

  receiveConversations: function (conversations) {
    AppDispatcher.dispatch({
        actionType: ConversationConstants.RECEIVE_CONVERSATIONS,
        conversations: conversations
    });
  }
};
