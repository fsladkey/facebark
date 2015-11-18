$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
    <div>
      <Route path="/" component={App}>
        <IndexRoute component={Feed}/>
        <Route path=":username" component={Profile}>
          <IndexRoute component={ProfileShow}/>
          <Route path="about" component={About}></Route>
          <Route path="photos" component={Photos}></Route>
          <Route path="friends" component={Friends}></Route>
        </Route>
      </Route>
    </div>
  );
  React.render(<Router>{routes}</Router>, root);
});
