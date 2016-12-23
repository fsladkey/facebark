var Photos = React.createClass({

  render: function() {
    var user = UserStore.user();
    return (
      <div className="photos group">
        <ReactRouter.Link to={"/" + user.username + "/photos"}>
          <h1>Photos</h1>
        </ReactRouter.Link>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  },

});
