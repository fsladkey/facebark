var About = function (props) {
  var Link = ReactRouter.Link;
  var user = UserStore.user();
  return (
    <div className="about">
      <h1>About</h1>
      <div className="about-info" >
        <ul className="about-choices">
          <li onClick={ this.handleClick }>
            <Link to={ '/' + user.username + '/about/info' }>
              Info
            </Link>
          </li>
          <li onClick={ this.handleClick }>
            <Link to={ '/' + user.username + '/about/bio' }>
              Bio
            </Link>
          </li>
        </ul>
        { props.children }
      </div>
    </div>
  );
};
