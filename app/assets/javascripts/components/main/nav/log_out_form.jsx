var LogOutDropdown = function (props) {
  return (
    <form action="/session" method="POST" className="log-out-dropdown">
      <input type="hidden" name="_method" value="DELETE"/>
      <input type="hidden" name="authenticity_token" value={ FaceBarkAssets.authToken }/>
      <button type="submit" className="nav-log-out-button">
        Log Out
      </button>
    </form>
  );
}

var LogOutForm = React.createClass({

  componentDidMount: function () {
    this.token = DropdownStore.on('change', function () {
      this.forceUpdate();
    }.bind(this))
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  showDetail: function(e) {
    DropdownActions.receiveDropdown("log-out");
  },

  render: function () {
    var className = DropdownStore.dropdown() === "log-out" ? "active" : "";
    return (
      <div onClick={ stopProp } className="log-out-container">
        <button onClick={ this.showDetail }>
          <i className={ "fa fa-caret-down " + className} aria-hidden="true"/>
        </button>
        <Dropdown type="log-out">
          <LogOutDropdown />
        </Dropdown>
      </div>
    )
  }
})
