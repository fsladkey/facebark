var LandingPageHeader = React.createClass({

  render: function() {
    return (
      <header className="landing-header group">
        <h1 className="header-logo">
          <img src="/facebark-logo.png" alt="rss feed" />
        </h1>
        <LogInForm/>
      </header>
    );
  }

});
