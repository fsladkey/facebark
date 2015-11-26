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

  };

})(this);
