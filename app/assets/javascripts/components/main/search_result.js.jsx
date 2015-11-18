var SearchResult = React.createClass({

  handleClick: function(e) {
    this.props.clearSearch();
  },

  render: function() {
    var user = this.props.user;
    return (
        <li
          className="search-result-item"
          onClick={this.handleClick}
          >
          <ReactRouter.Link to={"/" + this.props.user.username}>
          <button>{user.username}</button>
          </ReactRouter.Link>
        </li>
    );
  }

});
