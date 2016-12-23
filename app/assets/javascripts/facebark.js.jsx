$(function () {

  var root = document.getElementById('content');
  var landingPage = document.getElementById('landing-page-content');

  if (root) {
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;
    var browserHistory = ReactRouter.browserHistory;

    var routes = (
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Feed }/>

          <Route path="games" component={ Posts }>
            <Route path="twentyfortyeight" component={ TwenyFortyBoard }/>
            <Route path="snake" component={ Snake }/>
          </Route>


          <Route path=":username" component={ Profile }>
            <IndexRoute component={ ProfileShow }/>

            <Route path="friends" component={ Friends }/>

            <Route path="about" component={ About }>
              <IndexRoute component={ ProfileInfo }/>
              <Route path="info" component={ ProfileInfo }/>
              <Route path="bio" component={ ProfileBio }/>
            </Route>

            <Route path="photos" component={ Photos }>
              <IndexRoute component={ AlbumList }/>
              <Route path=":album_id" component={ Album }/>
            </Route>

          </Route>
        </Route>
      </Router>
    );

    var currentUserJson = document.getElementById("bootstrap-current-user");

    if (currentUserJson) {
      SessionActions.receiveCurrentUser(JSON.parse(currentUserJson.innerHTML));
    }

    ReactDOM.render(routes, root);
  } else if (landingPage) {
    ReactDOM.render(<LandingPage />, landingPage);
  }

});
