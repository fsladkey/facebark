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
    this.logInAs("bprime", "bprimebprime");
  },

  logInAsUlysses: function() {
    this.logInAs("puglyfe", "puglyfepuglyfe");
  },

  logInAs: function(username, password) {
    this.typeValue(username, "username", () => {
      this.typeValue(password, "password", () => {
        this.form.submit();
      });
    });
  },

  typeValue: function (value, name, cb) {
    if (!value) return cb();

    this.setState({ [name]: this.state[name] + value[0] })

    setTimeout(() => this.typeValue(value.slice(1), name, cb), 75);
  },

  render: function() {
    return (
      <div>
        <form
          className="log-in-form group"
          action="/session"
          method="POST"
          ref={ form => this.form = form }
          >
          <input type="hidden" name="authenticity_token" value={ FaceBarkAssets.authToken }/>
          <div className="log-in-form-field">
            <label>Username or Email</label>
            <input type="text" name="user[username]" valueLink={this.linkState("username")}/>
          </div>

          <div className="log-in-form-field">
            <label>Password</label>
            <input type="password" name="user[password]" valueLink={this.linkState("password")}/>
          </div>

          <button onClick={this.handleSubmit} className="log-in-button" type="submit">
            Log In
          </button>

          <div className="guest-user-buttons">
            <button onClick={this.logInAsBailey} className="guest-user-button" type="button">
              Log in as Bailey
            </button>

            <button onClick={this.logInAsUlysses} className="guest-user-button" type="button">
              Log in as Ulysses
            </button>
          </div>

        </form>
      </div>
    );
  }

});
