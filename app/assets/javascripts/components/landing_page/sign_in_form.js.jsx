var LogInForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(e) {
    e && e.preventDefault();
    SessionApiUtil.logInUser(this.state);
  },

  logInAsBailey: function() {
    this.setState({username: "bprime", password: "bprimebprime"});
    window.setTimeout(function() {
      this.handleSubmit();
    }.bind(this), 500);
  },

  logInAsUlysses: function() {
    this.setState({username: "puglyfe", password: "puglyfepuglyfe"});
    window.setTimeout(function() {
      this.handleSubmit();
    }.bind(this), 500);
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
            <button onClick={this.handleSubmit} className="log-in-button" type="submit">Log In</button>
        <div className="guest-user-buttons">
          <button onClick={this.logInAsBailey} className="guest-user-button" type="button">Log in as Bailey</button>
          <button onClick={this.logInAsUlysses} className="guest-user-button" type="button">Log in as Ulysses</button>
        </div>
        </form>
      </div>
    );
  }

});
