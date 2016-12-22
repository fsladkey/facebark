var DropdownActions = {

  receiveDropdown: function (dropdown) {
    AppDispatcher.dispatch({
        actionType: DropdownConstants.RECEIVE_DROPDOWN,
        dropdown: dropdown
    });
  }

};
