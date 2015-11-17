var SearchBar = React.createClass({
  getInitialState: function () {
    
  },

  render: function() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search Facebark"
          />
        <button className="search-button">🔍</button>
      </div>
    );
  }

});
