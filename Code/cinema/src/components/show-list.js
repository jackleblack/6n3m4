import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext} from "grommet";

import {ShowCard} from "./";

class ShowList extends Component {
  state = {
    shows: this.props.shows,
    isLoading: true,
    errors: null
  };

  updateFavorite = index => {
    const {shows} = this.state;
    const newShows = [...shows];

    newShows[index].favorite = !newShows[index].favorite;
    this.setState({shows: newShows});
  };

  render() {
    // const shows = this.props.shows.reverse().slice(0,2);
    const shows = this.props.shows.reverse();
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            align="start"
            columns={size !== "small" && {count: "fill", size: "medium"}}
            gap="medium"
          >
            {shows.map((show, index) => (
              <ShowCard
                key={index}
                show={show}
                onClickFavorite={() => this.updateFavorite(index)}
              />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export {ShowList};
