const SearchBar = React.createClass({
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

  componentDidMount: function () {
    UserStore.on("change", this._change);
  },

  componentWillUnmount: function () {
    UserStore.removeListener("change", this._change);
  },

  toggleFocus: function () {
    this.setState({focused: !this.state.focused});
  },

  render: function() {
    var detailComponent;

    if (this.state.focused) {
      detailComponent = (
        <SearchDetail clearSearch={this.clearSearch} users={this.state.users}/>
      );
    } else {
      detailComponent = <div />;
    }
    return (
      <form className="search-bar group">
        <input
          onChange={this.handleChange}
          placeholder="Search Facebark"
          value={this.state.searchString}
          />
        <span className="mg-container">
          <i onClick={ this.toggleFocus } className="fa fa-search search-button" />
        </span>
        { detailComponent }
      </form>
    );
  },

  _change: function () {
    this.setState({users: UserStore.all()});
  }

});
