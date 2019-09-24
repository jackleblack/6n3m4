import React, {Component, useState} from "react";
import Moment from 'react-moment';
import moment from 'moment';

import TimeAgo from "react-timeago";
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import styled, {css} from "styled-components";

import {
  Box,
  Button,
  Collapsible,
  Image,
  Heading,
  Paragraph,
  Text,
  ThemeContext
} from "grommet";

import {Favorite} from "grommet-icons";

import {Rating} from "../components";

const formatter = buildFormatter(frenchStrings)

const filledIcon = css`
  path[fill="none"] {
    fill: ${props => props.theme.colors["dark-4"]};
  }
`;

const CardFavorite = styled(Favorite)`
  ${props => (props.checked ? filledIcon : "")}
`;

class ShowCard extends Component {
  state = {
    showReviews: false,
    isLoadingShowTimes: false,
    show: null,
    showTimes: [],
    day: moment(new Date()),
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    this.setShowDetail();
  }

  componentDidUpdate() {
    // this.setShowDetail();
  }

  setShowDetail() {
    if (this.props.show.name && !this.state.show) {
      fetch("/.netlify/functions/getShow?slug=" + this.props.show.name)
        .then(response => response.json())
        .then(response => this.setState({isLoading: false, show: response.result}))
        // Catch any errors we hit and update the app
        .catch(error => this.setState({error, isLoading: false}));
    }
  }

  setShowTimes = () => {
    console.log('ici')
    fetch("/.netlify/functions/getShowTimes?slug=" + this.props.show.name + "&day=" + this.state.day.format('YYYY-MM-DD'))
      .then(response => response.json())
      .then(response => this.setState({
        isLoadingShowTimes: false,
        showTimes: response.result,
        showReviews: !this.state.showReviews
      }))
      // Catch any errors we hit and update the app
      .catch(error => this.setState({error, isLoadingShowTimes: false}));
  }

  renderCardHeader = () => {
    const {show} = this.state;
    let totalRating = undefined;
    // const hasReviews = show.reviews && show.reviews.length;
    const hasReviews = 0;

    return (
      <Box pad={{horizontal: "small"}}>
        <Box
          margin={{top: "small"}}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level="3" margin="none" truncate color={"accent-1"}>
              {show.title}
            </Heading>
            <Text color="dark-2" size="small" truncate>
              {show.directors} &#8226; {show.genres}
            </Text>
            <Text color="dark-5" size="small" truncate>
              {show.actors}
            </Text>
          </Box>
          {totalRating ? (
            <Box align="end" justify="betwen" gap="xsmall">
              <Rating value={totalRating}/>
              <Text color="dark-5" size="xsmall">
                {totalRating} {`(${show.reviews.length})`}
              </Text>
            </Box>
          ) : (
            <Box
              round="xsmall"
              pad={{vertical: "xxsmall", horizontal: "medium"}}
              background="accent-1"
            >
              <Text size="xsmall" color={"light-1"}>
                <Moment format="DD/MM/YYYY">{show.releaseAt}</Moment>
              </Text>
            </Box>
          )}
        </Box>
        <Text
          size="small"
          color="dark-5"
          margin={{vertical: "small"}}
          truncate
        >
          {show.synopsis}
        </Text>
      </Box>
    );
  };
  renderCardFooter = () => {
    const {show, showReviews} = this.state;
    const {onClickFavorite} = this.props;
    const hasReviews = show.reviews && show.reviews.length;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Box
            tag="footer"
            direction="row"
            align="center"
            justify="between"
            pad={{left: "small", vertical: "small"}}
          >
            <Button
              a11yTitle={`Reviews for ${show.name}`}
              onClick={this.setShowTimes}
            >
              <Box round="small">
                <Text color="accent-1" size="small">
                  <strong>Séances</strong>
                </Text>
              </Box>
            </Button>
            {onClickFavorite && (
              <Button
                margin={{right: "small"}}
                a11yTitle={`Favorite ${show.name}`}
                onClick={onClickFavorite}
              >
                <Box>
                  <CardFavorite
                    theme={theme.icon}
                    checked={show.favorite}
                  />
                </Box>
              </Button>
            )}
          </Box>
        )}
      </ThemeContext.Consumer>
    );
  };
  renderShowReviews = () => {
    const {show, showTimes, showReviews, isLoadingShowTimes, day} = this.state;
    console.log(showTimes)
    return (
      <Collapsible open={showReviews}>
        <Box
          style={{maxHeight: "240px"}}
          border="top"
          overflow="auto"
          pad="small"
        >
          <Heading level="3" margin="none">
            <Moment format="DD/MM/YYYY">{day}</Moment>
          </Heading>
          {
            showTimes.map((showtime, index) => (
              <Box key={index} justify="between" pad={{vertical: 'medium'}}
                   direction="row" border={{color: 'dark', size: 'large'}}
              >
                <Box>
                  <Heading level="4" margin="none">
                    <Moment format="HH:mm">{showtime.time}</Moment>
                  </Heading>
                  <Text size="small" color="dark-5">
                    <TimeAgo date={showtime.time} formatter={formatter}/>
                  </Text>
                </Box>
                <Box align="end">
                  <Button target={"_blank"} color={"accent-1"} gap={"xxsmall"
                  } href={showtime.refCmd}
                          label='Réserver' onClick={() => {
                  }}/>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Collapsible>
    );
  };

  render() {
    const {show, isLoading} = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const {onClickFavorite, ...rest} = this.props;
    const hasReviews = show.reviews && show.reviews.length;
    console.log(show.title)
    return (
      <Box round="xxsmall" elevation="small" overflow="hidden" {...rest}>
        <Box height="big">
          <Image src={show.posterPath.lg} fit="contain"/>
        </Box>
        {this.renderCardHeader()}
        {this.renderShowReviews()}

        {(hasReviews || onClickFavorite) && this.renderCardFooter()}
      </Box>
    );
  }
}

export {ShowCard};
