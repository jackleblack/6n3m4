import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext, Box, Heading} from "grommet";

import {ShowList,AppHeader} from "./";

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
      <Box fill>
        <ShowList shows={this.state.shows}/>
      </Box>
    );
  }
}

export {CinemaCard};
