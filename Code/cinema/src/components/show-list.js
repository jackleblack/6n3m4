import React, {Component} from "react";
import {render} from "react-dom";

import {grommet, Grid, Grommet, ResponsiveContext} from "grommet";

import {ShowCard} from "./";

class ShowList extends Component {
  state = {
    shows: this.props.shows ,
    showsWithDetail: [],
    isLoading: true,
    errors: null
  };


  componentDidMount() {
    // const {shows} = this.props;
    //
    // this.setState({isLoading: true});
    // console.log('eee');
    // console.log(this.state.shows);
    // var showsDetail = [];
    // for (var show in this.props.shows) {
    //   var detail = fetch("/.netlify/functions/getShow?slug=" + 'ad-astra')
    //     .then(response => { response.json()
    //       .then(console.log);
    //     });
    //   showsDetail.push(detail);
    // }
    // this.setState({isLoading: false, showsWithDetail: showsDetail});
    // console.log(this.props);
  }

  updateFavorite = index => {
    const {shows} = this.state;
    const newShows = [...shows];

    newShows[index].favorite = !newShows[index].favorite;
    this.setState({shows: newShows});
  };

  render() {
    const {showsWithDetail} = this.state;
    const shows = this.props.shows;
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            align="start"
            columns={size !== "small" && {count: "fill", size: "medium"}}
            gap="medium"
          >
            {/*{showsWithDetail.map(function(show, index){*/}
            {/*  return <li key={ index }>{show.name}</li>;*/}
            {/*})}*/}
            { Object.keys(shows).map(name => (
              <ShowCard
                key={name}
                title={name}
                show={shows[name]}
                onClickFavorite={() => this.updateFavorite(name)}
              />
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export {ShowList};
