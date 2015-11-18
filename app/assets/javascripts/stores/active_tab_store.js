(function (root){

  var _activeTab = null;

  var setActiveTab = function(activeTab) {
    _activeTab = activeTab;
  };

  root.ActiveTabStore = $.extend({}, EventEmitter.prototype, {

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case TabConstants.ACTIVATE_TAB:
          setActiveTab(payload.activeTab);
          AppDispatcher.waitFor([UserStore.dispatcherId]);
          ActiveTabStore.emit("change");
          break;
      }
    }),

    activeTab: function () {
      return _activeTab;
    },

  });

})(this);
