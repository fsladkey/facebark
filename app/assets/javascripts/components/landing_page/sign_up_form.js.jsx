var SignUpForm = React.createClass({

  getInitialState: function () {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      month: null,
      day: null,
      year: null,
      gender: null,
      date: null
    };
  },

  setDay: function (e) {
    this.setState({day: e.currentTarget.value});
  },

  setMonth: function (e) {
    this.setState({month: e.currentTarget.value});
  },

  setYear: function (e) {
    this.setState({year: e.currentTarget.value});
  },

  setGender: function (e) {
    this.setState({gender: e.currentTarget.value});
  },

  update: function (field) {
    return function (e) {
      var newState = {};
      newState[field] = e.currentTarget.value;
      this.setState(newState);
    }.bind(this);
  },

  formatDate: function() {
    var month = this.state.month,
        day = this.state.day,
        year = this.state.year;

    return year + "-" + month + "-" + day;
  },

  render: function() {
    var subText = "It's free, because dogs have no concept of currency.";

    return (
      <div className="sign-up-form group">
      <h3 className="sign-up-form-header">Sign Up</h3>
        <p className="sign-up-form-sub-header">{ subText }</p>
        <form className="group" action="/users" method="POST">
          <label/>
            <input
              onChange={ this.update("firstname") }
              name="user[firstname]"
              className="small-input"
              type="text"
              value={ this.state.firstname }
              placeholder="First name"
              />
          <label/>
            <input
              onChange={ this.update("lastname") }
              type="text"
              name="user[lastname]"
              className="small-input"
              value={ this.state.lastname }
              placeholder="Last name"
              />
          <label/>
            <input
              onChange={ this.update("username") }
              name="user[username]"
              type="text"
              value={ this.state.username }
              placeholder="Username"
              />
          <label/>
            <input
              valueLink={ this.update("email") }
              name="user[email]"
              type="text"
              placeholder="Email"
              />
          <label/>
            <input
              onChange={ this.update("password") }
              name="user[password]"
              type="password"
              placeholder="Password"
              />
          <label className="birthday">Birthday</label>
            <DateSelector
              setDay={ this.update('day') }
              setMonth={ this.update('month') }
              setYear={ this.update('year') }
            />
          <label/>
          <div className="gender-selector group">
          <label className="gender-choice">
            <input
              onChange={ this.update('gender') }
              className="radio"
              name="gender"
              value="female"
              name="user[gender]"
              type="radio"/>
              Female
            </label>
            <label className="gender-choice">
              <input
                onChange={this.setGender}
                className="radio"
                name="gender"
                value="male"
                name="user[gender]"
                type="radio"/>
              Male
            </label>
          </div>
            <button
              className="sign-up-button"
              type="submit">
                Sign Up
            </button>
        </form>
      </div>
    );
  }

});
