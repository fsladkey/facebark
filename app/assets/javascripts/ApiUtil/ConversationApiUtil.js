(function(root) {

  var ConversationApiUtil = root.ConversationApiUtil = {

    fetchConversations: function() {
      return $.ajax({
        url: "/api/conversations/",
        type: 'GET',
        success: function(conversations) {
          ConversationActions.receiveConversations(conversations);
        }
      });
    },

    sendMessage: function(params) {
      return $.ajax({
        url: "/api/messages/",
        type: 'POST',
        data: {message: params},
        success: function(message) {
          ConversationActions.receiveMessage(message);
        }
      });
    },

  };

})(this);
