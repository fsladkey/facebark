var SearchResult = React.createClass({

  handleClick: function(e) {
    this.props.clearSearch();
  },

  render: function() {
    var user = this.props.user;
    return (
        <ReactRouter.Link to={"/" + this.props.user.username}>
          <li
            className="search-result item"
            onClick={this.handleClick}
            >
            <button>{user.firstname + " " + user.lastname}</button>
          </li>
        </ReactRouter.Link>
    );
  }

});
