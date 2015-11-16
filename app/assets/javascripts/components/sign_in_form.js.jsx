var LogInForm = React.createClass({

  render: function() {
    return (
      <div>
        <form className="log-in-form group">
          <div className="log-in-form-field">
            <label>Username or Email</label>
            <input type="text"/>
          </div>
          <div className="log-in-form-field">
            <label>Password</label>
            <input type="password"/>
          </div>

          <button className="log-in-button" type="submit">Log In</button>
        </form>
      </div>
    );
  }

});
