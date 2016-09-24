var SignUpForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
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

  setDay: function(e) {
    this.setState({day: e.currentTarget.value});
  },

  setMonth: function(e) {
    this.setState({month: e.currentTarget.value});
  },

  setYear: function(e) {
    this.setState({year: e.currentTarget.value});
  },

  setGender: function(e) {
    this.setState({gender: e.currentTarget.value});
  },

  formatDate: function() {
    var month = this.state.month,
        day = this.state.day,
        year = this.state.year;

    return year + "-" + month + "-" + day;
  },

  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   user = {
  //     firstname: this.state.firstname,
  //     lastname: this.state.lastname,
  //     username: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password,
  //     birthday: this.formatDate(),
  //     gender: this.state.gender
  //   };
  //   UserApiUtil.createUser(user);
  // },

  render: function() {
    var subText = "It's free, because dogs have no concept of currency.";

    return (
      <div className="sign-up-form group">
      <h3 className="sign-up-form-header">Sign Up</h3>
        <p className="sign-up-form-sub-header">{subText}</p>
        <form className="group" action="/session" method="POST">
          <label/>
            <input
              valueLink={this.linkState("firstname")}
              className="small-input"
              type="text"
              placeholder="First name"/>
          <label/>
            <input
              valueLink={this.linkState("lastname")}
              type="text"
              className="small-input"
              placeholder="Last name"/>
          <label/>
            <input
              valueLink={this.linkState("username")}
              type="text"
              placeholder="Username"/>
          <label/>
            <input
              valueLink={this.linkState("email")}
              type="text"
              placeholder="Email"/>
          <label/>
            <input
              valueLink={this.linkState("password")}
              type="password"
              placeholder="Password"/>
          <label className="birthday">Birthday</label>
            <DateSelector
              setDay={this.setDay}
              setMonth={this.setMonth}
              setYear={this.setYear}
            />
          <label/>
          <div className="gender-selector group">
          <label className="gender-choice">
            <input
              onChange={this.setGender}
              className="radio"
              name="gender"
              value="female"
              type="radio"/>
              Female
            </label>
            <label className="gender-choice">
              <input
                onChange={this.setGender}
                className="radio"
                name="gender"
                value="male"
                type="radio"/>
              Male
            </label>
          </div>
            <button
              onClick={this.handleSubmit}
              className="sign-up-button"
              type="submit">
                Sign Up
            </button>
        </form>
      </div>
    );
  }

});
