import React, { Component } from "react";
import { render } from "react-dom";

import { grommet, Grid, Grommet, ResponsiveContext } from "grommet";

import {CinemaCard} from "./components";

class App extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <CinemaCard/>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
