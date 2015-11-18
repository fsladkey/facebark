var Friends = React.createClass({

  componentDidMount: function() {
    TabActions.activateTab("Friends");
  },

  render: function() {
      return (
        <div>
          Friends
        </div>
      );
  }

});
