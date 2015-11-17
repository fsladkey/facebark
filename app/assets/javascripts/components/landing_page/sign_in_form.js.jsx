var LogInForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(e) {
    debugger
    SessionApiUtil.logInUser(this.state);
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="log-in-form group">
          <div className="log-in-form-field">
            <label>Username or Email</label>
            <input type="text" valueLink={this.linkState("username")}/>
          </div>
          <div className="log-in-form-field">
            <label>Password</label>
            <input type="password" valueLink={this.linkState("password")}/>
          </div>

          <ReactRouter.IndexLink to="/">
            <button onClick={this.handleSubmit} className="log-in-button" type="submit">Log In</button>
          </ReactRouter.IndexLink>
        </form>
      </div>
    );
  }

});
