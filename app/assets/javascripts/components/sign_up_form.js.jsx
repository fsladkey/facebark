var SignUpForm = React.createClass({

  render: function() {
    var subText = "It's free, because dogs have no concept of currency.";

    return (
      <div className="sign-up-form group">
      <h3 className="sign-up-form-header">Sign Up</h3>
        <p className="sign-up-form-sub-header">{subText}</p>
        <form className="group">
          <label/>
            <input className="small-input" type="text" placeholder="First name"/>
          <label/>
            <input type="text" className="small-input" placeholder="Last name"/>
          <label/>
            <input type="text" placeholder="Username or email"/>
          <label/>
            <input type="password" placeholder="Password"/>
          <label/>
            <input type="password" placeholder="Re-enter password"/>
          <label className="birthday">Birthday</label>
            <DateSelector/>
          <label/>
          <div className="gender-selector group">
            <input className="radio" name="gender" type="radio"/><label className="gender-choice">Female</label>
            <input className="radio" name="gender" type="radio"/><label className="gender-choice">Male</label>
          </div>
          <button className="sign-up-button" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }

});
