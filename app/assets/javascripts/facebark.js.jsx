$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
    <div>
      <Route path="/" component={App}>
        <IndexRoute component={Feed}/>

        <Route path="posts" component={Posts}>
          <Route path=":post_id" component={PostShow}></Route>
        </Route>

        <Route path=":username" component={Profile}>
          <IndexRoute component={ProfileShow}/>

          <Route path="friends" component={Friends}/>

          <Route path="about" component={About}/>

          <Route path="photos" component={Photos}>
            <IndexRoute component={AlbumList}/>
            <Route path=":album_id" component={Album}>
          </Route>

        </Route>

        </Route>
      </Route>
    </div>
  );

  React.render(<Router>{routes}</Router>, root);

});
