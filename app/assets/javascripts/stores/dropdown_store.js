(function (root){

  var _dropdown = null;

  root.DropdownStore = Object.assign({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case DropdownConstants.RECEIVE_DROPDOWN:
          _dropdown = payload.dropdown
          DropdownStore.emit("change");
          break;
      }
    }),

    dropdown: function () {
      return _dropdown;
    },

  });

})(this);
