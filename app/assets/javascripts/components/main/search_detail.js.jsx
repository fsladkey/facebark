var SearchDetail = React.createClass({

      render: function() {
        return (
          <div className="search-results group">
            <ul>
              {
                this.props.users.map(function(user){
                  return <SearchResult clearSearch={this.props.clearSearch} user={user}/>;
                }, this)
              }
            </ul>
          </div>
        );
      }

});
