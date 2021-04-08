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
    const {statelist} = this.state;
    var index = 1;

    return (
      <div>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>State Name</th>
              <th>Population</th>              
            </tr>
          </thead>
          <tbody>
            {statelist.map(data => (
              <tr>
                <td>
                {index++}
                </td>
                <td>
                  <Link to={"/state/" + data.statecode}>
                    {data.statename}
                  </Link>
                </td>
                <td>
                  {data.population}
                </td>                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}