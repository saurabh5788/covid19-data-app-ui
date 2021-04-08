import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import StateListComponent from "./components/state-list.component";
import StateComponent from './components/state.component';
import LoginComponent from './components/login.component';
import UserService from "./services/user.service";

class App extends Component {
  constructor(props) {
    super(props);
    this.doLogOut = this.doLogOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = UserService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }   
  }

  doLogOut() {
    UserService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            COVID19
          </Link>
          {currentUser &&
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/state"} className="nav-link">
                  State
              </Link>
              </li>
            </div>
          }

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Log Out
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/">
            {currentUser ? (           
              <Redirect to="/state" />           
            ) : (
              <Redirect to="/login" />
            )}
            </Route>

            <Route exact path={"/login"} component={LoginComponent} />
            <Route exact path="/state" component={StateListComponent} />
            <Route exact path="/state/:code" component={StateComponent} />
            <Route exact path="/register" component={StateListComponent} />
            <Route path="/register" component={StateListComponent} />
            <Route component={LoginComponent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
