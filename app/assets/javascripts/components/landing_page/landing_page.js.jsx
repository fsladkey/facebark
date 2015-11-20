var LandingPage = React.createClass({

  componentDidMount: function() {
    SessionStore.on("change", this._change);
  },

  render: function(){
    return (
      <div className="landing-page group">
        <LandingPageHeader/>
        <SignUpForm/>
      </div>
    );
  },

  _change: function() {
    var currentUser = SessionStore.currentUser();
  }

});


//        <GuestUserSignIn/>
