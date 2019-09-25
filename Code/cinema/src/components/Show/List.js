import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext} from "grommet";

import {ShowCard} from "./Card";


export const errorNotification = {
  action: "Oups, try again",
  date: "",
  message: "Oups, try again"
};

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
    const {isLoading, errors} = this.state;
    // const shows = this.props.shows.reverse().slice(0,2);
    const {shows} = this.props;

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
                size={size}
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
