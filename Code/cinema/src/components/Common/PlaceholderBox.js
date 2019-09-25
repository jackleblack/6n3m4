import React from "react";

import styled from "styled-components";
import {Box} from "grommet/es6";

export const AnimationBox = styled(Box)`
  animation-iteration-count: infinite;
`;

export const PlaceholderBox = ({ ...rest }) => (
  <AnimationBox
    animation={{
      type: "fadeOut",
      duration: 3000
    }}
    background="light-4"
    round
    {...rest}
  />
);

export default PlaceholderBox;
