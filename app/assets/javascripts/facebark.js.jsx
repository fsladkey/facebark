$(function () {

  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
          <div>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
    <div>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="index" component={LandingPage}/>
      </Route>
    </div>
  );
  React.render(<Router>{routes}</Router>, root);
});
