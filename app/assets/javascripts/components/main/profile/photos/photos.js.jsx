var Photos = React.createClass({

  render: function() {
    if (this.props.user) {
      return (
        <div className="photos group">
          <ReactRouter.Link to={"/" + this.props.user.username + "/photos"}>
            <h1>Photos</h1>
          </ReactRouter.Link>
          <div>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

});
