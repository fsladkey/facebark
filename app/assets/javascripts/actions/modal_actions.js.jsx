var ModalActions = {

  showModal: function () {
    AppDispatcher.dispatch({
        actionType: ModalConstants.SHOW_MODAL,
    });
  },

  hideModal: function () {
    AppDispatcher.dispatch({
        actionType: ModalConstants.HIDE_MODAL,
    });
  }
};
