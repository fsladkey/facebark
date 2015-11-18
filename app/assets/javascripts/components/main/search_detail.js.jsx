var SearchDetail = React.createClass({

      render: function() {
        if (this.props.users) {
          if (this.props.users.length === 0) {
            return(
              <div className="search-results group">
                <ul>
                  <li
                    className="search-result-item">
                    <button>"No results found"</button>
                  </li>
                </ul>
              </div>
            );
          } else {
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
        } else {
          return (
            <div>
              <ul>
              </ul>
            </div>
          );
        }
      }

});
