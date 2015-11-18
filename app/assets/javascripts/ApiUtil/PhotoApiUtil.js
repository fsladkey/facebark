(function(root) {

  var PhotoApiUtil = root.PhotoApiUtil = {

    createPhoto: function(formData) {
      $.ajax({
        url: "api/photos/",
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(currentUser) {
          SessionActions.receiveCurrentUser(currentUser);
        }
      });
    },

  };



})(this);
