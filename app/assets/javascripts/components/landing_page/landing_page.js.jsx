var LandingPage = React.createClass({

  render: function(){
    return (
      <div className="landing-page">

        <div className="full-header">
          <LandingPageHeader/>
        </div>

        <div className="landing-page-content group">
          <SignUpForm/>
        </div>

      </div>
    );
  }

});
