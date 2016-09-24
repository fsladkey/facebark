$(function () {

  var root = document.getElementById('content');
  var landingPage = document.getElementById('landing-page-content');

  if (root) {
    var Route = ReactRouter.Route;
    var Router = ReactRouter.Router;
    var IndexRoute = ReactRouter.IndexRoute;

    var routes = (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Feed}/>

          <Route path="posts" component={Posts}>
            <Route path=":post_id" component={PostShow}></Route>
          </Route>

          <Route path="games" component={Posts}>
            <Route path="twentyfortyeight" component={TwenyFortyBoard}/>
            <Route path="snake" component={Snake}/>
          </Route>


          <Route path=":username" component={Profile}>
            <IndexRoute component={ProfileShow}/>

            <Route path="friends" component={Friends}/>

            <Route path="about" component={About}/>

            <Route path="photos" component={Photos}>
              <IndexRoute component={AlbumList}/>
              <Route path=":album_id" component={Album}/>

            </Route>

          </Route>
        </Route>
      </Router>
    );

    var currentUserJson = document.getElementById("bootstrap-current-user");

    if (currentUserJson) {
      SessionActions.receiveCurrentUser(JSON.parse(currentUserJson.innerHTML));
    }

    React.render(routes, root);
  } else if (landingPage) {
    React.render(<LandingPage />, landingPage);
  }

});
