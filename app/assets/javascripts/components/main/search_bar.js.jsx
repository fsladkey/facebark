var SearchBar = React.createClass({
  getInitialState: function () {
    return {focused: false, users: null, searchString: ""};
  },

  handleChange: function (e) {
    var searchString = e.currentTarget.value;
    if (e.currentTarget.value) {
      this.setState({focused: true, searchString: searchString});
    } else {
      this.setState({focused: false, searchString: searchString});
    }
    UserApiUtil.fetchUsers(searchString);
  },

  clearSearch: function () {
    this.setState({focused: false, users: null, searchString: ""});
  },

  componentWillMount: function () {
    UserStore.on("change", this._change);
  },

  render: function() {
    var detailComponent;

    if (this.state.focused) {
      detailComponent = (
        <SearchDetail clearSearch={this.clearSearch} users={this.state.users}/>
      );
    } else {
      detailComponent = <div></div>;
    }
    return (
      <div className="search-bar">
        <input
          onChange={this.handleChange}
          placeholder="Search Facebark"
          value={this.state.searchString}
          />
        <button className="search-button">🔍</button>
        {detailComponent}
      </div>
    );
  },

  _change: function () {
    this.setState({users: UserStore.all()});
  }

});
