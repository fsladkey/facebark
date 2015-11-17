var SearchBar = React.createClass({
  getInitialState: function () {
    return {focused: false};
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
