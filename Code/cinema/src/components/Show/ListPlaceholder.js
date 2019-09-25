import React, {Component} from "react";
import {Box, Button, Grid, Heading, Image, ResponsiveContext, Text} from "grommet";
import Moment from "react-moment";
import ShowCardPlaceholder from "./CardPlaceholder";


export class ShowListPlaceholder extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            align="start"
            columns={size !== "small" && {count: "fill", size: "medium"}}
            gap="medium"
          >
            <ShowCardPlaceholder  size={size}/>
            <ShowCardPlaceholder  size={size}/>
            <ShowCardPlaceholder  size={size}/>
            <ShowCardPlaceholder  size={size}/>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default ShowListPlaceholder;

