import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import StateListComponent from "./components/state-list.component";
import StateComponent from './components/state.component';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
          COVID19
          </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/state"} className="nav-link">
              State
              </Link>
          </li>
          <li className="nav-item">
            <Link to={"/case"} className="nav-link">
              Case
              </Link>
          </li>
        </div>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
              </Link>
          </li>
          <li className="nav-item">
            <Link to={"/logout"} className="nav-link">
              Logout
              </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Register
              </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3 pt-3 border">
        <Switch>
          <Route exact path={["/", "/state"]} component={StateListComponent} />
          <Route path="/state/:code" component={StateComponent} />
          <Route path="/register" component={StateListComponent} />
          <Route path="/login" component={StateListComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
