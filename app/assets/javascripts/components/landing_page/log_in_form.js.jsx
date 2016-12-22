var LogInForm = React.createClass({

  getInitialState: function() {
    return { username: "", password: "", disabled: false };
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
    this.setState({ disabled: true })
    this.typeValue(username, "username", function () {
      this.typeValue(password, "password", function () {
        this.form.submit();
      }.bind(this));
    }.bind(this));
  },

  typeValue: function (value, name, cb) {
    if (!value) return cb();
    this.setState({ [name]: this.state[name] + value[0] })
    setTimeout(function () {
      this.typeValue(value.slice(1), name, cb)
    }.bind(this), 75);
  },

  update: function (field) {
    return function (e) {
      var newState = {};
      newState[field] = e.currentTarget.value;
      this.setState(newState);
    }.bind(this);
  },

  render: function() {
    var disabled = this.state.disabled
    var ref = function(form) { this.form = form; }.bind(this);
    return (
      <div>
        <form
          className="log-in-form group"
          action="/session"
          method="POST"
          ref={ ref }
          >
          <input type="hidden" name="authenticity_token" value={ FaceBarkAssets.authToken }/>
          <div className="log-in-form-field">
            <label>Username or Email</label>
            <input type="text" onChange={ this.update("username") } name="user[username]" value={ this.state.username }/>
          </div>

          <div className="log-in-form-field">
            <label>Password</label>
            <input type="password" onChange={ this.update("password") } name="user[password]" value={ this.state.password }/>
          </div>

          <button
            onClick={ this.handleSubmit }
            className="log-in-button"
            type="submit"
            disabled={ disabled }
            >
            Log In
          </button>

          <div className="guest-user-buttons">
            <button
              onClick={ this.logInAsBailey }
              className="guest-user-button"
              type="button"
              disabled={ disabled }
              >
              Log in as Bailey
            </button>

            <button
              onClick={ this.logInAsUlysses }
              className="guest-user-button"
              type="button"
              disabled={ disabled }
              >
              Log in as Ulysses
            </button>
          </div>

        </form>
      </div>
    );
  }

});
