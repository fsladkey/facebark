var SearchResult = React.createClass({

  handleClick: function(e) {
    this.props.clearSearch();
  },

  render: function() {
    var Link = ReactRouter.Link;
    var user = this.props.user;
    return (
        <Link to={"/" + this.props.user.username}>
          <li className="search-result" onClick={ this.handleClick }>
            <img src={ user.thumb_url }/>
            <button>{ user.full_name }</button>
          </li>
        </Link>
    );
  }

});
