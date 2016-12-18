function fadeIn(node, speed = 10) {
  if (!node) return;
  function increaseOpacity() {
    if (parseFloat(node.style.opacity) < 1) {
      node.style.opacity = (parseFloat(node.style.opacity) + 0.05);
      setTimeout(increaseOpacity, speed);
    } else {
      node.style.opacity = 1;
    }
  }
  node.style.opacity = 0;
  setTimeout(increaseOpacity, speed);
}

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

          <Route path="posts" component={ Posts }>
            <Route path=":post_id" component={ PostShow }></Route>
          </Route>

          <Route path="games" component={ Posts }>
            <Route path="twentyfortyeight" component={ TwenyFortyBoard }/>
            <Route path="snake" component={ Snake }/>
          </Route>


          <Route path=":username" component={ Profile }>
            <IndexRoute component={ ProfileShow }/>

            <Route path="friends" component={ Friends }/>

            <Route path="about" component={ About }/>

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
