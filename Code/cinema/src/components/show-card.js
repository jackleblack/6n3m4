import React, { Component } from "react";
import TimeAgo from "react-timeago";
import styled, { css } from "styled-components";

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

import { Favorite } from "grommet-icons";

import { Rating } from "../components";

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
    showReviews: false
  };


  renderCardHeader = () => {
    const { show } = this.state;
    let totalRating = undefined;
    // const hasReviews = show.reviews && show.reviews.length;
    const hasReviews = 0;

    return (
      <Box pad={{ horizontal: "small" }}>
        <Box
          margin={{ top: "small" }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level="3" margin="none">
              {show.title}
            </Heading>
            <Text color="dark-5" size="small">
              {show.cusine} &#8226; {show.price}
            </Text>
          </Box>
          {totalRating ? (
            <Box align="end" justify="betwen" gap="xsmall">
              <Rating value={totalRating} />
              <Text color="dark-5" size="xsmall">
                {totalRating} {`(${show.reviews.length})`}
              </Text>
            </Box>
          ) : (
            <Box
              round="xsmall"
              pad={{ vertical: "xxsmall", horizontal: "medium" }}
              background="brand"
            >
              <Text size="xsmall">NEW</Text>
            </Box>
          )}
        </Box>
        <Text
          size="small"
          color="dark-5"
          margin={{ vertical: "small" }}
          truncate
        >
          {show.description}
        </Text>
      </Box>
    );
  };
  renderCardFooter = () => {
    const { onClickFavorite, show } = this.props;
    const hasReviews = show.reviews && show.reviews.length;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Box
            tag="footer"
            direction="row"
            align="center"
            justify="between"
            pad={{ left: "small", vertical: "small" }}
          >
            {hasReviews ? (
              <Button
                a11yTitle={`Reviews for ${show.name}`}
                onClick={() =>
                  this.setState({ showReviews: !this.state.showReviews })
                }
              >
                <Box round="small">
                  <Text color="brand" size="small">
                    <strong>REVIEWS</strong>
                  </Text>
                </Box>
              </Button>
            ) : (
              <span />
            )}
            {onClickFavorite && (
              <Button
                margin={{ right: "small" }}
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
    const { show } = this.props;
    const { showReviews } = this.state;
    return (
      <Collapsible open={showReviews}>
        <Box
          style={{ maxHeight: "240px" }}
          border="top"
          overflow="auto"
          pad="small"
        >
          {show.reviews.map(({ comment, name, rating, date }) => (
            <Box key={`${name}_${date}`} flex={false}>
              <Heading level="4" margin="none">
                {name}
              </Heading>
              <Text size="small" color="dark-5">
                <TimeAgo date={date} />
              </Text>
              <Rating value={rating} size="small" margin={{ top: "small" }} />
              <Paragraph size="small">{comment}</Paragraph>
            </Box>
          ))}
        </Box>
      </Collapsible>
    );
  };
  render() {
    const { show = {}, onClickFavorite, ...rest } = this.props;
    const hasReviews = show.reviews && show.reviews.length;
    return (
      <Box round="xxsmall" elevation="small" overflow="hidden" {...rest}>
        <Box height="small">
          <Image src={show.image} fit="cover" />
        </Box>
        {this.renderCardHeader()}
        {hasReviews && this.renderShowReviews()}

        {(hasReviews || onClickFavorite) && this.renderCardFooter()}
      </Box>
    );
  }
}

export { ShowCard };
