(function (root){

  var _showModal = false;
  
  root.ModalStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ModalConstants.SHOW_MODAL:
          _showModal = true;
          ModalStore.emit("change");
          break;
        case ModalConstants.HIDE_MODAL:
          _showModal = false;
          ModalStore.emit("change");
          break;
      }
    }),

    show: function () {
      return _showModal;
    },

  });

})(this);
