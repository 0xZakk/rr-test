import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/account" component={Account} exact />
          <Route render={() => <Route component={Error} />} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h1>Welcome Home</h1>;
}

function Error() {
  return <h1>Ooops</h1>;
}

const Account = () => {
  let match = useRouteMatch();

  return (
    <Router>
      <NavBar />
      <h1>Account</h1>
      <Switch>
        <Route path={`${match.path}/edit`} component={EditAccount} exact />
        <Route path={`${match.path}/myorders`} component={MyOrders} />
        <Route path={`${match.path}/favorites`} component={Favorites} />
      </Switch>
    </Router>
  );
};

function NavBar() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/account/edit">Edit Account</Link>
          </li>
          <li>
            <Link to="/account/myorders">My Orders</Link>
          </li>
          <li>
            <Link to="/account/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const EditAccount = () => <h1>Edit Account</h1>;
const MyOrders = () => <h1>My Orders</h1>;
const Favorites = () => <h1>Favorites</h1>;

export default App;
