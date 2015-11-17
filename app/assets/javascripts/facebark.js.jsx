$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
    <div>
      <Route path="/" component={App}>
        <Route path=":username" component={Profile}/>
      </Route>
    </div>
  );
  React.render(<Router>{routes}</Router>, root);
});
