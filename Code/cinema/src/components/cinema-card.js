import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext, Box} from "grommet";

import {ShowList} from "./";

class CinemaCard extends Component {
  state = {
    shows: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    fetch("/.netlify/functions/getShows")
      .then(response => response.json())
      .then(response => this.setState({ isLoading: false, shows: response.result }))
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <Box fill background="light-1">
        <h1>Cinema Plan de campagne</h1>
        <ShowList shows={this.state.shows}/>
      </Box>
    );
  }
}

export {CinemaCard};
