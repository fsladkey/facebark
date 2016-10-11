 var Main = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar
          history={this.props.history}
          currentUser={SessionStore.currentUser()}
          />
        <Chat
          currentUser={SessionStore.currentUser()}
          />
      </div>
    );
  },

});
