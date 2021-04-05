import React, { Component } from "react";
import StateService from "../services/state.service";

export default class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveState = this.retrieveState.bind(this);

    this.state = {
      state: []
    };
  }

  componentDidMount() {
    this.retrieveState(this.props.match.params.code);
  }

  retrieveState(code) {
    StateService.get(code)
      .then(response => {
        this.setState({
          state: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { state } = this.state;

    return (
      <div>
        {state.statename}
        {state.population}
      </div>
    );
  }
}