import React, { Component } from "react";
import StateService from "../services/state.service";
import { Switch, Route, Link } from "react-router-dom";
import StateComponent from "./state.component";

export default class StateListComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveStates = this.retrieveStates.bind(this);
    
    this.state = {
      statelist: []
    };
  }

  componentDidMount() {
    this.retrieveStates();
  }

  retrieveStates() {
    StateService.getAll()
      .then(response => {
        this.setState({
          statelist: response.data.statelist
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { statelist } = this.state;

    return (
      <div>
      {statelist.map(data => (
        <p>
        <Link to={"/state/"+data.statecode} className="nav-link">
        {data.statename}
        </Link></p>
      ))}
    </div>
    );
  }
}