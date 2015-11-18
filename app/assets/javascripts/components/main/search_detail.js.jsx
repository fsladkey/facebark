var SearchDetail = React.createClass({

      render: function() {
        if (this.props.users) {
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
        } else {
          return <div></div>;
        }
      }

});
