import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext} from "grommet";

import {ShowCard} from "./";

class CinemaList extends Component {
  state = {
    cinema: [],
    isLoading: true,
    errors: null
  };

  const [value, setValue] = React.useState('medium');

  handleClick = val =>
    setState({
      ...state,
      [val]: state[val] + 1
    })

  componentDidMount() {
    fetch("/.netlify/functions/getShows")
      .then(response => response.json())
      .then(json => this.setState({ isLoading: false, shows: json.result }))
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const {shows} = this.state;
    return (
      <ResponsiveContext.Consumer>
        <Select
          options={['small', 'medium', 'large']}
          value={value}
          onChange={({ option }) => setValue(option)}
          onChange={this.setCinema(option)}
        />
      </ResponsiveContext.Consumer>
    );
  }
}

export {CinemaList};
