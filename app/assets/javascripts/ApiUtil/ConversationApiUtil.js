(function(root) {

  var ConversationApiUtil = root.ConversationApiUtil = {

    fetchConversations: function() {
      $.ajax({
        url: "api/conversations/",
        type: 'GET',
        success: function(conversations) {
          ConversationActions.receiveConversations(conversations);
        }
      });
    },

    sendMessage: function(params) {
      $.ajax({
        url: "api/messages/",
        type: 'POST',
        data: {message: params},
        success: function(message) {
          ConversationActions.receiveMessage(message);
        }
      });
    },

  };

})(this);
