 var Main = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar history={ this.props.history } />
        <Chat />
      </div>
    );
  },

});
