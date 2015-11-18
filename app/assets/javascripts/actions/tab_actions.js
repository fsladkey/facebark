var TabActions = {

  activateTab: function (tab) {
    AppDispatcher.dispatch({
        actionType: TabConstants.ACTIVATE_TAB,
        activeTab: tab
    });
  },

};
