import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext, Box} from "grommet";

import {CinemaCard} from "./components/Cinema/Card";
import {AppHeader} from "./components/Layout/AppHeader";

class App extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <AppHeader
          appName="6n3m4"
          // appIcon={<Menu />}
          // userSession={userSession}
        />
        <Box flex overflow="auto" gap="medium" pad="medium">
          <CinemaCard/>
        </Box>
      </Grommet>
    );
  }
}

render(<App/>, document.getElementById("root"));
